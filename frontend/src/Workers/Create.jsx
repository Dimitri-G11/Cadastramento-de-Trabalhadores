import React, { useEffect, useState } from 'react';
import {Box, Button, Typography} from '@mui/material';
import Date from '../components/forms/Date';
import MultilineTextFields from '../components/forms/MultilineTextFields';
import SelectS from '../components/forms/SelectS';
import TexFields1 from '../components/forms/TexFields1';
import { useForm } from 'react-hook-form';
import SubmitB from '../components/forms/SubmitB';
import AxiosInstance from '../components/axiosinstances'
import Dayjs from 'dayjs'
import {useNavigate} from 'react-router-dom'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { parsePhoneNumberFromString } from 'libphonenumber-js';

function Create() {

    
    // Função para validar qualquer número de telefone
    const telefoneValidator = (value, context) => {
      try {
        const phoneNumber = parsePhoneNumberFromString(value);
        if (!phoneNumber || !phoneNumber.isValid()) {
          return context.createError({ message: 'Número de telefone inválido. (valido seria: +55 11 91234-5678)' });
        }
        return true;
      } catch {
        return context.createError({ message: 'Número de telefone inválido. (valido seria: +55 11 91234-5678)' });
      }
    };
    
    const schema = yup.object().shape({
      name: yup.string().required("Name field is required"),
      position: yup.string().required("Position field is required"),
      last_name: yup.string().required("Last name field is required"),
      phone: yup
        .string().required("Phone field is required")
        .test('is-valid-phone', 'Número de telefone inválido', telefoneValidator),
      start_date: yup.date().required("Start date field is required").max(yup.ref("end_date"), "The start date needs to be before the end date"),
      end_date: yup.date().required("End date field is required"),
      status: yup.string().required("Status field is required"),
      salary: yup.number().required("Salary field is required"),
    });
    

    


    const Navigate=useNavigate()
    const{handleSubmit,control}=useForm({resolver:yupResolver(schema)})
    const submission =(data)=>{
        const StartDate=Dayjs(data.start_date["$d"]).format("YYYY-MM-DD")
        const EndDate=Dayjs(data.end_date["$d"]).format("YYYY-MM-DD")

        AxiosInstance.post('/RegisterdWorkers/Workers/',{

            name:data.name,
            status:data.status,
            comments:data.comments,
            start_date:StartDate,
            end_date:EndDate,
            last_name:data.last_name,
            position:data.position,
            salary:data.salary,
            phone:data.phone,

        })
        .then((response)=>{
            Navigate('/home')
        })

    }

    return (
        <div>
            <form onSubmit={handleSubmit(submission)}>
                <Box sx={{display:'flex',widows:'100%', backgroundColor:'#00003f',marginBottom:'10px'}}>
                        <Typography sx={{marginLeft:'20px',color:'#fff'}}>
                            Create workers' records
                        </Typography>
                </Box>

                <Box sx={{display:'flex',width:'100%',boxShadow:3,padding:4,flexDirection:'column'}}>
                        <Box sx={{display:'flex',justifyContent:'space-around',marginBottom:'40px'}}> 
                            <TexFields1
                                label="Name"
                                name="name"
                                control={control}
                                width={"30%"}
                            />

                            <TexFields1
                                label="Last name"
                                name="last_name"
                                control={control}
                                width={"30%"}
                            />

                            <TexFields1
                                label="Position"
                                name="position"
                                control={control}
                                width={"30%"}
                            />


                        </Box>

                        <Box sx={{display:'flex',justifyContent:'space-around',marginBottom:'40px'}}> 
                            
                        <TexFields1
                                label="Salary"
                                name="salary"
                                control={control}
                                width={"30%"}
                            />

                            <SelectS
                                label="Status"
                                name="status"
                                control={control}
                                width={"342px"}                            />

                            <TexFields1
                                label="Phone number"
                                name="phone"
                                control={control}
                                width={"30%"}
                            />
        
                        </Box>

                        <Box sx={{display:'flex',justifyContent:'space-around'}}> 
                        <MultilineTextFields
                                label="Comments about"
                                name="comments"
                                control={control}
                                width={"30%"}
                            />

                            <Date
                                label="Start date"
                                name="start_date"
                                control={control}
                                width={"30%"}

                            />

                            <Date
                                label="End date"
                                name="end_date"
                                control={control}
                                width={"30%"}

                            />
                        </Box>
                        <Box sx={{textAlign:'center',alignItems:"center",marginTop:'10px'}}><SubmitB type="submit" label="submit"></SubmitB></Box>

                </Box>
            </form>
        </div>
    );
}

export default Create;

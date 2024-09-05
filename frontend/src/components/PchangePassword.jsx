import '../App.css'
import {Box} from '@mui/material'
import TextFieldPassword from './forms/TextFieldPassword';
import SubmitB from './forms/SubmitB';
import {useNavigate, useParams} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import AxiosInstance from './axiosinstances';
import Messagebox from './Mesaggebox';
import {react, useState } from 'react';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'




const PchangePassword=()=>{
    const Navigate =useNavigate()
    const [showmessage, setshowmessage]=useState(false)
    const {token}=useParams()

    const schema=yup.object({
        password:yup.string().required()
                    .min(8, "Must have at least 8 characters")
                    .matches(/[A-Z]/,"Password must contain at least one Capital letter")
                    .matches(/[a-z]/,"Password must contain at least one Lowercase letter")
                    .matches(/[0-9]/,"Password must contain at least one number")    
                    .matches(/[§=+{}~~;.,><;:!@#$%¨&*()_-¬¨£]/,"Password must contain at least one especial character"),
        password2:yup.string().required("Password confirmation is a required field")
                      .oneOf([yup.ref("password"),null],"Passwords must match"),
                    
    })
    const {handleSubmit,control}=useForm({resolver:yupResolver(schema)})


    const submission=(data)=>{
        AxiosInstance.post('api/password_reset/confirm/',
            {
                password: data.password,
                token: token,

            })
            .then((response)=>{
                setshowmessage(true)
                setTimeout(() => {
                    Navigate('/')
                },3000);
            })
        
    }
    return(

        <div className={"Background"}>
            {showmessage ? <Messagebox text={"Your password has been changed succesfully, you will be re-directed to the login page"} color={"#69C9AB"}/>: null}
             <form onSubmit={handleSubmit(submission)}>
                
                <Box className={'Whitebox'}>

                    <Box className={"itembox"}>
                        <Box className={"titleform"}> Reset password</Box>
                    </Box>

                 
                    <Box className={"itemboxr"}> 
                        <TextFieldPassword
                        
                            label={"Password"}
                            name={"password"}
                            control={control}
                        />

                    </Box>

                    
                    <Box className={"itemboxr"}> 
                        <TextFieldPassword
                        
                            label={"Reset password"}
                            name={"password2"}
                            control={control}
                        />

                    </Box>


                    <Box className={"itembox"}> 
                        <SubmitB
                            label="Change password"
                            type={"submit"}                  
                        />
                    </Box>

                    <Box className={"itembox"} sx={{flexDirection:'column'}}> 



                    </Box>

                </Box>
            </form>
        </div>
    )
}



export default PchangePassword
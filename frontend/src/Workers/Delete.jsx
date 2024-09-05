import {Box,Button,Typography} from '@mui/material';
import SubmitB from '../components/forms/SubmitB';
import AxiosInstance from '../components/axiosinstances'
import {useNavigate, useParams} from 'react-router-dom'

import { useEffect,useState } from 'react';

function Delete() {

    const myparam=useParams()
    const myid=myparam.id


    const Navigate=useNavigate()
    const [myData, SetData]=useState()
    const [loading,setLoading]=useState(true)

    const GetData=()=>{
        AxiosInstance.get(`/RegisterdWorkers/Workers/${myid}/`)
        .then((response)=>
            {SetData(response.data);
            setLoading(false)})
    }
    useEffect(()=>{GetData();},[])



    const submission =(data)=>{

        AxiosInstance.delete(`/RegisterdWorkers/Workers/${myid}/`)
        .then((response)=>{
            Navigate('/home')
        })

    }

    return (
        <div>
          {loading? <p>Loading data</p>:
            <div>
                <Box sx={{display:'flex',widows:'100%', backgroundColor:'#00003f',marginBottom:'10px'}}>
                        <Typography sx={{marginLeft:'20px',color:'#fff'}}>
                           Delete {myData.name}
                        </Typography>
                </Box>

                <Box sx={{display:'felx',width:'100%',boxShadow:3,padding:4,flexDirection:'column'}}>
                        <Box sx={{display:'flex',justifyContent:'space-around',marginBottom:'40px'}}> 
                      
                            Are you sure you want to delete: {myData.name}
                        </Box>

             
                        <Box sx={{textAlign:'center',alignItems:"center",marginTop:'10px'}}><Button variant="contained" className={"send"} onClick={submission} >Delete</Button></Box>

                </Box>
            </div>}

        </div>
    );
}

export default Delete;

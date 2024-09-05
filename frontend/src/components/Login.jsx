import '../App.css'
import {Box} from '@mui/material'
import TextFieldEmail from './forms/TextFieldEmail';
import TextFieldPassword from './forms/TextFieldPassword';
import SubmitB from './forms/SubmitB';
import {Link} from 'react-router-dom'
import { set, useForm } from 'react-hook-form';
import AxiosInstance from './axiosinstances';
import { useNavigate } from 'react-router-dom';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react';
import Messagebox from './Mesaggebox';

const Login=()=>{
    const navigate=useNavigate()

    const [error,seterror]=useState(false)

    const submission=(data)=>{
        console.log(data)
        AxiosInstance.post('login/',
            {
                email: data.email,
                password: data.password,
            })
            .then((response)=>{
                console.log(data)
                localStorage.setItem('Token',response.data.token)
                navigate("/home")
            })
            .catch((error)=>{
                console.error("Error during login",error)
                seterror(true)
            })
    }


    const schema=yup.object({
        email:yup.string().email("Email expected").required("Email field is required"),
        password:yup.string().required()
                    
                    
    })

    const {handleSubmit,control}=useForm({resolver:yupResolver(schema)})

    return(
       
        <div className={"Background"}>
            {error===true? <Messagebox text={"Email or password are wrong"} color={"#EC5A76"}/>:null}
             <form onSubmit={handleSubmit(submission)}>
                <Box className={'Whitebox'}>

                    <Box className={"itembox"}>
                        <Box className={"titleform"}> Login</Box>
                    </Box>

                    <Box className={"itembox"}>
                            <TextFieldEmail 
                                label="Email"
                                name='email'
                                control={control}
                            />
                    </Box>

                    <Box className={"itembox"}> 
                        <TextFieldPassword
                            label={"Password"}
                            name='password'
                            control={control}
                        />
                    </Box>

                    <Box className={"itembox"}> 
                        <SubmitB
                            label="Log in"
                            type={"submit"}                  
                        />
                    </Box>

                    <Box className={"itembox"} sx={{flexDirection:'column'}}> 

                        <Link to='/register'> Does not have an account yet?</Link>
                        <Link to='/request/password_reset'> Forgot your password?</Link>

                    </Box>

                </Box>
            </form>
        </div>
    )
}



export default Login
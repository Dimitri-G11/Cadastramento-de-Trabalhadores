import '../App.css'
import {Box} from '@mui/material'
import TextFieldEmail from './forms/TextFieldEmail';
import SubmitB from './forms/SubmitB';
import { useForm } from 'react-hook-form';
import AxiosInstance from './axiosinstances';
import Messagebox from './Mesaggebox';
import {react, useState } from 'react';





const PasswordResetRequest=()=>{
    const [showmessage, setshowmessage]=useState(false)

    const {handleSubmit,control}=useForm()

    const submission=(data)=>{
        AxiosInstance.post('api/password_reset/',
            {
                email: data.email,
            })
            .then((response)=>{
                console.log(response.data)
                setshowmessage(true)
            })

    }
    return(

        <div className={"Background"}>
            {showmessage ? <Messagebox text={"If your email exits you have received an email with instructions for resetting your password"} color={"#69C9AB"}/>: null}
             <form onSubmit={handleSubmit(submission)}>
                
                <Box className={'Whitebox'}>

                    <Box className={"itembox"}>
                        <Box className={"titleform"}> Request password reset</Box>
                    </Box>

                    <Box className={"itembox"}>
                            <TextFieldEmail 
                                label="Email"
                                name='email'
                                control={control}
                            />
                    </Box>


                    <Box className={"itembox"}> 
                        <SubmitB
                            label="Request"
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



export default PasswordResetRequest
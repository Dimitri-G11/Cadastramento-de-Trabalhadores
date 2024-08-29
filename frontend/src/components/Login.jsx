import '../App.css'
import {Box} from '@mui/material'
import TextFieldEmail from './forms/TextFieldEmail';
import TextFieldPassword from './forms/TextFieldPassword';
import SubmitB from './forms/SubmitB';
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import AxiosInstance from './axiosinstances';
import { useNavigate } from 'react-router-dom';

const Login=()=>{
    const navigate=useNavigate()
    const {handleSubmit,control}=useForm()

    const submission=(data)=>{
        AxiosInstance.post('login/',
            {
                email: data.email,
                password: data.password,
            })
            .then((response)=>{
                localStorage.setItem('Token',response.data.token)
                navigate("/home")
            })
            .catch((error)=>{
                console.error("Error during login",error)
            })
    }
    return(
       
        <div className={"Background"}>
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

                    <Box className={"itembox"}> 

                        <Link to='/register'> Does not have an account yet?</Link>

                    </Box>

                </Box>
            </form>
        </div>
    )
}



export default Login
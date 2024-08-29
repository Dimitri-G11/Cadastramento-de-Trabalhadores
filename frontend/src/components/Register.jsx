import '../App.css'
import {Box} from '@mui/material'
import TextFieldEmail from './forms/TextFieldEmail';
import TextFieldPassword from './forms/TextFieldPassword';
import SubmitB from './forms/SubmitB';
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import AxiosInstance from './axiosinstances';
import { useNavigate } from 'react-router-dom';

const Register=()=>{
    const navigate=useNavigate()
    const {handleSubmit,control}=useForm()

    const submission=(data)=>{
        AxiosInstance.post('register/',
            {
                email: data.email,
                password: data.password,
            })
            .then(()=>{
                navigate("/")
            })
    }

    return(

        <div className={"Background"}>
            <form onSubmit={handleSubmit(submission)}>
                <Box className={'Whiteboxc'}>

                    <Box className={"itemboxr"}>
                        <Box className={"titleform"}> Create an account</Box>
                    </Box>

                    <Box className={"itemboxr"}>
                            <TextFieldEmail 
                                label="Email"
                                name="email"
                                control={control}
                            />

                    </Box>

                    <Box className={"itemboxr"}> 
                        <TextFieldPassword
                        
                            label={"Password"}
                            name="password"
                            control={control}
                        />

                    </Box>

                    
                    <Box className={"itemboxr"}> 
                        <TextFieldPassword
                        
                            label={" Confirm Password"}
                            name="password2"
                            control={control}
                        />

                    </Box>

                    <Box className={"itemboxr"}> 
                        <SubmitB
                           label="Sign in"  
                           type={"submit"}
                        />
                    </Box>

                    <Box className={"itemboxr"}> 

                        <Link to='/'> I already have an account</Link>

                    </Box>

                </Box>
            </form>
        </div>
    )
}



export default Register
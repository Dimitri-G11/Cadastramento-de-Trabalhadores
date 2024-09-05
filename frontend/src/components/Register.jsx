import '../App.css'
import {Box} from '@mui/material'
import TextFieldEmail from './forms/TextFieldEmail';
import TextFieldPassword from './forms/TextFieldPassword';
import SubmitB from './forms/SubmitB';
import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import AxiosInstance from './axiosinstances';
import { useNavigate } from 'react-router-dom';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Register=()=>{
    const navigate=useNavigate()
    const schema=yup.object({
        email:yup.string().email("Email expected").required("Email field is required"),
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
                                name={"email"}
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
                        
                            label={"Confirm Password"}
                            name={"password2"}
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
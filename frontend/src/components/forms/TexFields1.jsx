import TextField from '@mui/material/TextField';
import '../../App.css'
import {Controller} from 'react-hook-form'


export default function TexFields1(props) {


  const {label,name,control,width}=props
  return (

      <Controller

        name={name}
        control={control}
        render={({
          field:{onChange,value},
          fieldState:{error},
          formState,

        })=>(<TextField id="outlined-basic" label={label} 
                        onChange={onChange}
                        value={value}
                        error={error}
                        helperText={error?.message}
                        variant="outlined" 
                        sx={{width:{width}}}
                        />)}
      
      />

             

  );
}
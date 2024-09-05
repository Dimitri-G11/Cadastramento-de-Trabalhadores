import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Controller} from 'react-hook-form'

export default function MultilineTextFields(props) {
  const {label,control,name,width}=props
  return (
    <Controller

        name={name}
        control={control}
        render={({
          field:{onChange,value},
          fieldState:{error},
          

        })=>( 
          <TextField
            id="standard-multiline-static"
            multiline
            onChange={onChange}
            value={value}
            rows={4}
            variant="standard"
            sx={{width:{width}}}
            label={label}
            error={error}
            helperText={error?.message}
          />
        )}

        />

     

);

}


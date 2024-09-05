import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Controller} from 'react-hook-form'
import { textFieldClasses } from '@mui/material';


export default function Date(props) {
  const {label, control, name, width}=props
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <Controller
          name={name}
          control={control}
          render={({
            field:{onChange,value},
            fieldState:{error},
          
          })=>( 
                  <DatePicker onChange={onChange}
                  value={value}
                  label={label}
                  sx={{width:{width}}}
                  slotProps={{
                    textField:{
                      error:error,
                      helperText:error?.message
                    }

                  }}
                   />
          )}
          
          />
      </LocalizationProvider>

         
    
    );
}

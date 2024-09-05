import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Controller} from 'react-hook-form'
import FormHelperText from '@mui/material/FormHelperText';

export default function SelectS(props) {
  const {label,name,control,width}=props
  


  return (
    <div>
     
            
          <Controller
              name={name}
              control={control}
              render={({
                field:{onChange,value},
                fieldState:{error},
                

              })=>( 

            <FormControl variant="standard" sx={{width:{width}}} >
                <InputLabel   id="demo-simple-select-filled-label">{label}</InputLabel>
                    <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    onChange={onChange}
                    error={!!error}
                    value={value}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Fired"}>Fired</MenuItem>
                    <MenuItem value={"Hired"}>Hired</MenuItem>
                    <MenuItem value={"Home-Office"}>Home-Office</MenuItem>
                  </Select>
                      <FormHelperText sx={{color:"#d32f2f"}}>{error?.message}</FormHelperText>
            </FormControl>
                  )}

                  />
    
    </div>
  );
}


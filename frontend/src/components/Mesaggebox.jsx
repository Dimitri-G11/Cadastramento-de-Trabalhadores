import { Box } from "@mui/material"

const Messagebox=(props)=>{
    const {text, color}=props
    return(
        <Box sx={{backgroundColor:color, color:"#FFFFF",width:"80%", height:"40px",position:"absolute",top:"20px",display:"flex",justifyContent:"center",alignItems:"center"}}> 
                  {text}
        </Box>
    )


}


export default Messagebox
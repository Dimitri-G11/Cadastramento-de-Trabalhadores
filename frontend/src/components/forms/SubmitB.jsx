import Button from '@mui/material/Button';


export default function SubmitB(props) {
  const {label,type} =props
  
  return (
      <Button type={type} variant="contained" className={"send"}>{label}</Button>
  );
}
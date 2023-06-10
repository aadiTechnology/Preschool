import React from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Container, TextField, Button,Card, Typography} from '@mui/material';
import { useState } from 'react';



function AddStaff() {
    const [alignment, setAlignment] = React.useState('Teacher');
    const [name,setName]=useState('');
    const [nameerror , setNameerror] =useState('')
    const [birthdate, setBirthdate] = useState('')
    const [birthdateerror ,setBirthdateerror] = useState('')
    const [qualification,setQualification]=useState('');
    const [address,setAddress]=useState('');
    const [phonenumber,setPhoneNumber]=useState('');
    const [email,setEmail]=useState(''); 
    const [joiningdate,setJoiningDate]=useState('');
    const [joiningdateerror , setJoiningDateerror] =useState('') 
    const [experience,setExperience]=useState(''); 
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  const regex =  /^[a-zA-Z]*$/; 
const clickSaveStaff = ()=>{
let isError = false;
if(name ===''){
    setNameerror("Please enter  teacher name")
    isError = true
  } else if(!regex.test(name)){
    setNameerror("Accept only alphabetic characters")
  }
  else{
    setNameerror('')
   
  }

  if(birthdate ===''){
    setBirthdateerror("This field is required")
    isError = true
  }else{
    setBirthdateerror('')
   
  }

  if(joiningdate ===''){
    setJoiningDateerror("This field is required")
    isError = true
  }else{
    setJoiningDateerror('')
   
  }
}




  return (
    <Container>
        
        <PageHeader heading={'Add Staff'}/>
        <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="Teacher">Teacher</ToggleButton>
      <ToggleButton value="Admin">Admin Staff</ToggleButton>
      
    </ToggleButtonGroup>
    <Card >
    <TextField value={name} onChange={(e)=>{setName(e.target.value)}} label={'Name'}/>
    {nameerror}
    <Typography sx={{mt:"3px" ,fontSize:"10px"}}>Birthdate</Typography>
    <TextField type={'date'} sx={{mt:"-5px"}}/>
    {birthdateerror}
    <TextField value={qualification} onChange={(e)=>{setQualification(e.target.value)}} 
    label={'Qualification'}/>
    <TextField value={address} onChange={(e)=>{setAddress(e.target.value)}} 
    label={'Address'}/>
    <TextField value={phonenumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} 
    label={'Phone Number'}/>
    <TextField value={email} onChange={(e)=>{setEmail(e.target.value)}} 
    label={'Email'}/>
    <Typography sx={{mt:"3px" ,fontSize:"10px"}}>JoiningDate</Typography>
    <TextField type={'date'} sx={{mt:"-5px"}}/>
    {joiningdateerror}
    <TextField value={experience} onChange={(e)=>{setExperience(e.target.value)}} 
    label={'Experience'}/>
    <Button  variant='contained' onClick={clickSaveStaff}>
                        Save
                    </Button>
</Card>
    </Container>
  )
}

export default AddStaff
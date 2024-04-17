import React from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Container, TextField, Button,Card, Typography} from '@mui/material';
import { useState } from 'react';
import { number } from 'prop-types';
import ErrorMessageForm from 'src/library/ErrorMessage/ErrorMessageForm';



function AddStaff() {
    const [alignment, setAlignment] = React.useState('Teacher');
    const [name,setName]=useState('');
    const [nameerror, setNameerror] =useState('')
    const [birthdate, setBirthdate] = useState('')
    const [birthdateerror, setBirthdateerror] = useState('')
    const [qualification, setQualification]=useState('');
    const [qualificationerror, setQualificationerror] = useState('')
    const [address, setAddress]=useState('');
    const [addresserror, setAddresserror] = useState('')
    const [phonenumber, setPhoneNumber]=useState('');
    const [phonenumbererror, setPhoneNumbererror] = useState('')
    const [email, setEmail]=useState('');
    const [emailerror, setEmailerror] = useState('') 
    const [joiningdate, setJoiningDate]=useState('');
    const [joiningdateerror, setJoiningDateerror] =useState('') 
    const [experience, setExperience]=useState(''); 
    const [experienceerror, setExperienceerror] = useState('')
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  const regex =  /^[a-zA-Z]*$/; 
  const emailRegExp = /^\S+@\S+\.\S+$/;
  var phoneno = /^\d{10}$/;

const clickSaveStaff = ()=>{
let isError = false;
if(name ===''){
    setNameerror("This field is required")
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

  if(qualification ===''){
    setQualificationerror("This field is required")
    isError = true
  }else{
    setQualificationerror('')
   
  }

  if(address ===''){
    setAddresserror("This field is required")
    isError = true
  }else{
    setAddresserror('')
   
  }

  if(phonenumber ===''){
    setPhoneNumbererror("This field is required")
  isError = true
} 
else if(!phoneno.test(phonenumber)){
  setPhoneNumbererror('Invalid phone number');                  
}

else{
  setPhoneNumbererror('')
 
}

  if(email ===''){
    setEmailerror("This field is required")
  isError = true
} 
else if(!emailRegExp.test(email)){
  setEmailerror('Invalid email address');                  
}

else{
  setEmailerror('')
 
}

  if(joiningdate ===''){
    setJoiningDateerror("This field is required")
    isError = true
  }else{
    setJoiningDateerror('')
   
  }

  if(experience ===''){
    setExperienceerror("This field is required")
    isError = true
  }else{
    setExperienceerror('')
   
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
    <ErrorMessageForm error={nameerror}/>
    
    <Typography sx={{mt:"3px" ,fontSize:"10px"}}>Birthdate</Typography>
    <TextField type={'date'} sx={{mt:"-5px"}}/>
    <ErrorMessageForm error={birthdateerror}/>
    
    <TextField value={qualification} onChange={(e)=>{setQualification(e.target.value)}} 
    label={'Qualification'}/>
    <ErrorMessageForm error={qualificationerror}/>
    
    <TextField value={address} onChange={(e)=>{setAddress(e.target.value)}} 
    label={'Address'}/>
    <ErrorMessageForm error={addresserror}/>
    
    <TextField value={phonenumber} onChange={(e)=>{setPhoneNumber(e.target.value)}} 
    label={'Phone Number'}/>
    <ErrorMessageForm error={phonenumbererror}/>
    
    <TextField value={email} onChange={(e)=>{setEmail(e.target.value)}} 
    label={'Email'}/>
    <ErrorMessageForm error={emailerror}/>
    
    <Typography sx={{mt:"3px" ,fontSize:"10px"}}>JoiningDate</Typography>
    <TextField type={'date'} sx={{mt:"-5px"}}/>
    <ErrorMessageForm error={joiningdateerror}/>
    
    <TextField value={experience} onChange={(e)=>{setExperience(e.target.value)}} 
    label={'Experience'}/>
    <ErrorMessageForm error={experienceerror}/>
    
    <Button  variant='contained' onClick={clickSaveStaff}>
                        Save
                    </Button>
</Card>
    </Container>
  )
}

export default AddStaff
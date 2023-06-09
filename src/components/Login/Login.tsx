
import React, { useState } from 'react'
import { Button, Container, TextField } from '@mui/material';
import PageHeader from 'src/library/heading/pageHeader';


function Login() {
    const [username,setUserName]=useState(''); 
    const [ usernameError, setUserNameError] = useState('');          
    const [password,setPassword]=useState('');
    const [passworderror , setPassworderror] =useState('')

    const emailRegExp = /^\S+@\S+\.\S+$/;                
    const onSubmit = () => {  
        let isError = false;
    if(password ===''){
        setPassworderror("feild required")
      isError = true
    }else{
        setPassworderror('')
     
    }

    if(username ===''){
        setUserNameError("feild required")
      isError = true
    } 
    else if(!emailRegExp.test(username)){
        setUserNameError('Invalid email address');                  
    }

    else{
        setUserNameError('')
     
    }
                                               
        console.log({username})
        console.log({name})
         }


  return (
    <Container>
    <PageHeader heading={'Login'}/>
        <TextField value={username} onChange={(e)=>{setUserName(e.target.value)}} 
         label={'username'}/>
        {usernameError}

        <TextField value={password} onChange={(e)=>{setPassword(e.target.value)}} 
        label={'password'}/>
        {passworderror}
  <Button onClick={onSubmit}>Login</Button>
    </Container>
  )
}

export default Login

import React, { useState } from 'react'
import { Button, Container, TextField } from '@mui/material';
import PageHeader from 'src/library/heading/pageHeader';
import { UserLogin, resetUserLogin } from 'src/requests/Admin/RequestUserLogin';
import { IUserLoginBody } from 'src/Interface/Admin/IUserLogin';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import ErrorMessage from 'src/library/ErrorMessage/ErrorMessage';
import ErrorMessageForm from 'src/library/ErrorMessage/ErrorMessageForm';

function Login() {
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [usernameError, setUserNameError] = useState('');
  const [password, setPassword] = useState('');
  const [passworderror, setPassworderror] = useState('')
  const navigate = useNavigate();

  const GetUserLogin: any = useSelector(
    (state: RootState) => state.UserLogin.UserLogin
  );

  console.log(GetUserLogin, "GetUserLogin")

  const UserLoginBody: IUserLoginBody =
  {
    EmailIdOrPhone: username,
    LoginPassword: password
  }

  useEffect(() => {
    console.log(GetUserLogin, "GetUserLogin")
    if (GetUserLogin !== null) {
      if (GetUserLogin.UserType === null)
        toast.error("UserId and or Password is incorrect")
      else {
        setSession()
        dispatch(resetUserLogin());
        if(sessionStorage.getItem("UserType")==="3")
        navigate('/extended-sidebar/Student/HomeWork');
        else if(sessionStorage.getItem("UserType")==="2")
        navigate('/extended-sidebar/Student/AddHomeWork');
        else
        navigate('/extended-sidebar/Student/AddPhoto');
      }
    }

  }, [GetUserLogin])
  const setSession=()=>{
    sessionStorage.setItem("UserType",GetUserLogin.UserType)
  }
  const emailRegExp = /^\S+@\S+\.\S+$/;
  const onSubmit = () => {
    let isError = false;
    if (password === '') {
      setPassworderror("feild required")
      isError = true
    } else {
      setPassworderror('')
      dispatch(UserLogin(UserLoginBody));
    }

    if (username === '') {
      setUserNameError("feild required")
      isError = true
    }
    else if (!emailRegExp.test(username)) {
      setUserNameError('Invalid email address');
    }

    else {
      setUserNameError('')

    }

    console.log({ username })
    
  }


  return (
    <Container>
      <PageHeader heading={'Login'} />
      <TextField value={username} onChange={(e) => { setUserName(e.target.value) }}
        label={'username'} />
   
      <ErrorMessageForm error={usernameError}/>

      <TextField value={password} onChange={(e) => { setPassword(e.target.value) }}
        label={'password'} />
        <ErrorMessageForm error={passworderror}/>
      
      <Button onClick={onSubmit}>Login</Button>
    </Container>
  )
}

export default Login
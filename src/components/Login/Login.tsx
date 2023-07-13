
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
    if(localStorage.getItem("auth")!==null){
        setSession(JSON.parse(localStorage.getItem("auth")));
        NavigateByRole();
    }
    else
    if (GetUserLogin !== null) {
      if (GetUserLogin.UserRoleId === 0)
        toast.error("UserId and or Password is incorrect")
      else {
        localStorage.setItem("auth", JSON.stringify(GetUserLogin));
        setSession(GetUserLogin);
        // setSession()
        dispatch(resetUserLogin());
        NavigateByRole();
      }
    }


  }, [GetUserLogin])

  const NavigateByRole = () => {
    if (sessionStorage.getItem("UserRoleId") === "3")
      navigate('/extended-sidebar/Student/HomeWork');
    else if (sessionStorage.getItem("UserRoleId") === "2")
      navigate('/extended-sidebar/Student/AddHomeWork');
    else
      navigate('/extended-sidebar/Student/AddPhoto');
  }
  const setSession = (GetUserLogin) => {
    sessionStorage.setItem("UserId", GetUserLogin.UserId)
    sessionStorage.setItem("UserRoleId", GetUserLogin.UserRoleId)
    sessionStorage.setItem("ClassId", GetUserLogin.ClassId)
    sessionStorage.setItem("UserName", GetUserLogin.UserName)
    sessionStorage.setItem("ClassDivisionName", GetUserLogin.ClassDivisionName)
    sessionStorage.setItem("ClassDivisionId", GetUserLogin.ClassDivisionId)
    sessionStorage.setItem("EmailId", GetUserLogin.EmailId)
    sessionStorage.setItem("BirthDate", GetUserLogin.BirthDate)
    sessionStorage.setItem("PhoneNo", GetUserLogin.PhoneNo)
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

  }


  return (
    <Container>
      <PageHeader heading={'Login'} />
      <TextField value={username} onChange={(e) => { setUserName(e.target.value) }}
        label={'username'} />

      <ErrorMessageForm error={usernameError} />

      <TextField type='password' value={password} onChange={(e) => { setPassword(e.target.value) }}
        label={'password'} />
      <ErrorMessageForm error={passworderror} />

      <Button onClick={onSubmit}>Login</Button>
    </Container>
  )
}

export default Login
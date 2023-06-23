import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import { IGetAddStudentDetailsBody ,IGetAdmissionDetailsBody,IAddUserLoginInfoBody } from "src/Interface/Student/IAddStudentDetails"
import { GetAddStudentDetails, resetAddStudent , resetAddUserLogin ,getAdmissionDetails,AddUserLoginInfo } from "src/requests/Student/AddStudentDetails/RequestAddStudentDetails"
import { Button, TextField, Container, Card, Checkbox, Typography, FormControlLabel } from '@mui/material';
import { toast } from 'react-toastify';
import { IsEmailValid, IsMobileNoValid } from "src/components/Common/util"
import ErrorMessageForm from 'src/library/ErrorMessage/ErrorMessageForm';
import { number } from 'prop-types';
import List3Card from 'src/library/List/List3Card';

function AddStudentDetails() {
  const dispatch = useDispatch();
  const GetAddStudent: any = useSelector(
    (state: RootState) => state.AddStudentDetails.AddStudentDetails
  );

  const GetAdmissionDetails: any = useSelector(
    (state: RootState) => state.AddStudentDetails.AdmissionDetails
  );
  const AddUserLogin: any = useSelector(
    (state: RootState) => state.AddStudentDetails.AddUserLoginInfo
  );
  console.log("AddUserLoginInfo",AddUserLoginInfo)



  const [studentName, setStudentName] = useState('');
  const [studentNameerror, setStudentNameerror] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthDateerror, setBirthDateerror] = useState('');
  const [age, setAge] = useState('');
  const [ageerror, setAgeerror] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherNameerror, setFatherNameerror] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [phoneNoerror, setPhoneNoerror] = useState('');
  const [motherName, setMotherName] = useState('');
  const [motherNameerror, setMotherNameerror] = useState('');
  const [phoneNo2, setPhoneNo2] = useState('');
  const [phoneNoerror2, setPhoneNoerror2] = useState('');
  const [societyName, setSocietyName] = useState('');
  const [societyNameerror, setSocietyNameerror] = useState('');
  const [studentAddress, setStudentAddress] = useState('');
  const [studentAddresserror, setStudentAddresserror] = useState('');
  const [emailid, setEmailid] = useState('');
  const [emailiderror, setEmailiderror] = useState('');
  const [checked, setChecked] = useState(false);
  const GetAdmissionDetailsBody: IGetAdmissionDetailsBody =
  {"Id": 1,}

  const AddUserLoginInfoBody:IAddUserLoginInfoBody={
    "emailid":emailid,
    "PhoneNo":phoneNo,
    "BirthDate":birthDate,
    "UserId":1
  }
  useEffect(() => {
    dispatch(getAdmissionDetails(GetAdmissionDetailsBody));
    
   },[])

  const GetAddStudentDetailsBody: IGetAddStudentDetailsBody =
  {

    "ClassId": 1,
    "StudentName": studentName,
    "BirthDate": birthDate,
    "Age": parseInt(age),
    "FatherName": fatherName,
    "PhoneNo": phoneNo,
    "MotherName": motherName,
    "PhoneNo2": phoneNo2,
    "SocietyName": societyName,
    "StudentAddress": studentAddress,
    "emailid": emailid,
    "SMS": "true",
    "UserId": 1
  }





  const display = studentName !== '' && birthDate !== ""
  useEffect(() => {
    if (GetAddStudent !== '') {
      toast.success(GetAddStudent, { toastId: 'success1' })
      dispatch(resetAddStudent());
      }
  }, [GetAddStudent])


  useEffect(() => {
    if (AddUserLogin !== '') {
      toast.success(AddUserLogin, { toastId: 'success2' })
      dispatch(resetAddUserLogin());
    }
  }, [AddUserLogin])

   const onSubmit = () => {
    let isError = false
    if (studentName === '') {
      setStudentNameerror('This field is required')
      isError=true
    } else {
      setStudentNameerror('')
    }
    if (birthDate === '') {
      setBirthDateerror('This field is required')
      isError=true

    } else {
      setBirthDateerror('')
    }
    if (age === '0') {
      setAgeerror('This field is required')
      isError=true
    } else {
      setAgeerror('')
    }
    if (fatherName === '') {
      setFatherNameerror('This field is required')
      isError=true
    } else {
      setFatherNameerror('')
    }
    if (motherName === '') {
      setMotherNameerror('This field is required')
      isError=true
    } else {
      setMotherNameerror('')
    }
     if (societyName === '') {
      setSocietyNameerror('This field is required')
      isError=true
    } else {
      setSocietyNameerror('')
    }

    if (studentAddress === '') {
      setStudentAddresserror('This field is required')
      isError=true
    } else {
      setStudentAddresserror('')
      
    }
    if(!isError){
      dispatch(GetAddStudentDetails(GetAddStudentDetailsBody));
      
    if(checked){
      dispatch(AddUserLoginInfo(AddUserLoginInfoBody));
      }
    }
    if(!isError){
      ResetForm()
    }
    
  }

  const ResetForm = () => {
    setStudentName('')
    setBirthDate('')
    setAge('')
    setFatherName('')
    setPhoneNo('')
    setMotherName('')
    setPhoneNo2('')
    setSocietyName('')
    setStudentAddress('')
    setEmailid('')
    setChecked(false)
   }

   const handleChange = (e) => {
    const input = e.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || (regex.test(input) && input.length <= 2)) {
      setAge(input);
    }
  };

  const ChangephoneNo = (e) => {
    const input = e.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || (regex.test(input) && input.length <= 10)) {
      setPhoneNo(input);
    }
  };

  const ChangephoneNo2 = (e) => {
    const input = e.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || (regex.test(input) && input.length <= 10)) {
      setPhoneNo2(input);
    }
  };

 
  return (
    <Container>
      <PageHeader heading={'AddStudent Details'} />
      <Card>
        <TextField value={studentName} onChange={(e) => { setStudentName(e.target.value) }} label={'studentName'} />

        <ErrorMessageForm error={studentNameerror} />
        <TextField value={birthDate} type='date' onChange={(e) => { setBirthDate(e.target.value) }} label={''} />

        <ErrorMessageForm error={birthDateerror} />
        <TextField value={age}  type="text"
          onChange={(e) => handleChange(e)}
          label={'Age'} />
       <ErrorMessageForm error={ageerror} />
        <TextField value={fatherName} onChange={(e) => { setFatherName(e.target.value) }} label={'FatherName'} />

        <ErrorMessageForm error={fatherNameerror} />
        <TextField value={phoneNo}
          type="text"
          onChange={(e) => ChangephoneNo(e)}
          onBlur={(e) => {setPhoneNoerror(IsMobileNoValid(e.target.value)) }}
          error={phoneNoerror !== ''}
          helperText={phoneNoerror}
          label={'PhoneNo'} />
        <TextField value={motherName} onChange={(e) => { setMotherName(e.target.value) }} label={'MotherName'} />
        <ErrorMessageForm error={motherNameerror} />
        <TextField value={phoneNo2} onChange={(e) => ChangephoneNo2(e)} onBlur={(e) => { setPhoneNoerror2(IsMobileNoValid(e.target.value)) }}
          error={phoneNoerror2 !== ''}
          helperText={phoneNoerror2}
          label={'PhoneNo2'} />
        <TextField value={societyName} onChange={(e) => { setSocietyName(e.target.value) }} label={'SocietyName'} />
        <ErrorMessageForm error={societyNameerror} />
        <TextField value={studentAddress} onChange={(e) => { setStudentAddress(e.target.value) }} label={'StudentAddress'} />
        <ErrorMessageForm error={studentAddresserror} />
        <TextField value={emailid} 
         onChange={(e) => { setEmailid(e.target.value) }}
         onBlur={(e) => { setEmailiderror(IsEmailValid(e.target.value)) }}
        
        label={'Emailid'} />
        <ErrorMessageForm error={emailiderror} />
       <FormControlLabel  control={<Checkbox checked={checked}
          onChange={()=>setChecked(!checked)}  />} label="ischecked" />
        <Button onClick={onSubmit}>Submit</Button>
       </Card>
        <br></br>
     


    </Container>
  )
}

export default AddStudentDetails
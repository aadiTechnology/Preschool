import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import {IGetAddStudentDetailsBody} from "src/Interface/Student/IAddStudentDetails"
import {GetAddStudentDetails ,resetAddStudent} from "src/requests/Student/AddStudentDetails/RequestAddStudentDetails"
import { Button, TextField ,Container} from '@mui/material';
import { toast } from 'react-toastify';
function AddStudentDetails() {
    const dispatch = useDispatch();
    const GetAddStudent: any = useSelector(
        (state: RootState) => state.AddStudentDetails.AddStudentDetails
      );
      console.log(GetAddStudent ,"GetAddStudent")

     const[studentName ,setStudentName]= useState('');
     const[studentNameerror ,setStudentNameerror]= useState('');
     const[birthDate ,setBirthDate]= useState('');
     const[birthDateerror ,setBirthDateerror]= useState('');
     const[age ,setAge]= useState('');
     const[ageerror ,setAgeerror]= useState('');
     const[fatherName ,setFatherName]= useState('');
     const[fatherNameerror ,setFatherNameerror]= useState('');
     const[phoneNo ,setPhoneNo]= useState('');
     const[phoneNoerror ,setPhoneNoerror]= useState('');
     const[motherName ,setMotherName]= useState('');
     const[phoneNo2 ,setPhoneNo2]= useState('');
     const[societyName ,setSocietyName]= useState('');
     const[studentAddress ,setStudentAddress]= useState('');
     const[emailid ,setEmailid]= useState('');
    

      const GetAddStudentDetailsBody: IGetAddStudentDetailsBody =
      {
        
    "ClassId": 1,
    "StudentName":studentName,
    "BirthDate":birthDate,
    "Age":3,
    "FatherName":fatherName,
    "PhoneNo":phoneNo,
    "MotherName":motherName,
    "PhoneNo2":phoneNo2,
    "SocietyName":societyName,
    "StudentAddress":studentAddress,
    "emailid":emailid,
    "SMS":"true",
    "UserId":1
      }

    useEffect(() => {
    if (GetAddStudent !== '' && GetAddStudent !== null) {
     toast.success("StudentDetails added successfully", { toastId: 'success1' })
     dispatch(resetAddStudent());
      }
      }, [GetAddStudent])

     const onSubmit=()=>{
      if(studentName===''){
        setStudentNameerror('This field is required')
      }else{
        setStudentNameerror('')
      }
      if(birthDate===''){
        setBirthDateerror('This field is required')
      }else{
        setBirthDateerror('')
      }
      if(age===''){
        setAgeerror('This field is required')
      }else{
        setAgeerror('')
      }
      if(fatherName===''){
        setFatherNameerror('This field is required')
      }else{
        setFatherNameerror('')
      }
      if(fatherName===''){
        setPhoneNoerror('This field is required')
      }else{
        setPhoneNoerror('')
      }
        dispatch(GetAddStudentDetails(GetAddStudentDetailsBody));
      }

  return (
    <Container>
        <PageHeader heading={'AddStudent Details'}/>
        <TextField value={studentName} onChange={(e)=>{setStudentName(e.target.value)}} label={'studentName'}/>
        {studentNameerror}
        <TextField value={birthDate} type='date' onChange={(e)=>{setBirthDate(e.target.value)}} label={''}/>
        {birthDateerror}
        <TextField value={age} onChange={(e)=>{setAge(e.target.value)}} label={'Age'}/>
        {ageerror}
        <TextField value={fatherName} onChange={(e)=>{setFatherName(e.target.value)}} label={'FatherName'}/>
        {fatherNameerror}
        <TextField value={phoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}} label={'PhoneNo'}/>
        {phoneNoerror}
        <TextField value={motherName} onChange={(e)=>{setMotherName(e.target.value)}} label={'MotherName'}/>
        <TextField value={phoneNo2} onChange={(e)=>{setPhoneNo2(e.target.value)}} label={'PhoneNo2'}/>
        <TextField value={societyName} onChange={(e)=>{setSocietyName(e.target.value)}} label={'SocietyName'}/>
        <TextField value={studentAddress} onChange={(e)=>{setStudentAddress(e.target.value)}} label={'StudentAddress'}/>
        <TextField value={emailid} onChange={(e)=>{setEmailid(e.target.value)}} label={'Emailid'}/>
        <Button onClick={onSubmit}>Submit</Button>
    </Container>
  )
}

export default AddStudentDetails
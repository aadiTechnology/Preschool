import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { IAdmissionConversionBody, IAdmissionConversionResult } from 'src/Interface/Admin/IAdmissionConversion'
import { AdmissionConversion } from 'src/requests/Admin/RequestAdmissionConversion'
import { Card, Container, TextField, Grid } from '@mui/material';
import ErrorMessageForm from 'src/library/ErrorMessage/ErrorMessageForm';

function AdmisssionConversion() {

  const dispatch = useDispatch();


  const AddAdmissionConversion: any = useSelector(
    (state: RootState) => state.AddAdmissionConversion.AdmissionConversion
  );
  const loading = useSelector(
    (state: RootState) => state.AddPhoto.Loading
  );

  const [class1, setClass1] = useState('');
  const [studentName, setStudentName] = useState('');
  const [birtDate, setBirthDate] = useState('')
  const [fathersName, setFathersName] = useState('');
  const[phoneNo,setPhoneNo]=useState('');
  const [mothersName, setMothersName] = useState('');
  const[phoneNo1,setPhoneNo1]=useState('');
  const [address, setAddress] = useState('');
  const [emailid, setEmailid] = useState('');
  




  console.log(AddAdmissionConversion, 'AddAdmissionConversion')

  const AddAdmissionConversionBody: IAdmissionConversionBody = {

    ClassId: 2,
    StudentName: "rupesh",
    FatherName: "ramesh",
    PhoneNo: "1234",
    MotherName: "rani",
    PhoneNo1: "12345",
    emailid: "e@gmauil.com",
    BirthDate: "6/20/2023",
    Address: "pune",
    Sms: true,
    Attachment: "yes",
    UserId: 3
  }

  useEffect(() => {
    dispatch(AdmissionConversion(AddAdmissionConversionBody));

  }, [])



  return (
    <Container>
      <PageHeader heading={'Admission Conversion'} />
      <Card>
        <TextField value={class1} onChange={(e) => { setClass1(e.target.value) }} label={'Class'} />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField value={studentName} onChange={(e) => { setStudentName(e.target.value) }} label={'Student Name'} />
          </Grid>
          <Grid item xs={6}>
            
            <TextField type={'date'} sx={{mt:"-5px"}} label={'BirthDate'}/>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <TextField value={fathersName} onChange={(e) => { setFathersName(e.target.value) }} label={'Father Name'} />
          </Grid>
          <Grid item xs={6}>
            <TextField value={phoneNo} onChange={(e)=>{setPhoneNo(e.target.value)}} label={'Phone No'}/>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <TextField value={mothersName} onChange={(e) => { setMothersName(e.target.value) }} label={'Mother Name'} />
          </Grid>
          <Grid item xs={6}>
            <TextField value={phoneNo1} onChange={(e)=>{setPhoneNo1(e.target.value)}} label={'Phone No1'}/>
          </Grid>
        </Grid>

        <TextField value={address} onChange={(e)=>{setAddress(e.target.value)}} label={'Address'}/>
        <TextField value={emailid} onChange={(e)=>{setEmailid(e.target.value)}} label={'Email Id'}/>

      </Card>

    </Container>
  )
}

export default AdmisssionConversion
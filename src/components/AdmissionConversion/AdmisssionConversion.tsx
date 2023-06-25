import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { IAdmissionConversionBody } from 'src/Interface/Admin/IAdmissionConversion'
import { AdmissionConversion ,resetgetAddAdmissionConversion } from 'src/requests/Admin/RequestAdmissionConversion'
import { Card, Container, TextField, Grid, Button, FormControlLabel, Checkbox } from '@mui/material';
import ErrorMessageForm from 'src/library/ErrorMessage/ErrorMessageForm';
import { toast } from 'react-toastify';
import List3Card from 'src/library/List/List3Card';
import TabulerList from 'src/library/List/TabulerList';
import AdmissionConversionList from './AdmissionConversionList';

function AdmisssionConversion() {
  const dispatch = useDispatch();
  const AddAdmissionConversion: any = useSelector(
    (state: RootState) => state.AddAdmissionConversion.AdmissionConversion
  );
   
  const loading = useSelector(
    (state: RootState) => state.AddPhoto.Loading
  );

  const [class1, setClass1] = useState('');
  const [class1error, setClass1Error] = useState('');
  const [studentName, setStudentName] = useState('');
  const [birtDate, setBirthDate] = useState('')
  const [fathersName, setFathersName] = useState('');
  const[phoneNo,setPhoneNo]=useState('');
  const [mothersName, setMothersName] = useState('');
  const[phoneNo1,setPhoneNo1]=useState('');
  const [address, setAddress] = useState('');
  const [emailid, setEmailid] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [checked, setChecked] = useState(false);
  
  const AddAdmissionConversionBody: IAdmissionConversionBody = {
    Class: parseInt(class1),
    StudentName: studentName,
    FatherName: fathersName,
    PhoneNo: phoneNo,
    MotherName: mothersName,
    PhoneNo1: phoneNo1,
    emailid: emailid,
    BirthDate: birtDate,
    Address: address,
    Sms: checked,
    Attachment: "yes",
    UserId: 3
  }

  useEffect(() => {
    if (AddAdmissionConversion !== ''  ) {
  toast.success(AddAdmissionConversion ,{ toastId: 'success1' } )}
  dispatch(resetgetAddAdmissionConversion());
  }, [AddAdmissionConversion])

const onSubmit=()=>{
  setChecked(false)
  dispatch(AdmissionConversion(AddAdmissionConversionBody));
}

const clickEdit=()=>{

}

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
            
            <TextField type={'date'} value={birtDate} onChange={(e) => { setBirthDate(e.target.value) }}  label={'BirthDate'}/>
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
        
        <FormControlLabel control={<Checkbox checked={checked}
          onChange={() => setChecked(!checked)} />} label="ischecked" /><br></br>
          <input type="file"/>
          <TextField  value={password} onChange={(e)=>{setPassword(e.target.value)}} label={'Password'}/>
          <TextField value={confirmpassword} onChange={(e)=>{setConfirmpassword(e.target.value)}} label={'Confirmpassword'}/>
        <Button onClick={onSubmit}>Submit</Button>
      
      </Card>
      <br></br>
   
    <AdmissionConversionList clickEdit={clickEdit}/>
    </Container>
  )
}

export default AdmisssionConversion
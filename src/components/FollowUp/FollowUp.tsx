import { Card, Container, TextField, Grid, Button, Typography, InputAdornment } from '@mui/material'
import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import CheckUnCheckList from 'src/library/Card/CheckUnCheckList';
import { TextareaAutosize } from '@mui/material';
import { monthArray } from 'src/components/Common/util'
import DropDown from 'src/library/DropDown/DropDown';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import{IAddStudentFollowUpBody} from 'src/Interface/Admin/IAddStudentFollowUp'
import {AddStudentFollowUp} from 'src/requests/Admin/RequestAddStudentFollowUp'
import { toast } from 'react-toastify';
import { StudentDetailsForFollowUp } from 'src/requests/Student/AddStudentDetails/RequestAddStudentDetails';
import { IStudentDetailFollowUpBody } from 'src/Interface/Student/IAddStudentDetails';
import { useParams } from 'react-router-dom';
import FollowupStudentList from './FollowupStudentList';
import ErrorMessage from 'src/library/ErrorMessage/ErrorMessage';
import ErrorMessageForm from 'src/library/ErrorMessage/ErrorMessageForm';



const FollowUp = () => {
  const [name, setName] = useState("");
  const [fathername, setFatherName] = useState("");
  const [phonenumber1, setPhoneNumber1] = useState("");
  const [mothername, setMotherName] = useState("");
  const [phonenumber2, setPhoneNumber2] = useState("");
  const [email, setEmail] = useState("");
  const [itemList, setItemList] = useState([{ Id: 1, Name: "yes", Value: 1, IsActive: false }, { Id: 2, Name: "No", Value: 2, IsActive: false }, { Id: 3, Name: "Did Not Connect", Value: 3, IsActive: false }]);
  const [reminderitemlist, setReminderItemList] = useState([{ Id: 1, Name: "2 days", Value: 1, IsActive: false }, { Id: 2, Name: "7 days", Value: 2, IsActive: false }, { Id: 3, Name: "10 days", IsActive: false }, { Id: 4, Name: "1 month", Value: 4, IsActive: false }]);
  const [itemListerror, setItemListerror]= useState('')
  const [reminderitemlisterror, setReminderItemListerror] = useState('')
  const [comment, setComment] = useState('');
  const [commenterror, setCommenterror] = useState('');
  const [month, setMonth] = useState("");
  const [searchName, setSearchName] = useState("");
  
  const dispatch = useDispatch();
  const { Id } = useParams();

  const AddStudentFollow: any = useSelector(
    (state: RootState) => state.AddStudentFollowUp.StudentFollowUp);
    const GetStudentFollowUpList: any = useSelector(
      (state: RootState) => state.AddStudentDetails.StudentDetailsFollowUp
  );
 
    const AddStudentFollowUpBody: IAddStudentFollowUpBody = {
     
      Id:4,
      CallStatus:itemList.filter((item) => {return (item.IsActive) }).map((obj) => { return obj.Value }).toString(),
      Reminder:reminderitemlist.filter((item) => {return (item.IsActive) }).map((obj) => { return obj.Value }).toString(),
      Comment:comment
    }
    const GetStudentFollowUpBody: IStudentDetailFollowUpBody =
    { "Id": parseInt(Id) }
   
  
    useEffect(() => {
      if(AddStudentFollow!==""){
        toast.success(AddStudentFollow ,{ toastId: 'success1' })}
      },
    [AddStudentFollow])

    useEffect(() => {
      dispatch(StudentDetailsForFollowUp(GetStudentFollowUpBody));
    },[])
    useEffect(() => {
      setName(GetStudentFollowUpList.Text1)
      setFatherName(GetStudentFollowUpList.Text2)
      setPhoneNumber1(GetStudentFollowUpList.Text3)
      setMotherName(GetStudentFollowUpList.Text6)
      setPhoneNumber2(GetStudentFollowUpList.Text7)
      setEmail(GetStudentFollowUpList.Text5)
      },
    [GetStudentFollowUpList])

  const clickItem = (value) => {
    setItemList(value)
  }
  const clickReminderItem = (value) => {
    setReminderItemList(value)
  }
  const clickMonthItem = (value) => {
    setMonth(value)
  }
  const clickSearch = (value) => {
    setSearchName(value)
  }

  const IsSelected = () => {
    let returnVal = false;
    itemList.map((item)=>{
      if(item.IsActive){
        returnVal = true
      }
    })
    return returnVal;
  }

  const IsSelectedreminder = () => {
    let returnVal = false;
    reminderitemlist.map((item)=>{
      if(item.IsActive){
        returnVal = true
      }
    })
    return returnVal;
  }

  const onSubmit=()=>{
    let isError = false
    if(comment===""){
      setCommenterror('filled required')
      isError = true
    }else{
      setCommenterror('')
    }

    if(!IsSelected()){
      setItemListerror('Fill the Mandatory Field')
      isError = true
    }
    else {
      setItemListerror('')
    }

    if(!IsSelectedreminder()){
      setReminderItemListerror('Fill the Mandatory Field')
      isError = true
    }
    else {
      setReminderItemListerror('')
    }
    if(!isError){
      dispatch(AddStudentFollowUp(AddStudentFollowUpBody));
    }
    
  }

  const clickEdit =()=>{
    
  }
  return (
    <div>
      <Container>
        <PageHeader heading={'FollowUp'} />
        <Card>
          <TextField value={name} onChange={(e) => {setName(e.target.value) }} label={'Student Name'} />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField value={fathername} onChange={(e) => {setFatherName(e.target.value) }} label={'Father Name'} />
            </Grid>
            <Grid item xs={6}>
              <TextField value={phonenumber1} onChange={(e) => {setPhoneNumber1(e.target.value) }} label={'Phone Number'} />
            </Grid>

            <Grid item xs={6}>
              <TextField value={mothername} onChange={(e) => { setMotherName(e.target.value) }} label={'Mother Name'} />
            </Grid>
            <Grid item xs={6}>
              <TextField value={phonenumber2} onChange={(e) => { setPhoneNumber2(e.target.value) }} label={'Phone Number'} />
            </Grid>
          </Grid>
          <TextField value={email} onChange={(e) => { setEmail(e.target.value) }} label={'Email'} />
          <br />
          <br />
          <Typography>Status of Call</Typography>
          <CheckUnCheckList ItemList={itemList} clickItem={clickItem} />
          <ErrorMessageForm error={itemListerror}/>
          <br></br>
          <Typography>Reminder</Typography>
          <CheckUnCheckList ItemList={reminderitemlist} clickItem={clickReminderItem} />
          <ErrorMessageForm error={reminderitemlisterror}/>
          <br></br>
          <TextareaAutosize value={comment} onChange={(e)=>setComment(e.target.value)} name="Outlined" placeholder="Comment" minRows={4} style={{ width: "100%" }} />
          <ErrorMessageForm error={commenterror}/>
          <br></br>
          <Button onClick={onSubmit}>Save</Button>

        </Card>

        <Grid container spacing={2}>
            <Grid item xs={6} sx={{ mt: 2.7 }}>
              <DropDown itemList={monthArray} ClickItem={clickMonthItem} DefaultValue={month} Label={'Select Month'} />
            </Grid>
            <Grid item xs={6}>
              <TextField value={searchName} onChange={(e) => {setSearchName(e.target.value) }} label={'Search by Student Name'}
                InputProps={{
                  endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
                }}
              />
            </Grid>
          </Grid >
          <br></br>
        <FollowupStudentList clickEdit={clickEdit}/>
      </Container>
    </div>
  )
}

export default FollowUp
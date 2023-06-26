import { Card, Container, TextField, Grid, Button, Typography, InputAdornment } from '@mui/material'
import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import SelectedCard from 'src/library/Card/SelectedCard';
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



const FollowUp = () => {
  const ItemList1 = [{ Id: 1, Name: "yes", value: 1, IsActive: "false" }, { Id: 2, Name: "No", value: 2, IsActive: "false" }, { Id: 3, Name: "Did Not Connect", value: 3, IsActive: "false" }]
  const [name, setName] = useState("");
  const [fathername, setFatherName] = useState("");
  const [phonenumber1, setPhoneNumber1] = useState("");
  const [mothername, setMotherName] = useState("");
  const [phonenumber2, setPhoneNumber2] = useState("");
  const [email, setEmail] = useState("");
  const [itemList, setItemList] = useState([{ Id: 1, Name: "yes", Value: 1, IsActive: false }, { Id: 2, Name: "No", Value: 2, IsActive: false }, { Id: 3, Name: "Did Not Connect", Value: 3, IsActive: false }]);
  const [reminderitemlist, setReminderItemList] = useState([{ Id: 1, Name: "2 days", Value: 1, IsActive: false }, { Id: 2, Name: "7 days", Value: 2, IsActive: false }, { Id: 3, Name: "10 days", IsActive: false }, { Id: 4, Name: "1 month", Value: 4, IsActive: false }]);
  const [comment, setComment] = useState("");
  const [month, setMonth] = useState("");
  const [searchName, setSearchName] = useState("");

  const dispatch = useDispatch();

  const AddStudentFollow: any = useSelector(
    (state: RootState) => state.AddStudentFollowUp.StudentFollowUp);


    const AddStudentFollowUpBody: IAddStudentFollowUpBody = {
      Id:4,
      CallStatus:itemList.filter((item) => {return (item.IsActive) }).map((obj) => { return obj.Value }).toString(),
      Reminder:reminderitemlist.filter((item) => {return (item.IsActive) }).map((obj) => { return obj.Value }).toString(),
      Comment:comment
    }
    console.log(AddStudentFollow,"StudentFollowUp")


    useEffect(() => {
      if(AddStudentFollow!==""){
        toast.success(AddStudentFollow ,{ toastId: 'success1' })
      }
      },
    [AddStudentFollow])

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

  const onSubmit=()=>{
    dispatch(AddStudentFollowUp(AddStudentFollowUpBody));
  }
  return (
    <div>
      <Container>
        <PageHeader heading={'FollowUp'} />
        <Card>
          <TextField value={name} onChange={(e) => { setName(e.target.value) }} label={'Student Name'} />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField value={fathername} onChange={(e) => { setFatherName(e.target.value) }} label={'Father Name'} />
            </Grid>
            <Grid item xs={6}>
              <TextField value={phonenumber1} onChange={(e) => { setPhoneNumber1(e.target.value) }} label={'Phone Number'} />
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
          <br></br>
          <Typography>Reminder</Typography>
          <CheckUnCheckList ItemList={reminderitemlist} clickItem={clickReminderItem} />
          <TextareaAutosize name="Outlined" placeholder="Comment" minRows={4} style={{ width: "100%" }} />
          <br></br>
          <Grid container spacing={2}>
            <Grid item xs={6} sx={{ mt: 2.7 }}>
              <DropDown itemList={monthArray} ClickItem={clickMonthItem} DefaultValue={month} Label={'Select Month'} />
            </Grid>
            <Grid item xs={6}>
              <TextField value={searchName} onChange={(e) => { setSearchName(e.target.value) }} label={'Search by Student Name'}
                InputProps={{
                  endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
                }}
              />
            </Grid>
          </Grid >

          <br></br>

          <Button onClick={onSubmit}>Save</Button>

        </Card>
      </Container>
    </div>
  )
}

export default FollowUp
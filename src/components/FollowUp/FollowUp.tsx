import { Card, Container, TextField ,Grid, Button, Typography} from '@mui/material'
import React, { useState ,useEffect} from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import SelectedCard from 'src/library/Card/SelectedCard';
import CheckUnCheckList from 'src/library/Card/CheckUnCheckList';
import { TextareaAutosize } from '@mui/material';



const FollowUp = () => {
const ItemList1 =[{Id:1  ,Name:"yes" , value:1 , IsActive:"false"} ,{Id:2  ,Name:"No" , value:2 , IsActive:"false"}, {Id:3  ,Name:"Did Not Connect" , value:3 , IsActive:"false"}]
const[name, setName] = useState("");
const[fathername, setFatherName] = useState("");  
const[phonenumber1, setPhoneNumber1] = useState("");
const[mothername, setMotherName] = useState("");
const[phonenumber2, setPhoneNumber2] = useState("");
const[email, setEmail] = useState("");
 const[itemList , setItemList] =useState([{Id:1  ,Name:"yes" , Value:1 , IsActive:false} ,{Id:2  ,Name:"No" , Value:2 , IsActive:false}, {Id:3  ,Name:"Did Not Connect" , Value:3 , IsActive:false}]);
 const[reminderitemlist,setReminderItemList]=useState([{Id:1,Name:"2 days",Value:1,IsActive:false},{Id:2,Name:"7 days",Value:2,IsActive:false},{Id:3,Name:"10 days",IsActive:false},{Id:4,Name:"1 month",Value:4,IsActive:false}]);
 const[comment,setComment]=useState("");

const clickItem=(value)=>{
    setItemList(value)
}
const clickReminderItem=(value)=>{
  setReminderItemList(value)
}
  return (
    <div>
        <Container>
        <PageHeader heading={'FollowUp'}/>
        <Card>
        <TextField value={name} onChange={(e)=>{setName(e.target.value)}} label={'Student Name'}/>
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <TextField value={fathername} onChange={(e)=>{setFatherName(e.target.value)}} label={'Father Name'}/>
            </Grid>
            <Grid item xs={6}>
           <TextField value={phonenumber1} onChange={(e)=>{setPhoneNumber1(e.target.value)}} label={'Phone Number'}/>
            </Grid>

            <Grid item xs={6}>
            <TextField value={mothername} onChange={(e)=>{setMotherName(e.target.value)}} label={'Mother Name'}/>
            </Grid>
            <Grid item xs={6}>
           <TextField value={phonenumber2} onChange={(e)=>{setPhoneNumber2(e.target.value)}} label={'Phone Number'}/>
            </Grid>
        </Grid>
        <TextField value={email} onChange={(e)=>{setEmail(e.target.value)}}  label={'Email'}/>
        <br/>
        <br/>
        <Typography>Status of Call</Typography>
       <CheckUnCheckList ItemList={itemList} clickItem={clickItem}/>
       <br></br>
       <Typography>Reminder</Typography>
       <CheckUnCheckList ItemList={reminderitemlist} clickItem={clickReminderItem}/>
      
       {/* <TextField value={comment} onChange={(e)=>{setComment(e.target.value)}}  label={'Comment'} multiline
          maxRows={6}/> */}
          <TextareaAutosize name="Outlined" placeholder="Comment" minRows={4} style={{width:"100%"}}/>
<br></br>

    <Button>Save</Button>
        
        </Card>
        </Container>
    </div>
  )
}

export default FollowUp
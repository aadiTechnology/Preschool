import { Card, Container, TextField ,Grid, Button} from '@mui/material'
import React, { useState ,useEffect} from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import SelectedCard from 'src/library/Card/SelectedCard';
import CheckUnCheckList from 'src/library/Card/CheckUnCheckList';


const FollowUp = () => {
const ItemList1 =[{Id:1  ,Name:"yes" , value:1 , IsActive:"false"} ,{Id:2  ,Name:"No" , value:2 , IsActive:"false"}, {Id:3  ,Name:"Did Not Connect" , value:3 , IsActive:"false"}]
const[name, setName] = useState("");
const[fathername, setFatherName] = useState("");  
const[phonenumber1, setPhoneNumber1] = useState("");
const[mothername, setMotherName] = useState("");
const[phonenumber2, setPhoneNumber2] = useState("");
const[email, setEmail] = useState("");
 const[itemList , setItemList] =useState([{Id:1  ,Name:"yes" , Value:1 , IsActive:false} ,{Id:2  ,Name:"No" , Value:2 , IsActive:false}, {Id:3  ,Name:"Did Not Connect" , Value:3 , IsActive:false}])

const clickItem=(value)=>{
    setItemList(value)
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
        
       <CheckUnCheckList ItemList={itemList} clickItem={clickItem}/>
<br></br>
    <Button>Save</Button>
        
        </Card>
        </Container>
    </div>
  )
}

export default FollowUp
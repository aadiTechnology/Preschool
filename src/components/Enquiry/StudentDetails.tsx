import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import React, { useState } from 'react'
import Dropdown from 'src/libraries/Training/Dropdown'
import InputField from "src/libraries/Training/InputField"
import RadioList from "src/libraries/Training/RadioList"
import PageHeader from 'src/library/heading/pageHeader'
import EnquiryList from './EnquiryList'
import { Typography } from '@mui/material'
import ButtonField from 'src/libraries/Training/ButtonField'
import { useNavigate } from 'react-router'

const AddClass = () => {
   const navigate = useNavigate(); 
const enquiryList = [{ Id: 1, Name: "Enquiry List", Value: "1" },
{ Id: 2, Name: "Admission List", Value: "2" },
{ Id: 3, Name: "Follow Ups", Value: "3" },];

const [toggleId, setToggleId] = useState('1');

const clickToggle = (value)=>{
    // setToggleId(value);
};
const clickEnquiry =()=>{
   navigate('/extended-sidebar/Student/AddEnquiry') 
}
  return (
   <>
    <Container>
        <Grid container direction="column" alignItems="center" justifyContent="center">
            <Grid container spacing={2}>
                <Grid item xs={12} display={'flex'}  justifyContent={'center'}>
                {/* <Typography variant="h2" gutterBottom >
                        Student Details
                    </Typography> */}
                    <PageHeader heading='Student Details'/>
                    </Grid>
                    <Grid item xs={2} sm={2}>
                    <ButtonField Label="AddEnquiry" ClickItem={clickEnquiry}  />
                    </Grid>
                <Grid item xs={12} style={{ textAlign: 'right' }}>
                    <RadioList ItemList={enquiryList} Label={''}
                        DefaultValue={toggleId} ClickItem={clickToggle}
                        ErrorMessage={undefined} />
                </Grid>
            </Grid>
            </Grid>
    </Container>
    <EnquiryList/>
   </>
    
  )
}

export default AddClass


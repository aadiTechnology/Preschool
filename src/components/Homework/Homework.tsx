import { Card, Container,Grid } from '@mui/material'
import React,{useState,useEffect} from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import DotLegend from 'src/library/Legend/DotLegend'

function Homework()  {
  return (
    <Container>
        <PageHeader heading={'Homework'} />
        <DotLegend ItemList={[{Value:'Green',Name:'Recieved Homework'}]}/><br></br>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{textAlign:'center',height:"40px"}}><ArrowLeftIcon></ArrowLeftIcon></Card>
        
        </Grid>
          <Grid item xs={4}>
            <Card sx={{textAlign:'center',height:"40px"}}>10-06-2023</Card>
        </Grid>
        <Grid item xs={4}>
        <Card sx={{textAlign:'center',height:"40px"}}><ArrowRightIcon></ArrowRightIcon></Card>
        </Grid>
        </Grid>
        

    </Container>
  )
}

export default Homework
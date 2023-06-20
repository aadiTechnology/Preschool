import { Card, Container, Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import DotLegend from 'src/library/Legend/DotLegend'
import { GetDateForLegend } from 'src/requests/Student/Homework/RequestHomework'
import { IGetDateForLegendBody } from 'src/Interface/Student/IHomework';
import ListCard from 'src/library/List/ListCard';
import Card2Text from 'src/library/Card/Card2Text';
import { useNavigate } from 'react-router';
import SuspenseLoader from 'src/layouts/Components/SuspenseLoader';

function Homework() {

  const dispatch = useDispatch();
  const navigate=useNavigate()
  const clickViewHomework=()=>{
    navigate('ViewHomework')
  }

  // const ItemList=[{Text1:"Drawing",Text2:"08-05-23"},{Text1:"English",Text2:"10-01-20"},{Text1:"Craft",Text2:"17-06-21"}]

  const GetDateLegend: any = useSelector(
    (state: RootState) => state.HomeWork.HighlightedDate
  );

  const loading = useSelector(
    (state: RootState) => state.HomeWork.Loading
  );

const [assignDate , setAssignDate] = useState()

  const GetHighlightedDateBody: IGetDateForLegendBody =
  {
    "AssignDate": "2023-06-20"
  }




  useEffect(() => {
    dispatch(GetDateForLegend(GetHighlightedDateBody));
  }, [])




  return (
    <Container>
      <PageHeader heading={'Homework'} />
      <DotLegend ItemList={[{ Value: 'Green', Name: 'Recieved Homework' }]} /><br></br>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ textAlign: 'center', height: "40px" }}><ArrowLeftIcon></ArrowLeftIcon></Card>

        </Grid>
        <Grid item xs={4}>
          <Card sx={{ textAlign: 'center', height: "40px" }}>10-06-2023</Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ textAlign: 'center', height: "40px" }}><ArrowRightIcon></ArrowRightIcon></Card>
        </Grid>
      </Grid>
      <br></br>
      {loading ? <SuspenseLoader/> : 
     <ListCard ItemList={GetDateLegend} clickNavigate={clickViewHomework}/>}
    
    </Container>
  )
}

export default Homework
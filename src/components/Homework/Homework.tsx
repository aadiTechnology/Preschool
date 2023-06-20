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
import SelectedCard from 'src/library/Card/SelectedCard';

function Homework() {

  const dispatch = useDispatch();
  const navigate=useNavigate()
  const clickViewHomework=()=>{
    navigate('ViewHomework')
  }

  const itemList=[{Id:1 , Name:"4-5-2023" , Value:"4-5-2023" , IsActive:false},{Id:2 , Name:"5-5-2023" , Value:"5-5-2023" , IsActive:false},{Id:3 , Name:"6-5-2023" , Value:"6-5-2023" , IsActive:false},{Id:4 , Name:"6-5-2023" , Value:"4-5-2023" , IsActive:false}]

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

  const [ItemList, setItemList] = useState(itemList)
  
  const clickItem = (value) => {
    setItemList(value)
  }
  const [index, setIndex] = useState(0);
  const arrowClick = (value) => {
    const maxlength = itemList.length - 1;
    const min = 0;
    if (value === -1 && index === 0) {
      setIndex(maxlength)
    } else
      if (value === 1 && index === maxlength) {
        setIndex(min)
      }
      else {
        setIndex(index + value)

      }

  }
  return (
    <Container>
      <PageHeader heading={'Homework'} />
      <DotLegend ItemList={[{ Value: 'Green', Name: 'Recieved Homework' }]} /><br></br>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ textAlign: 'center', height: "40px" }}><ArrowLeftIcon onClick={() => arrowClick(-1)}></ArrowLeftIcon></Card>

        </Grid>
        <Grid item xs={4}>
      <SelectedCard ItemList={ItemList} clickItem={clickItem} type='Button' />
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ textAlign: 'center', height: "40px" }}><ArrowRightIcon onClick={() => arrowClick(1)}></ArrowRightIcon></Card>
        </Grid>
      </Grid>
      <br></br>
      {loading ? <SuspenseLoader/> : 
     <ListCard ItemList={GetDateLegend} clickNavigate={clickViewHomework}/>}
    
    </Container>
  )
}

export default Homework
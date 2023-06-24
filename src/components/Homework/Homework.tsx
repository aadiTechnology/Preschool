import { Card, Container, Grid, IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import DotLegend from 'src/library/Legend/DotLegend'
import { GetHomework ,GetHomeworkDate} from 'src/requests/Student/Homework/RequestHomework'
import { IGetDateForLegendBody ,IGetDatewiseHomeworkDetailsBody} from 'src/Interface/Student/IHomework';
import ListCard from 'src/library/List/ListCard';
import Card2Text from 'src/library/Card/Card2Text';
import { useNavigate } from 'react-router';
import SuspenseLoader from 'src/layouts/Components/SuspenseLoader';
import SelectedCard from 'src/library/Card/SelectedCard';
import { getNextDate } from '../Common/util';

function Homework() {

  const dispatch = useDispatch();
  const navigate=useNavigate()
  const clickViewHomework=()=>{
    navigate('ViewHomework')
  }

  const itemList=[{Id:1 , Name:"4-5-2023" , Value:"4-5-2023" , IsActive:false},{Id:2 , Name:"5-5-2023" , Value:"5-5-2023" , IsActive:false},{Id:3 , Name:"6-5-2023" , Value:"6-5-2023" , IsActive:false},{Id:4 , Name:"6-5-2023" , Value:"4-5-2023" , IsActive:false}]

  const HomeworkDetails: any = useSelector(
    (state: RootState) => state.HomeWork.HomeworkDetails);

    const HomeworkDates: any = useSelector(
      (state: RootState) => state.HomeWork.HomeworkDate);
     
    const AllowNext: any = useSelector(
      (state: RootState) => state.HomeWork.AllowNext);
    const AllowPrevious: any = useSelector(
      (state: RootState) => state.HomeWork.AllowPrevious);



  const loading = useSelector(
    (state: RootState) => state.HomeWork.Loading
  );

const [ItemList, setItemList] = useState([])
const [prevNext, setPrevNext] = useState(0)
const [startdate, setStartDate] = useState('')
const [endDate, setEndDate] = useState('')
  const GetHighlightedDateBody: IGetDateForLegendBody =
  {
    AssignDate: ItemList.filter((item) => {return (item.IsActive) }).map((obj) => { return obj.Value }).toString(),
  }

  const GetHomeworkDateBody: IGetDatewiseHomeworkDetailsBody =
  {
    StartDate: startdate
  }
  

  useEffect(() => {
  dispatch(GetHomeworkDate(GetHomeworkDateBody));
  }, [])

  useEffect(() => {
     dispatch(GetHomework(GetHighlightedDateBody));
   }, [ItemList])

  useEffect(()=>{
    setItemList(HomeworkDates)
  },[HomeworkDates])
  const clickItem = (value) => {
    setItemList(value)
  }

  const clickPrevNext = (value) => {
    setPrevNext(value)

    if (value === -1) {
      setStartDate('')
      setEndDate(getNextDate(itemList[0].Value, -1))
    } else
      if (value === 1) {
        setStartDate(getNextDate(itemList[itemList.length - 1].Value, 1))
        setEndDate('')
      }
  }
  return (
    <Container>
      <PageHeader heading={'Homework'} />
      <DotLegend ItemList={[{ Value: 'Green', Name: 'Recieved Homework' }]} /><br></br>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ textAlign: 'center', height: "40px" }}>
            <IconButton disabled={AllowPrevious}>
            <ArrowLeftIcon  onClick={() => clickPrevNext(-1)}></ArrowLeftIcon>
            </IconButton>
            </Card>
        </Grid>
        <Grid item xs={4}>
      <SelectedCard ItemList={ItemList} clickItem={clickItem} type='Button' />
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ textAlign: 'center', height: "40px" }}>
            <IconButton disabled={AllowNext}>
            <ArrowRightIcon onClick={() => clickPrevNext(1)}></ArrowRightIcon>
            </IconButton>
            </Card>
        
        </Grid>
      </Grid>
      <br></br>
      {loading ? <SuspenseLoader/> : 
     <ListCard ItemList={HomeworkDetails} clickNavigate={clickViewHomework}/>}
    
    </Container>
  )
}

export default Homework
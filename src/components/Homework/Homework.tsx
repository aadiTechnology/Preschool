import { Card, Container, Grid, IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import DotLegend from 'src/library/Legend/DotLegend'
import { GetHomework, GetHomeworkDate } from 'src/requests/Student/Homework/RequestHomework'
import { IGetDateForLegendBody, IGetDatewiseHomeworkDetailsBody } from 'src/Interface/Student/IHomework';
import ListCard from 'src/library/List/ListCard';
import Card2Text from 'src/library/Card/Card2Text';
import { useNavigate } from 'react-router';
import SuspenseLoader from 'src/layouts/Components/SuspenseLoader';
import SelectedCard from 'src/library/Card/SelectedCard';
import { getDateFormatted, getNextDate } from '../Common/util';

function Homework() {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const HomeworkDetails: any = useSelector((state: RootState) => state.HomeWork.HomeworkDetails);

  const HomeworkDates: any = useSelector((state: RootState) => state.HomeWork.HomeworkDate);

  const AllowNext: any = useSelector((state: RootState) => state.HomeWork.AllowNext);

  const AllowPrevious: any = useSelector((state: RootState) => state.HomeWork.AllowPrevious);
  
  const loading = useSelector((state: RootState) => state.HomeWork.Loading);

  const [ItemList, setItemList] = useState([])
  const [startdate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')


  useEffect(() => {
    const GetHomeworkDateBody: IGetDatewiseHomeworkDetailsBody =
    {
      ClassDivisionId: parseInt(sessionStorage.getItem("ClassDivisionId")),
      StartDate: startdate,
      EndDate: endDate
    }
    dispatch(GetHomeworkDate(GetHomeworkDateBody));
  }, [endDate])

  useEffect(() => {
    if (ItemList.length > 0) {
      const assignDate = ItemList
        .filter((item) => { return (item.IsActive) })
        .map((obj) => { return obj.Value }).toString();
      const GetHighlightedDateBody: IGetDateForLegendBody =
      {
        ClassDivisionId: parseInt(sessionStorage.getItem("ClassDivisionId")),
        AssignDate: getDateFormatted(assignDate),
      }
      dispatch(GetHomework(GetHighlightedDateBody));
    }
  }, [ItemList])

  useEffect(() => {
    setItemList(HomeworkDates)
  }, [HomeworkDates])

  const clickItem = (value) => {
    setItemList(value)
  }

  const clickPrevNext = (value) => {
    if (value === -1) {
      setStartDate('')
      setEndDate(getNextDate(ItemList[0].Value, -1))
    }
    else if (value === 1) {
      setStartDate(getNextDate(ItemList[ItemList.length - 1].Value, 1))
      setEndDate('')
    }
  }

  const clickViewHomework = (value) => {
    navigate('ViewHomework/' + value)
  }

  return (
    <Container>
      <PageHeader heading={'Homework'} />
      <DotLegend ItemList={[{ Value: 'Green', Name: 'Recieved Homework' }]} /><br></br>
      <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs={2} alignItems={"center"} >
          <IconButton disabled={!AllowPrevious}>
            <Card sx={{ textAlign: 'center', height: "40px" }}>
              <ArrowLeftIcon onClick={() => clickPrevNext(-1)}></ArrowLeftIcon>
            </Card>
          </IconButton>
        </Grid>
        <Grid item xs={8}>
          <SelectedCard ItemList={ItemList} clickItem={clickItem} type='Button' />
        </Grid>
        <Grid item xs={2} alignItems={"center"} >
          <IconButton disabled={!AllowNext}>
            <Card sx={{ textAlign: 'center', height: "40px" }}>
              <ArrowRightIcon onClick={() => clickPrevNext(1)}></ArrowRightIcon>
            </Card>
          </IconButton>
        </Grid>
      </Grid>
      <br></br>
      {loading ? <SuspenseLoader /> :
        <ListCard ItemList={HomeworkDetails} clickNavigate={clickViewHomework} />}

    </Container>
  )
}

export default Homework
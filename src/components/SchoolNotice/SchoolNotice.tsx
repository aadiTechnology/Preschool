import { Card, Container, Grid, IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import DotLegend from 'src/library/Legend/DotLegend'
import { GetSchoolNotice,GetSchoolNoticeDate } from 'src/requests/SchoolNotice/RequestSchoolNotice';
import { IGetDateForLegendNoticeBody,IGetDatewiseSchoolNoticeBody } from 'src/Interface/Student/ISchoolNotice';
import ListCard from 'src/library/List/ListCard';
import Card2Text from 'src/library/Card/Card2Text';
import { useNavigate } from 'react-router';
import SuspenseLoader from 'src/layouts/Components/SuspenseLoader';
import SelectedCard from 'src/library/Card/SelectedCard';
import { getDateFormatted, getNextDate } from '../Common/util';


const SchoolNotice = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate()

  const SchoolNoticeDetails: any = useSelector((state: RootState) => state.ViewSchoolNotice.SchoolNotice);

  const SchoolNoticeDates: any = useSelector((state: RootState) => state.ViewSchoolNotice.NoticeDate);

  const AllowNext: any = useSelector((state: RootState) => state.ViewSchoolNotice.AllowNext);

  const AllowPrevious: any = useSelector((state: RootState) => state.ViewSchoolNotice.AllowPrevious);

  const [ItemList, setItemList] = useState([])
  const [startdate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  useEffect(() => {
    const GetNoticeDateBody: IGetDatewiseSchoolNoticeBody =
    {
      ClassId: parseInt(sessionStorage.getItem("ClassId")),
      StartDate: startdate,
      EndDate: endDate
    }
    dispatch(GetSchoolNoticeDate(GetNoticeDateBody));
  }, [endDate])

  useEffect(() => {
    if (ItemList.length > 0) {
      const assignDate = ItemList
        .filter((item) => { return (item.IsActive) })
        .map((obj) => { return obj.Value }).toString();
      const GetHighlightedDateBody: IGetDateForLegendNoticeBody =
      {
        ClassId: parseInt(sessionStorage.getItem("ClassId")),
        AssignDate: getDateFormatted(assignDate),
      }
      dispatch(GetSchoolNotice(GetHighlightedDateBody));
    }
  }, [ItemList])

    useEffect(() => {
    setItemList(SchoolNoticeDates)
  }, [SchoolNoticeDates])

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

  const clickViewSchoolNotice = (value) => {
    navigate('ViewSchoolNotice/' + value)
  }
  

  return (
    
      <Container>
      <PageHeader heading={'View School Notice'} />
      <DotLegend ItemList={[{ Value: 'Green', Name: 'Recieved School Notice' }]} /><br></br>
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
      {
        <ListCard ItemList={SchoolNoticeDetails} clickNavigate={clickViewSchoolNotice} />}

    </Container>
    
  )
}

export default SchoolNotice

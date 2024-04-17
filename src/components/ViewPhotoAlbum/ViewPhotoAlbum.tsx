import { Card, Container, Grid, Typography } from '@mui/material'
import React, { useState ,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import DropDown from 'src/library/DropDown/DropDown'
import PageHeader from 'src/library/heading/pageHeader'
import { RootState } from 'src/store'
import {GetYearDropDownForAlbumList ,GetAlbumNameList} from 'src/requests/Student/Viewphoto/RequestViewphoto'
import {IGetYearDropDownForAlbumListBody ,IGetAlbumNameListBody} from "src/Interface/Student/IViewphoto"
import {monthArray} from 'src/components/Common/util'
import ListCard from 'src/library/List/ListCard'
import SuspenseLoader from 'src/layouts/Components/SuspenseLoader'
import { useNavigate } from 'react-router';


function ViewPhotoAlbum() {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const [year ,setYear] =useState('')
    const [month ,setMonth] =useState('')
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth() + 1 
    const currentYear = currentDate.getFullYear()
    const GetYearList: any = useSelector(
        (state: RootState) => state.Viewphoto.YearList
    );

    const GetAlbumList: any = useSelector(
        (state: RootState) => state.Viewphoto.AlbumList
    );
    const loading = useSelector((state: RootState) => state.Viewphoto.Loading);

    const GetYearBody: IGetYearDropDownForAlbumListBody =
    {
        AlbumId: 0
    }

  const AlbumListBody:IGetAlbumNameListBody=

    {
        month:month,
        year:year
    }

     useEffect(() => {
        setMonth(currentMonth.toString())
        setYear(currentYear.toString())
        dispatch(GetYearDropDownForAlbumList(GetYearBody));
        }, [])

    useEffect(()=>{
        if(year !== "" && month!=="" )
        dispatch(GetAlbumNameList(AlbumListBody));
    },[ year ,month])

   console.log(GetYearList ,"GetYearList")
   console.log(GetAlbumList ,"GetAlbumList")

    
    
    const clickYear=(value)=>{
        setYear(value)
    }

   const clickMonth=(value)=>{
    setMonth(value)
        }

  const clickNavigate =(value)=>{
     navigate(value)
   }
  return (
    <Container>
        <PageHeader heading={'Photo Gallery'}/>
        
            <Grid container spacing={2} >
                <Grid item xs={6}>
                <DropDown itemList={GetYearList} ClickItem={clickYear} DefaultValue={year} Label={'select Year'}/>
                </Grid >
           
                <Grid item xs={6}>
                <DropDown itemList={monthArray} ClickItem={clickMonth} DefaultValue={month} Label={'select Month'}/>
                </Grid >
            </Grid>
       
        <br></br>
        {loading ? <SuspenseLoader/> :
    <ListCard ItemList={GetAlbumList} clickNavigate={clickNavigate}/>}
   </Container>
  )
}

export default ViewPhotoAlbum
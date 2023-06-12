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




function ViewPhotoAlbum() {
    const dispatch = useDispatch();
    const [year ,setYear] =useState('')
    const [month ,setMonth] =useState('')
    const GetYearList: any = useSelector(
        (state: RootState) => state.Viewphoto.YearList
    );
    const GetAlbumList: any = useSelector(
        (state: RootState) => state.Viewphoto.AlbumList
    );

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
        dispatch(GetYearDropDownForAlbumList(GetYearBody));
        }, [])

    useEffect(()=>{
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
  return (
    <Container>
        <PageHeader heading={'Photo Gallery'}/>
        <Card>
            <Grid container spacing={2} >
                <Grid item xs={4}>
                <DropDown itemList={GetYearList} ClickItem={clickYear} DefaultValue={year} Label={'select Year'}/>
                </Grid >
             <Grid item xs={2}/>
                <Grid item xs={4}>
                <DropDown itemList={monthArray} ClickItem={clickMonth} DefaultValue={month} Label={'select Month'}/>
                </Grid >
            </Grid>
        </Card>
        <br></br>
       <Card>
        {GetAlbumList.map((item,i)=>(
            <div key={i}>
              <Typography>{item.Title}</Typography>
            </div>
        ))}
       </Card>
        
    </Container>
  )
}

export default ViewPhotoAlbum
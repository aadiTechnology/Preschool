import { Card, Container, Grid } from '@mui/material'
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

    const GetAlbumList: any = useSelector(
        (state: RootState) => state.Viewphoto.AlbumList
    );

    const GetYearList: any = useSelector(
        (state: RootState) => state.Viewphoto.YearList
    );
    
  


    const AlbumListBody:IGetAlbumNameListBody=

    {
        month:"5",
        year:"2023"
    }

    useEffect(()=>{
        dispatch(GetAlbumNameList(AlbumListBody));
    },[])
    
    const GetYearBody: IGetYearDropDownForAlbumListBody =
    {
        AlbumId: 0
    }
    useEffect(() => {
        dispatch(GetYearDropDownForAlbumList(GetYearBody));
        
    }, [])

//  console.log(GetYearList ,"GetYearList")
// console.log(GetAlbumList ,"GetAlbumList")

    
    const [year ,setYear] =useState('')
    const clickYear=(value)=>{
        setYear(value)
    }

    
        const [month ,setMonth] =useState('')
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
       
        
    </Container>
  )
}

export default ViewPhotoAlbum
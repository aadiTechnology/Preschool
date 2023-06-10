import { Card, Container, Grid } from '@mui/material'
import React, { useState } from 'react'




import DropDown from 'src/library/DropDown/DropDown'
import PageHeader from 'src/library/heading/pageHeader'

const itemList=[{id:1,Name:'2023' ,Value:'1'} ,{id:1,Name:'2022' ,Value:'2'} ,{id:1,Name:'2021' ,Value:'3'}]
const itemList2=[{id:1,Name:'January' ,Value:'1'} ,{id:1,Name:'February' ,Value:'2'}
,{id:1,Name:'March' ,Value:'3'} ,{id:1,Name:'April' ,Value:'4'} ,{id:1,Name:'May' ,Value:'5'}
,{id:1,Name:'June' ,Value:'6'} ,{id:1,Name:'July' ,Value:'7'} ,{id:1,Name:'August' ,Value:'8'}
,{id:1,Name:'September' ,Value:'9'} ,{id:1,Name:'October' ,Value:'10'} ,{id:1,Name:'November' ,Value:'11'}
,{id:1,Name:'December' ,Value:'12'}]



function ViewPhotoAlbum() {
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
                <DropDown itemList={itemList} ClickItem={clickYear} DefaultValue={year} Label={'select Year'}/>
                </Grid >
             <Grid item xs={2}/>
                <Grid item xs={4}>
                <DropDown itemList={itemList2} ClickItem={clickMonth} DefaultValue={month} Label={'select Month'}/>
                </Grid >
            </Grid>
        </Card>
        <br></br>
       
        
    </Container>
  )
}

export default ViewPhotoAlbum
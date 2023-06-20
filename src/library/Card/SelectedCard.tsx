import React,{useState} from 'react'

import { Grid } from '@mui/material';
import SingleButton from './SingleButton';


function SelectedCard({ItemList,clickItem , type="checkBox"}) {

   const onClick = (value) => {
      ItemList = ItemList.map((item) => {
        return item.Id === value.Id ?
          value :
          { ...item, IsActive: false }
      });
      clickItem(ItemList)
    }
  
   
  return (

    <Grid container spacing={1}>
    
    {ItemList.map((item, i) => {
       console.log(item ,"item")
           return (
            <Grid  item xs={6} md={3} key={i}>
            <SingleButton Item={item}
             ClickItem={onClick} type={type}></SingleButton>
              </Grid>
            )
          })
        }
    </Grid>
  )
}

export default SelectedCard
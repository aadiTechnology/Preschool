import React,{useState} from 'react'

import { Grid } from '@mui/material';
import SingleButton from './SingleButton';


function SelectedCard({ItemList,clickItem}) {
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
    
    {ItemList.map((data, i) => {
           return (
            <Grid  item  key={i}>
            <SingleButton Item={data}
             ClickItem={onClick}></SingleButton>
              </Grid>
            )
          })
        }
    </Grid>
  )
}

export default SelectedCard
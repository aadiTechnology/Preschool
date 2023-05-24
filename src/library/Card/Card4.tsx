import React from 'react'
import {
    Card,
    Paper,
    Typography,
    IconButton,
    Box,
    Grid,
    Container
  } from '@mui/material';
  import Card2 from "src/library/Card/Card2";
function Card4({ items, rowsCol }) {
    const width = 12 / rowsCol;
  return (
    <Container>
   
      <Box sx={{mt:"10px"}}>
        <Grid
          container
          spacing={{ xs: 1 }}
         
        >
          {items.map(({ Icon, ...item }, index) => (
            <Grid item xs={width} key={index}  >
              <Card2 
                color={item.Color}
                text={item.Text}
                icon={index+1}
                Link={item.Link}
                iconColor = {item.iconColor} 
                opacityLevel="1"
               
              />
            </Grid>
          ))}
        </Grid>
      </Box>


  
    </Container>
  )
}

export default Card4

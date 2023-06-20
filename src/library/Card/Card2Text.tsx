import React from 'react'
import { Box , Card, Typography } from '@mui/material'
function Card2Text({ Text1,Text2,clickNavigate ,Link}) {
  return (
    <>
    <a href={Link} rel="noreferrer" target="_blank" style={{ textDecoration: 'none' }}>
       <Card component={Box} mb={1} onClick={clickNavigate}>
    <Box display={"flex"} justifyContent={'space-between'}  p={0.5}>
      <Typography variant="h5">
          {Text1}
        </Typography>
      <Typography variant='body2' color={"Green"} >
         {Text2}
     </Typography>
    </Box>
    </Card>
    </a>
    
    </>
 
  )
}

export default Card2Text
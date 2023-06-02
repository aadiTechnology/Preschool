import React from 'react'
import { Box , Card, Typography } from '@mui/material'
function Card2Text({ Text1,Text2}) {
  return (
    <Card component={Box} mb={1}>
    <Box display={"flex"} justifyContent={'space-between'}  p={1}>
      <Typography variant="h5">
          {Text1}
        </Typography>
      <Typography variant='body2' >
         {Text2}
     </Typography>
    </Box>
    </Card>
  )
}

export default Card2Text
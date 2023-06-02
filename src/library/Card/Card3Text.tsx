import React from 'react'
import { Box , Card, Typography } from '@mui/material'
function Card3Text({ Text1, Text2, Text3, textVariant = 'body2' }) {
  return (
    <Card component={Box} mb={1}>
    <Box display={"flex"} justifyContent={'space-between'}  p={1}>
      <Typography variant='h5'>
          {Text1}
        </Typography>
      <Typography variant='body2' >
         {Text2}
     </Typography>
    </Box>
    <Typography variant='body2' pl={1} pb={1}>
         {Text3}
     </Typography>
    </Card>
  )
}

export default Card3Text
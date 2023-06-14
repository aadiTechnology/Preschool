import { Paper ,Box ,Grid , Card ,Typography} from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
   <Paper square>
    <Box sx={{   zIndex: "9999" }}>
      
      <Link to={`/${location.pathname.split('/')[1]}/landing/landing`} style={{ textDecoration: 'none' }}>
            <Card >
            <Typography sx={{textAlign:"center"}}>Home</Typography>
            </Card>
            </Link>
   
      </Box>
      </Paper>
    </div>
  )
}

export default Footer
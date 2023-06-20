import { Paper ,Box ,Grid , Card ,Typography, IconButton} from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

function Footer() {
  return (
    <div>
   <Paper square>
    <Box sx={{   zIndex: "9999" }}>
      
      <Link to={`/${location.pathname.split('/')[1]}/landing/landing`} style={{ textDecoration: 'none' }}>
            <Card sx={{textAlign:"center"}}>
          <IconButton >
          <HomeIcon fontSize='large'/>
          </IconButton>
          
            </Card>
            </Link>
   
      </Box>
      </Paper>
    </div>
  )
}

export default Footer
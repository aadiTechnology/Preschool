import { Paper ,Box , IconButton} from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';

function Footer() {

  const UserType = sessionStorage.getItem('UserType');
  
  return (
    <div>
   <Paper square>
    <Box sx={{zIndex: "9999" ,textAlign:"center"}}>
      
      {/* <Link to={`/${location.pathname.split('/')[1]}/landing/landing`} style={{ textDecoration: 'none' }}>
         <IconButton >
          <HomeIcon fontSize='large'/>
          </IconButton>
          </Link> */}
            <Link to={`/${location.pathname.split('/')[1]}/Student/Homework`} style={{ textDecoration: 'none' }}>
            {UserType === '3' && <IconButton><MenuBookIcon /> </IconButton>  }
            </Link>

            <Link to={`/${location.pathname.split('/')[1]}/Student/ViewPhotoAlbum`} style={{ textDecoration: 'none' }}>
            {UserType === '3' && <IconButton><AddPhotoAlternateIcon /> </IconButton>  }
            </Link>

            {/* <Link to={`/${location.pathname.split('/')[1]}/Student/AddHomeWork`} style={{ textDecoration: 'none' }}>
            {UserType === '2' && <IconButton><ChromeReaderModeIcon /> </IconButton>  }
            </Link> */}
      </Box>
      </Paper>
    </div>
  )
}

export default Footer
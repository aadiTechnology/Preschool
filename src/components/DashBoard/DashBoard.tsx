import React from 'react'
import { Card, Typography ,Grid, Container, IconButton} from '@mui/material'
import { Link } from 'react-router-dom'
import PeopleIcon from '@mui/icons-material/People';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
function DashBoard() {
 const itemList=[
 {
    Text:"AddStaff",
    Link: 'Student/AddStaff',
    icon: <PeopleIcon/>
 },

 {
    Text:"AddHomeWork",
    Link: 'Student/AddHomeWork',
    icon: <ChromeReaderModeIcon/>
 },
 {
  Text:"PhotoGallery",
  Link: 'Student/ViewPhotoAlbum',
  icon: <AddPhotoAlternateIcon/>
},

{
  Text:"Homework",
  Link: 'Student/Homework',
  icon: <MenuBookIcon/>
},
{
  Text:"AddPhoto",
  Link: 'Student/AddPhoto',
  icon : <AddToQueueIcon/>
},
{
  Text:"Login",
  Link: 'Student/Login',
  icon : <AddToQueueIcon/>
},
{
  Text:"ChangePassword",
  Link: 'Student/ChangePassword',
  icon : <AddToQueueIcon/>
}


]

  return (
    <Container>
       <Grid container spacing={2} mt={2}>
        {itemList.map((item,i)=>(
        
         
            <Grid item xs={3} key={i}>
            <Link to={`/${location.pathname.split('/')[1]}/${item.Link}`} style={{ textDecoration: 'none' }}>
            <Card>
              <IconButton>{item.icon}</IconButton>
            <Typography>{item.Text}</Typography>
            </Card>
            </Link>
            </Grid>
          
          
          ))}
            </Grid> 
    </Container>
  )
}

export default DashBoard
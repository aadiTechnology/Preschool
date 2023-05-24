import React, {useState} from 'react';
import {
  Container,
  Card,
  Avatar,
  Box,
  Grid,
  Typography,
  IconButton,
  Button
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Card11({Title, Text1, Text2, BGColor}) {
    const [isCheck, setIsCheck] = useState(false)
    const handleClick = event => {
        setIsCheck(!isCheck)
      };
  return (
    <div>
      <Container>
        <Card
          sx={{
            mt: '20px',
            mb: '20px',
            height: '80px',

            borderRadius: '20px',
            borderRight: '10px solid ' + BGColor
          }}
        >
         
          <Grid container>
            <Grid xs={3}>

               <Avatar onClick={() => setIsCheck(!isCheck)} sx={{ mt: '20px', ml: '10px', backgroundColor: BGColor }}>
                {!isCheck && <IconButton/>}
                {isCheck && <CheckCircleIcon/>}
              </Avatar> 
    
            </Grid>
            <Grid xs={9}>
              <Typography
                sx={{
                  mt: '20px',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  fontWeight: 'bold',
                  ml: '-20px'
                }}
              >
                {Title}
              </Typography>
            </Grid>

            <Grid xs={3} />
            <Grid xs={5} sx={{ mt: '-20px', ml: '-20px' }}>
              <Typography sx={{}}>{Text1}</Typography>
            </Grid>
            <Grid xs={4} sx={{ mt: '-20px' }}>
              <Typography>{Text2}</Typography>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </div>
  );
}

export default Card11;

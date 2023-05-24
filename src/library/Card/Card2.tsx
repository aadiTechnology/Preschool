import React from 'react';
import {
  Paper,
  Grid,
  Container,
  IconButton,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar
} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      width: '80px',
      // transition: "transform 2s",
      transform: 'rotate(5deg)'
    },
    '&:link': {
      textDecoration: 'none'
    }
  },
  rool1: {
    '&:link': {
      textDecoration: 'none'
    }
  }
}));
function Card2({ color, text, icon, iconColor, opacityLevel, Link }) {
  const styles = {
    largeIcon: {
      width: 50,
      height: 50,
      color: iconColor
    }
  };
  const classes = useStyles();
  const opacity =
    'rgba(255, 255, 255, ' + (opacityLevel === '1' ? '0.3' : '0') + ')';
  return (
    <>
      <Card
        sx={{
          backgroundColor: color,
          height: '180px',
          pt: '10px',
          textAlign: 'center'
        }}
        square
      >
        <CardContent sx={{ justifyContent: 'center' }}>
        
          <IconButton>
            {icon === 1 && <AssignmentIcon style={styles.largeIcon} />}
            {icon === 2 && <AccessTimeFilledIcon style={styles.largeIcon} />}
            {icon === 3 && <AddPhotoAlternateIcon style={styles.largeIcon} />}
            {icon === 4 && <AssessmentIcon style={styles.largeIcon} />}
            {icon === 5 && <AssessmentIcon style={styles.largeIcon} />}
            {icon === 6 && <AssessmentIcon style={styles.largeIcon} />}
            {icon === 7 && <AssessmentIcon style={styles.largeIcon} />}
            {icon === 8 && <AssessmentIcon style={styles.largeIcon} />}
            {icon === 9 && <AssessmentIcon style={styles.largeIcon} />}
            {icon === 10 && <AssessmentIcon style={styles.largeIcon} />}
            {/* { Icon  } */}
          </IconButton>
          {/* </Avatar> */}
        </CardContent>
        <Typography sx={{ color: 'white', fontSize: '20px', mt: '-20px' }}>
          {text}
        </Typography>
        <a href={Link} className={classes.rool1}>
          {false && (
            <Box sx={{ mt: '20px' }}>
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '20px',
                  height: '50px',
                  background: 'rgba(255, 255, 255, .4)'
                }}
              >
                view all
              </Typography>
            </Box>
          )}
        </a>
      </Card>

     
    </>
  );
}

export default Card2;

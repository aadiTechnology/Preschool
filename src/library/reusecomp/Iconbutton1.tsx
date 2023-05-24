

import React from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { makeStyles } from '@mui/styles';
import { IconButton } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      color: 'red',
      width: '80px',
      // transition: "transform 2s",
      transform: 'rotate(5deg)'
    }
  }
}));
const styles = {
  largeIcon: {
    width: 60,
    height: 60,
    color: 'white'
  }
};

function Iconbutton1({icon}) {
  const classes = useStyles();
  return (
    <div>
      <IconButton className={classes.root}sx={{ textAlign: 'center' }}>
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
    </div>
  );
}

export default Iconbutton1;

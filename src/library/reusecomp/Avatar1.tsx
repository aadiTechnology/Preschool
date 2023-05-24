import React from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { makeStyles } from '@mui/styles';
import { Avatar } from '@mui/material';
const useStyles = makeStyles((theme) => ({
    root: {
      '&:hover': {
        color: 'red',
        width: "80px",
        // transition: "transform 2s",
        transform: "rotate(5deg)"
      },
  
     
    }
  }));
  const styles = {
    largeIcon: {
      width: 60,
      height: 60,
      color: 'white'
    }
  };
  
function Avatar1( {icon, iconColor}) {
    const classes = useStyles();
    console.log(icon)
  return (
    <div>
      <Avatar
              variant="square"
              sx={{
                boxShadow: '6px 6px 6px grey !important',
                width: '70px',
                height: '70px',
                backgroundColor: iconColor,
                borderRadius: '10px'
              }}  className={classes.root}
            >
              {icon === 1 && <AssignmentIcon style={styles.largeIcon} />}
              {icon === 2 && <AccessTimeFilledIcon style={styles.largeIcon} />}
              {icon === 3 && <AddPhotoAlternateIcon style={styles.largeIcon} />}
              {icon === 5 && <AssessmentIcon style={styles.largeIcon} />}
              {icon === 6 && <AssessmentIcon style={styles.largeIcon} />}
              {icon === 7 && <AssessmentIcon style={styles.largeIcon} />}
              {icon === 8 && <AssessmentIcon style={styles.largeIcon} />}
              {icon === 9 && <AssessmentIcon style={styles.largeIcon} />}
              {icon === 10 && <AssessmentIcon style={styles.largeIcon} />}
              {/* { Icon  } */}
            </Avatar>
        
    </div>
  )
}

export default Avatar1



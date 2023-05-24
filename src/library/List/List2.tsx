import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  TextField,
  Box,
  Avatar
} from '@mui/material';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor:"gray"
    }
  }
}));
function List1({ Heading,Month,Date }) {
  const classes = useStyles();
  return (
    <Container>
      <Card sx={{ mt: '20px' }}  className={classes.root}>
        <CardContent>
          <Grid container>
            <Grid xs={3}>
              <Card
                sx={{
                  backgroundColor: '#ffccbc',
                  height: '80px',
                  width: '70px',
                  mb: '-15px',
                  mt: '-9px',
                  ml: '-8px'
                }}
              >
                <Typography
                  sx={{ backgroundColor: 'red', textAlign: 'center', p: 0.3 }}>
                    {Month}
                </Typography>
                <Typography
                  sx={{ textAlign: 'center', mt: '10px', fontSize: '20px' }}>
                 {Date}
                </Typography>
              </Card>
            </Grid>
            <Grid xs={9}>
              <Typography variant="h4">{Heading}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default List1;

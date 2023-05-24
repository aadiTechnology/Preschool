import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  TextField,
  Box,
  Avatar,
  Paper
} from '@mui/material';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'gray'
    }
  }
}));
function List3({ Heading }) {
  const classes = useStyles();
  return (
    <Container>
      <Card
        sx={{ mt: '20px', borderLeft: '3px solid #00e676' }}
        className={classes.root}
      >
        <Box
          sx={{
            // position: 'absolute',
            // right: 8,
            // borderBottomLeftRadius: '9px',
            // // transform: 'rotateZ(-36deg)',
            // mr: '0.5rem',
            // float: 'right',
            // height: '30px',
            // width: '80px',
            // backgroundColor: '#00e676'

            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "100px",
            width: "200px",
            borderRadius: "150px 150px 0 0",
            backgroundColor: "green"
          }}
         
        ></Box>
        <CardContent>
          <Grid container>
            <Grid xs={10}>
              <Typography variant="h4">{Heading}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default List3;

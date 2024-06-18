import React from 'react'
import { styled, Box, Container, Typography, Grid } from '@mui/material';
import { HeadingStyle } from 'src/libraries/styled/HeadingStyled';
import { useParams } from 'react-router';

const UserMessage = ({message}) => {
    const { Id } = useParams();
    const messageDetails = [
        "Student Registerred Successfully!!!"
    ]
    console.log(Id,"-",messageDetails[Number(Id==undefined?"0":Id)]);
    
    const RootWrapper = styled(Box)(
        ({ theme }) => `
              margin-top: ${theme.spacing(2)};
              margin-bottom: ${theme.spacing(2)};
      `
      );
        return (
    <Container>
      <RootWrapper display="flex" alignItems="center">
        <Grid container>
            <Grid xs={12}>
      <HeadingStyle>{messageDetails[Number(Id==undefined?"0":Id)]}</HeadingStyle>
      </Grid>
      <Grid xs={12}>
      <Typography>
      You will be able to use the application shortly using email id and phone number. 
        We will communicate you the same.
      </Typography>
      </Grid>
      </Grid>
       </RootWrapper>
    </Container>
  )
}

export default UserMessage
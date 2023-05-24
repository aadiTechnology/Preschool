import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  TextField,
  Box
} from '@mui/material';
import AttachmentIcon from '@mui/icons-material/Attachment';
function List4({ Heading, Std, Date, Text, icon }) {
  // const ic =('icon'  === '1' ? <AttachmentIcon/> : '')'
  // const [show, setShow] = useState(true);
  return (
    <>
    
      <Grid xs={6} >
      <Card sx={{ mt: '20px',width:"200px"}}>
        <CardContent>
          <Typography variant="h4">{Heading}</Typography>

          <Typography>{Std}</Typography>

          <Typography>{Date}</Typography>

        </CardContent>
      </Card>
      </Grid>
    </>
  );
}

export default List4;

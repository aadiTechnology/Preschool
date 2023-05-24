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
function List1({ Heading, Std, Date, Text, icon }) {
  // const ic =('icon'  === '1' ? <AttachmentIcon/> : '')'
  // const [show, setShow] = useState(true);
  return (
    <Container>
      <Card sx={{ mt: '20px' }}>
        <Box
          sx={{
            position: 'absolute',
            right: 4,
            mt: '-8px',
            // transform: 'rotateZ(-36deg)',
            mr: '0.6rem',
            height: '40px',
            width: '40px',
            backgroundColor: 'pink',
            borderRadius: '50%'
          }}
        >
          <Box
            sx={{
              // position: 'absolute',
              // right: 1,
              // mt: '4px',
              // transform: 'rotateZ(-36deg)',
              // mr: '0.3rem',
              // textAlign: 'center'
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-70%, -50%)",
              height: "100px",
              width: "200px",
              borderRadius: "150px 150px 0 0",
              backgroundColor: "green"
            }}
          >
            {icon === 1 && <AttachmentIcon />}
          </Box>
        </Box>

        <CardContent>
          <Typography variant="h4">{Heading}</Typography>
          <Grid container sx={{ mt: '10px' }}>
            <Grid xs={8}>
              <Typography>{Std}</Typography>
            </Grid>

            <Grid xs={4}>
              <Typography>{Date}</Typography>
            </Grid>

            <Grid xs={12}>
              <Typography>{Text}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default List1;

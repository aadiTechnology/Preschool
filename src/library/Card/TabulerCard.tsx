import { Card, Grid, Typography } from '@mui/material'
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from '@mui/icons-material/Send';
function TabulerCard({item ,clickEdit ,Submit ,Delete}) {
  return (
    <div>
          <Card sx={{ mb: 1 }}  >
            <Grid container style={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={4} md={2}>
                <Typography>{item.Text1}</Typography>
              </Grid>
              <Grid item xs={4} md={2}>
                <Typography>{item.Text3}</Typography>
              </Grid>
              <Grid item xs={4} md={2}>
                <Typography dangerouslySetInnerHTML={{ __html: item.Text2 }}></Typography>
              </Grid>
              <Grid item xs={4} md={2}>
                <Typography>{item.Text6}</Typography>
              </Grid>
              <Grid item xs={4} md={1}>
                {
                  !item.IsSubmited && <SendIcon color={'primary'}  onClick={() => Submit(item.Id)} />
                }
              </Grid>
              <Grid item xs={2} md={1}>
                <EditIcon color={'success'} onClick={() => clickEdit(item.Id)} />
              </Grid>
              <Grid item xs={2} md={1}>
                <DeleteIcon  color={'error'} onClick={() => Delete(item.Id)} />
              </Grid>
            </Grid>
          </Card>

    </div>
  )
}

export default TabulerCard
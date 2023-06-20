import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { Card, Grid, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { toast } from 'react-toastify';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { getDeleteHomework, getDetailsList, getHomeworkListForEdit, getSubmitHomework, resetDeleteMessage } from 'src/requests/Teacher/RequestAddHomeWork';
import { IDeleteHomeworkBody, IGetDetailsListBody, IHomeworkListForEditBody, ISubmitHomeworkBody } from 'src/Interface/Teacher/IAddHomework';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
function TabulerCard({ clickEdit }) {

  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  const GetDelete: any = useSelector((state: RootState) => state.AddHomeWork.DeleteHomework);
  const GetSubmit: any = useSelector((state: RootState) => state.AddHomeWork.SubmitHomework);
  const GetHomeWorkDetailsList: any = useSelector((state: RootState) => state.AddHomeWork.DetailsList);
  const Delete = (Id) => {

    const GetDeleteHomeworkBody: IDeleteHomeworkBody = { Id: Id }
    dispatch(getDeleteHomework(GetDeleteHomeworkBody));
  }

  useEffect(() => {
    if (GetDelete !== '') {
      toast.success("Homework deleteded successfully", { toastId: 'success1' })
      dispatch(resetDeleteMessage());
    }
  }, [GetDelete])

  const Submit = (Id) => {
    const GetSubmitHomeworkBody: ISubmitHomeworkBody = { Id: Id }
    dispatch(getSubmitHomework(GetSubmitHomeworkBody));
  }

  useEffect(() => {
    if (GetSubmit !== '') {
      toast.success("Homework submitted successfully", { toastId: 'success1' })
      dispatch(resetDeleteMessage());
    }
  }, [GetSubmit])

  useEffect(() => {
    const GetDetailsListBody: IGetDetailsListBody = { Id: 0 }
    dispatch(getDetailsList(GetDetailsListBody));
  }, [])
  return (
    <div>
      {GetHomeWorkDetailsList.length == 0 ? <ErrorMessage  error={'No records found'}/> :
      
      <>
          {GetHomeWorkDetailsList.map((item, i) => (
        <div key={i}>
          <Card sx={{ mb: 1 }}  >
            <Grid container style={{ display: "flex", alignItems: "center" }}>
              <Grid item xs={2}>
                <Typography>{item.Text1}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>{item.Text3}</Typography>
              </Grid>
              <Grid item xs={2} >
                <Typography dangerouslySetInnerHTML={{ __html: item.Text2 }}></Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>{item.Text6}</Typography>
              </Grid>
              <Grid item xs={2} >
                {
                  !item.IsSubmited && <ArrowRightAltIcon onClick={() => Submit(item.Id)} />
                }
              </Grid>
              <Grid item xs={1}>
                <EditIcon onClick={() => clickEdit(item.Id)} />
              </Grid>
              <Grid item xs={1}>
                <DeleteIcon onClick={() => Delete(item.Id)} />
              </Grid>
            </Grid>
          </Card>
        </div>
      ))}
      
      
      
      
      </>}
  
    </div>
  )
}

export default TabulerCard
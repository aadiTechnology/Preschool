import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { Button, Card , Grid, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { toast } from 'react-toastify';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { getClassNameList, getAddHomework, getDetailsList, getDeleteHomework, getHomeworkListForEdit } from 'src/requests/Teacher/RequestTeacher';
import { IGetClassNameListBody, IGetAddHomeworkBody, IGetDetailsListBody, IDeleteHomeworkBody, IHomeworkListForEditBody } from 'src/Interface/Teacher/ITeacher';
function TabulerCard() {
    const dispatch = useDispatch();
    const GetDelete: any = useSelector(
        (state: RootState) => state.ClassNameList.DeleteHomework
    );


    const GetEditList: any = useSelector(
        (state: RootState) => state.ClassNameList.HomeworkListForEdit
    );

    const Delete = (Id) => {
        const GetDeleteHomeworkBody: IDeleteHomeworkBody =
        {
            TeacherId: Id
        }
        dispatch(getDeleteHomework(GetDeleteHomeworkBody));
    }

    const Edit = (Id) => {
        const GetHomeworkEditBody: IHomeworkListForEditBody =
        {
            HomeworkDetailsId: Id
        }
        dispatch(getHomeworkListForEdit(GetHomeworkEditBody));
    }

    useEffect(() => {
      toast.success(GetDelete)
  }, [GetDelete])
  
  
  return (
    <div>
     <Card>
       <Grid container>
        <Grid item xs={2}>
          <Typography>Subject</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Description</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Date</Typography>
        </Grid>
        <Grid item xs={2}>
        <ArrowRightAltIcon/>
        </Grid>
        <Grid item xs={1}>
       <EditIcon onClick={Edit}/>
        </Grid>
        <Grid item xs={1}>
       <DeleteIcon onClick={Delete}/>
        </Grid>
       </Grid>
     </Card>

     

    </div>
  )
}

export default TabulerCard
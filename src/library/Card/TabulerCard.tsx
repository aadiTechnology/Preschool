import React,{useEffect ,useState} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { Card , Grid, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { toast } from 'react-toastify';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { getDeleteHomework, getHomeworkListForEdit ,getSubmitHomework } from 'src/requests/Teacher/RequestTeacher';
import { IDeleteHomeworkBody, IHomeworkListForEditBody , ISubmitHomeworkBody } from 'src/Interface/Teacher/IAddHomework';
function TabulerCard({ homeWorkList}) {

  const [editing, setEditing] = useState(false);
    const dispatch = useDispatch();
    const GetDelete: any = useSelector(
        (state: RootState) => state.ClassNameList.DeleteHomework
    );

    const GetSubmit: any = useSelector(
      (state: RootState) => state.ClassNameList.SubmitHomework
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
      setEditing(true);
        const GetHomeworkEditBody: IHomeworkListForEditBody =
        {
            HomeworkDetailsId: Id
        }
        dispatch(getHomeworkListForEdit(GetHomeworkEditBody));
    }

    const Submit = (Id) => {
      const GetSubmitHomeworkBody: ISubmitHomeworkBody =
      {
          TeacherId: Id
      }
      dispatch(getSubmitHomework(GetSubmitHomeworkBody));
  }


    useEffect(() => {
      toast.success(GetDelete)
  }, [GetDelete])

    useEffect(() => {
    toast.success(GetSubmit)
   }, [GetSubmit])
  
 
  return (
    <div>
      {homeWorkList.map((item,i)=>(
        <div key={i}>  
        <Card sx={{mb:1 }}  >
         <Grid container  style={{display:"flex" ,alignItems:"center"}}>
        <Grid item xs={2}>
          <Typography>{item.Text1}</Typography>
        </Grid>
        <Grid item xs={2} >
      <Typography dangerouslySetInnerHTML={{ __html: item.Text2 }}></Typography>
      
        </Grid>
        <Grid item xs={2}>
          <Typography>{item.Text6}</Typography>
        </Grid>
        <Grid item xs={2} >
        <ArrowRightAltIcon onClick={()=>Submit(item.Id)}/>
        </Grid>
        <Grid item xs={1}>
       <EditIcon onClick={()=>Edit(item.Id)}/>
        </Grid>
        <Grid item xs={1}>
       <DeleteIcon onClick={()=>Delete(item.Id)}/>
        </Grid>
       </Grid>
      </Card>

        </div>
      ))}
    

     

    </div>
  )
}

export default TabulerCard
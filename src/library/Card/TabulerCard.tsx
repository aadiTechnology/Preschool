import React,{useEffect ,useState} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { Card , Grid, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { toast } from 'react-toastify';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { getDeleteHomework, getHomeworkListForEdit ,getSubmitHomework, resetMessage1 } from 'src/requests/Teacher/RequestAddHomeWork';
import { IDeleteHomeworkBody, IHomeworkListForEditBody , ISubmitHomeworkBody } from 'src/Interface/Teacher/IAddHomework';
function TabulerCard({ homeWorkList , onEdit, clickDelete}) {

  const [editing, setEditing] = useState(false);
    const dispatch = useDispatch();
    const GetDelete: any = useSelector(
        (state: RootState) => state.AddHomeWork.DeleteHomework
    );

    const GetSubmit: any = useSelector(
      (state: RootState) => state.AddHomeWork.SubmitHomework
  );


  

    const Delete = (Id) => {
        const GetDeleteHomeworkBody: IDeleteHomeworkBody =
        {
            Id: Id
        }
        dispatch(getDeleteHomework(GetDeleteHomeworkBody));
    }


 

    const Submit = (Id) => {
      const GetSubmitHomeworkBody: ISubmitHomeworkBody =
      {
          TeacherId: Id
      }
      dispatch(getSubmitHomework(GetSubmitHomeworkBody));
  }


    useEffect(() => {
      toast.success(GetDelete.Message,{ toastId: 'success1' })
      dispatch(resetMessage1());
      clickDelete();

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
       <EditIcon onClick={()=>onEdit(item.Id)}/>
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
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import {StudentFollowUpList ,DeleteFollowUpList ,resetDeleteFollowUpList} from 'src/requests/Admin/RequestAddStudentFollowUp'
import TabulerList from 'src/library/List/TabulerList';
import {IDeleteFollowUpListBody} from 'src/Interface/Admin/IAddStudentFollowUp'
import { toast } from 'react-toastify';
function FollowupStudentList({clickEdit}) {
    const dispatch = useDispatch();
    const navigate=useNavigate()
  
    const StudentFollowUp:any=useSelector(
        (state:RootState) => state.AddStudentFollowUp.FollowUpList
      );

      const DeleteStudentFollow:any=useSelector(
        (state:RootState) => state.AddStudentFollowUp.DeleteFollowUp
      );
      useEffect(()=>{
        dispatch(StudentFollowUpList())
      },[])

      useEffect(() => {
        if(DeleteStudentFollow!==""){
          toast.success(DeleteStudentFollow ,{ toastId: 'success1' })}
          dispatch(resetDeleteFollowUpList());
          dispatch(StudentFollowUpList())
        },
      [DeleteStudentFollow])
     
      
    
      
      const clickDelete=(Id)=>{
        if(confirm('Are You Sure you want to delete The List')){
          const DeleteFollowUpBody: IDeleteFollowUpListBody =
          { "Id": Id}
          dispatch(DeleteFollowUpList(DeleteFollowUpBody))
        }
        
      }


      const clickSubmit=(Id)=>{
       navigate('/extended-sidebar/Student/AdmissionConversion/' + Id)
      }

  
  return (
    <div>
        <TabulerList ItemList={StudentFollowUp} clickEdit={clickEdit} Submit={clickSubmit} Delete={clickDelete}/>
    </div>
  )
}

export default FollowupStudentList
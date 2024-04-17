import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { toast } from 'react-toastify';
import { getDeleteHomework, getDetailsList, getSubmitHomework, resetDeleteMessage, resetSubmitMessage } from 'src/requests/Teacher/RequestAddHomeWork';
import { IDeleteHomeworkBody, IGetDetailsListBody, ISubmitHomeworkBody } from 'src/Interface/Teacher/IAddHomework';
import TabulerList from 'src/library/List/TabulerList';
function AddHomeworkList({ clickEdit }) {
const dispatch = useDispatch();
  
  const GetDelete: any = useSelector((state: RootState) => state.AddHomeWork.DeleteHomework);
  const GetSubmit: any = useSelector((state: RootState) => state.AddHomeWork.SubmitHomework);
  const GetHomeWorkDetailsList: any = useSelector((state: RootState) => state.AddHomeWork.DetailsList);
  const Delete = (Id) => {
    if(confirm('Are you sure you want to delete homework?')){
      const GetDeleteHomeworkBody: IDeleteHomeworkBody = { Id: Id }
      dispatch(getDeleteHomework(GetDeleteHomeworkBody));
    }
   }

  useEffect(() => {
    if (GetDelete !== '') {
      toast.success(GetDelete, { toastId: 'success1' })
      dispatch(resetDeleteMessage());
    }
  }, [GetDelete])

  const Submit = (Id) => {
    if(confirm('Are you sure you want to submit the homework?')){
      const GetSubmitHomeworkBody: ISubmitHomeworkBody = { Id: Id }
      dispatch(getSubmitHomework(GetSubmitHomeworkBody));
    }
   
  }

  useEffect(() => {
    if (GetSubmit !== '') {
      toast.success(GetSubmit, { toastId: 'success1' })
      dispatch(resetSubmitMessage());
    }
  }, [GetSubmit])

  useEffect(() => {
    const GetDetailsListBody: IGetDetailsListBody = { ClassDivisionId: Number(sessionStorage.getItem("ClassDivisionId")) }
    dispatch(getDetailsList(GetDetailsListBody));
  }, [])
  return (
    <div>
  <TabulerList ItemList={GetHomeWorkDetailsList} clickEdit={clickEdit} Submit={Submit} Delete={Delete}/>
   </div>
  )
}

export default AddHomeworkList
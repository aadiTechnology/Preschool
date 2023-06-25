import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { toast } from 'react-toastify';
import { getDeleteHomework, getDetailsList, getHomeworkListForEdit, getSubmitHomework, resetDeleteMessage } from 'src/requests/Teacher/RequestAddHomeWork';
import { IDeleteHomeworkBody, IGetDetailsListBody, IHomeworkListForEditBody, ISubmitHomeworkBody } from 'src/Interface/Teacher/IAddHomework';
import ErrorMessage from 'src/library/ErrorMessage/ErrorMessage';
import TabulerCard from 'src/library/Card/TabulerCard';
function AddHomeworkList({ clickEdit }) {
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
      <TabulerCard item={item} Delete={Delete} clickEdit={clickEdit} Submit={Submit}/>
        </div>
      ))}
      </>}
   </div>
  )
}

export default AddHomeworkList
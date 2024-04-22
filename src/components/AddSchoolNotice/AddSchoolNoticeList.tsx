import React, { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { toast } from 'react-toastify';
import { getSchoolNoticeList, getSendnotice, resetSendMessage,resetDeleteMessage,getDeleteSchoolNotice } from 'src/requests/AddSchoolNotice/RequestAddSchoolNotice'
import { IGetSchoolNoticeListBody, ISendNoticeBody,IDeleteSchoolNoticeBody } from 'src/Interface/AddSchoolNotice/IAddSchoolNotice';
import TabulerList from 'src/library/List/TabulerList';


function AddSchoolNoticeList({ clickEdit }) {
  const dispatch = useDispatch();


  const DeleteSchoolNotice: any = useSelector((state: RootState) => state.AddSchoolNotice.DeleteSchoolNotice);
  console.log(" DeleteSchoolNotice", DeleteSchoolNotice)
  const GetSend: any = useSelector((state: RootState) => state.AddSchoolNotice.sendNotice);
  const SchoolNoticeList: any = useSelector((state: RootState) => state.AddSchoolNotice.SchoolNoticeList);
  console.log("SchoolNoticeList", SchoolNoticeList)


  const ClickDelete = (Id) => {
    if(confirm('Are you sure you want to delete SchoolNotice?')){
      toast.success ("Deleted School Notice" ,{ toastId: 'success1' })
      const GetDeleteSchoolNoticeBody: IDeleteSchoolNoticeBody = { Id: Id }
      dispatch(getDeleteSchoolNotice(GetDeleteSchoolNoticeBody));
    }
   }

  useEffect(() => {
    if ( DeleteSchoolNotice !== '') {
      toast.success ( DeleteSchoolNotice,{ toastId: 'success1' })
      dispatch(resetDeleteMessage());
    }
  }, [ DeleteSchoolNotice])

  const Send = (Id) => {
    if (confirm('Are you sure you want to Send the Notice?')) {
      const GetSendNoticeBody: ISendNoticeBody = { Id: Id }
      dispatch(getSendnotice(GetSendNoticeBody));
    }

  }

  useEffect(() => {
    if (GetSend !== '') {
      toast.success(GetSend, { toastId: 'success1' })
      dispatch(resetSendMessage());
    }
  }, [GetSend])

  
  
  
  useEffect(() => {
    const GetSchoolNoticeListBody: IGetSchoolNoticeListBody = { ClassId: Number(sessionStorage.getItem("ClassId")) }
    dispatch(getSchoolNoticeList(GetSchoolNoticeListBody));
  }, [])
  
  return (
    <div>
      <TabulerList ItemList={SchoolNoticeList} clickEdit={clickEdit} Submit={Send} Delete={ClickDelete} />

    </div>
  )
}

export default AddSchoolNoticeList
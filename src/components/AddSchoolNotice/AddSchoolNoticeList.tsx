import React, { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { toast } from 'react-toastify';
import { DeleteSchoolNoticeDetails, getSchoolNoticeList, resetDeleteSchoolNoticeMsg } from 'src/requests/SchoolNotice1/RequestSchoolNotice';

import {  getSendnotice, resetSendMessage,resetDeleteMessage,getDeleteSchoolNotice } from 'src/requests/AddSchoolNotice/RequestAddSchoolNotice'
import { IGetSchoolNoticeListBody, ISendNoticeBody,IDeleteSchoolNoticeBody } from 'src/Interface/AddSchoolNotice/IAddSchoolNotice';
import TabulerList from 'src/library/List/TabulerList';
import { IGetSchoolNoticeDetails } from 'src/Interface/SchoolNotice/ISchoolNotice';
import { useNavigate } from 'react-router';


function AddSchoolNoticeList({SchoolNotice}) {
  const dispatch = useDispatch();
const navigate = useNavigate();

  const DeleteSchoolNotice: any = useSelector((state: RootState) => state.SchoolNotice.deleteSchoolNoticeDetailsMsg);
  console.log(" DeleteSchoolNotice", DeleteSchoolNotice)
  const GetSend: any = useSelector((state: RootState) => state.AddSchoolNotice.sendNotice);
  const SchoolNoticeList = useSelector((state: RootState) => state.SchoolNotice.SchoolNoticeList)
  console.log("SchoolNoticeList", SchoolNoticeList)


  const ClickDelete = (Id) => {
    if(confirm('Are you sure you want to delete SchoolNotice?')){
      toast.success ("Deleted School Notice" ,{ toastId: 'success1' })
      const GetDeleteSchoolNoticeBody: IGetSchoolNoticeDetails = { ID: Id }
      dispatch(DeleteSchoolNoticeDetails(GetDeleteSchoolNoticeBody));
    }
   }

  useEffect(() => {
    if ( DeleteSchoolNotice !== '') {
      toast.success ( DeleteSchoolNotice,{ toastId: 'success1' })
      dispatch(resetDeleteSchoolNoticeMsg());
      dispatch(getSchoolNoticeList());
    }
  }, [ DeleteSchoolNotice])




  
  
  
  useEffect(() => {
   dispatch(getSchoolNoticeList())
  }, [dispatch])

const clickEdit = (Id) =>{
  window.scrollTo(0, 0);
  SchoolNotice(Id)
}
  return (
    <div>
      <TabulerList ItemList={SchoolNoticeList} clickEdit={clickEdit}  Delete={ClickDelete} />

    </div>
  )
}

export default AddSchoolNoticeList
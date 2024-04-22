import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import {GetAdmissionDetail} from 'src/requests/Admin/RequestAdmissionConversion'
import { IGetAdmissionDetailsBody} from 'src/Interface/Admin/IAdmissionConversion'
import TabulerList from 'src/library/List/TabulerList';
function AdmissionConversionList({clickEdit}) {
    const dispatch = useDispatch();
    const AdmissionDetailList: any = useSelector(
        (state: RootState) => state.AddAdmissionConversion.AdmissionDetail
      );

     const AdmissionDetailBody:IGetAdmissionDetailsBody={
        Id:2
        }
       useEffect(() => {
        dispatch(GetAdmissionDetail(AdmissionDetailBody))
       }, [])

       const Submit = () => {

       }
   
       const Delete = () => {
   
       }
  return (
    <div>
       <TabulerList ItemList={AdmissionDetailList} clickEdit={clickEdit} Submit={Submit} Delete={Delete}/>  
    </div>
  )
}

export default AdmissionConversionList
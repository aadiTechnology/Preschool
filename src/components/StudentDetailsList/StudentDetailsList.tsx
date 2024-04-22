import React from 'react'

import  { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'src/store';

import { IGetStudentDetailsListBody,IDeleteStudentDetailsBody,IGetStudentDetailsListResult} from 'src/Interface/AddStudentDetails/IAddStudentDetails';
import { GetStudentDetailsList,DeleteStudentDetails } from 'src/requests/AddStudentDetails/RequestAddStudentDetails';

const StudentDetailsList = () => {
  const dispatch = useDispatch();
  const StudentDetailsList = useSelector(
    (state: RootState) => state.AddStudentDetail.GetStudentDetailsList
  );
  console.log(StudentDetailsList, "StudentDetailsList")

  const DeleteStudentDetail: any = useSelector(
    (state: RootState) => state.AddStudentDetail.DeleteStudentDetails
  );
  console.log(DeleteStudentDetail, "DeleteStudentDetail")



  const GetStudentDetailsListBody:IGetStudentDetailsListBody=
  {
    
    "EnquiryAdmissionDetails":0,
    "ClassId": 1

    
  }
  const DeleteStudentDetailsBody:IDeleteStudentDetailsBody=
   {
      "Id": 149
    }

  useEffect(()=>{
    dispatch(GetStudentDetailsList(GetStudentDetailsListBody));
  },[]);
  useEffect(()=>{
    dispatch(DeleteStudentDetails(DeleteStudentDetailsBody));
  },[]);
  
  return (
    <div>
      Student Details List
    </div>
  )
}



export default StudentDetailsList

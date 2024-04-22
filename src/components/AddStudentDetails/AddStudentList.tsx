import React, { useState, useEffect } from 'react'
import { RootState, } from 'src/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {getStudentEnquiryList,DeleteStudentDetails,resetStudentDelete} from 'src/requests/Student/AddStudentDetails/RequestAddStudentDetails';
import {IDeleteStudentBody } from 'src/Interface/Student/IAddStudentDetails';
import TabulerList from 'src/library/List/TabulerList';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
function AddStudentList({ clickEdit }) {
    const dispatch = useDispatch();
    const navigate=useNavigate()
     const GetStudentEnquiryList: any = useSelector(
        (state: RootState) => state.AddStudentDetails.StudentEnquiry
    );

    const StudentDetailDelete: any = useSelector(
        (state: RootState) => state.AddStudentDetails.DeleteStudent
    );
  
    useEffect(() => {
    dispatch(getStudentEnquiryList());
    }, [])

    const Submit = (Id) => {
        console.log(Id ,"Id")
      navigate('FollowUp/' + Id)
   }

   const Submit1 = (Id) => {
    console.log(Id ,"Id")
    navigate('/extended-sidebar/Student/AdmissionConversion/' + Id)
}

   useEffect(() => {
    if (StudentDetailDelete !== '') {
     toast.success(StudentDetailDelete, { toastId: 'success1' })
    dispatch(resetStudentDelete());
    dispatch(getStudentEnquiryList());
    }
   }, [StudentDetailDelete])

    const Delete = (Id) => {
        if(confirm('Are you sure you want to delete enquiry')){
            const DeleteStudentDetailsBody: IDeleteStudentBody =
            { "Id": Id, }
            dispatch(DeleteStudentDetails(DeleteStudentDetailsBody))
        }

    }
    return (
        <div>
        <TabulerList ItemList={GetStudentEnquiryList} clickEdit={clickEdit} Submit={Submit} Delete={Delete} Submit1={Submit1}/>
        </div>
    )
}

export default AddStudentList
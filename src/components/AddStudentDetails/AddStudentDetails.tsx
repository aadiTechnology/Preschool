import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import {IGetAddStudentDetailsBody} from "src/Interface/Student/IAddStudentDetails"
import {GetAddStudentDetails} from "src/requests/Student/AddStudentDetails/RequestAddStudentDetails"

function AddStudentDetails() {
    const dispatch = useDispatch();
    const GetAddStudent: any = useSelector(
        (state: RootState) => state.AddStudentDetails.AddStudentDetails
      );

      console.log(GetAddStudent ,"GetAddStudent")

      const GetAddStudentDetailsBody: IGetAddStudentDetailsBody =
      {
        
    "ClassId": 1,
    "StudentName":"bhavesh",
    "BirthDate":"2019/10/19",
    "Age":3,
    "FatherName":"Arun",
    "PhoneNo":"7894561230",
    "MotherName":"rajshwaree",
    "PhoneNo2":"9876543210",
    "SocietyName":"dange chouk",
    "StudentAddress":"Pune",
    "emailid":"lokesh70@gmail.com",
    "SMS":"true",
    "UserId":1
      }

      useEffect(() => {
        dispatch(GetAddStudentDetails(GetAddStudentDetailsBody));
      }, [])

  return (
    <div>
        <PageHeader heading={'AddStudent Details'}/>
    </div>
  )
}

export default AddStudentDetails
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import {StudentFollowUpList} from 'src/requests/Admin/RequestAddStudentFollowUp'
import TabulerList from 'src/library/List/TabulerList';

function FollowupStudentList({clickEdit}) {
    const dispatch = useDispatch();
    const navigate=useNavigate()
    // const { Id } = useParams();
    const StudentFollowUp:any=useSelector(
        (state:RootState) => state.AddStudentFollowUp.FollowUpList
      );
      useEffect(()=>{
        dispatch(StudentFollowUpList())
      },[])
      console.log(StudentFollowUp,'StudentFollowUp')

      const clickDelete=()=>{

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
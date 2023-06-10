import React, { useState, useEffect } from 'react'
import BackButton from 'src/library/BackButton/BackButton'
import PageHeader from 'src/library/heading/pageHeader'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import {  GetViewHomework} from 'src/requests/Student/Homework/RequestHomework'
import { IGetViewHomeWorkListBody } from 'src/Interface/Student/IHomework';
import { Typography ,Card} from '@mui/material';

function ViewHomework() {
  const dispatch = useDispatch();
  const ViewHomework: any = useSelector(
    (state: RootState) => state.HomeWork.ViewHomework
  );

  console.log(ViewHomework ,"ViewHomework")
  const GetViewHomeworkBody: IGetViewHomeWorkListBody =
  {
    "AssignDate": "08/06/2023"
  }
  useEffect(() => {
    dispatch(GetViewHomework(GetViewHomeworkBody));
  }, [])
  return (
    <div>
      <PageHeader heading={'View Homework'} />
      <BackButton  FromRoute={'/Student/Homework'}/>
      {ViewHomework.map((item,i)=>(
        <div key={i}>
             <Card>
             <Typography>{item.SubjectDescription}</Typography>
        <Typography>{item.AssignDate}</Typography>
      </Card>
           </div>
      ))}
   
    </div>
  )
}
export default ViewHomework
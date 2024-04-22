import React, { useState, useEffect } from 'react'
import BackButton from 'src/library/BackButton/BackButton'
import PageHeader from 'src/library/heading/pageHeader'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import {  GetViewHomework} from 'src/requests/Student/Homework/RequestHomework'
import { IGetViewHomeWorkListBody } from 'src/Interface/Student/IHomework';
import { Typography ,Card, Container} from '@mui/material';
import { useParams } from 'react-router';
import { getDateFormatted } from '../Common/util';

function ViewHomework() {
  const dispatch = useDispatch();
  const ViewHomework: any = useSelector(
    (state: RootState) => state.HomeWork.ViewHomework
  );
  const { Id } = useParams();
  console.log(ViewHomework ,"ViewHomework")
  const GetViewHomeworkBody: IGetViewHomeWorkListBody =
  {
    Id: parseInt(Id)
  }
  useEffect(() => {
    dispatch(GetViewHomework(GetViewHomeworkBody));
  }, [])
  return (
    <Container>
      <PageHeader heading={'View Homework'} />
      <BackButton  FromRoute={'/Student/Homework'}/>
      {ViewHomework.map((item,i)=>(
        <div key={i}>
             <Card>
        <Typography dangerouslySetInnerHTML={{ __html: item.SubjectDescription }} mt={-2}></Typography>
        <Typography mt={-1.5}>{getDateFormatted(item.AssignDate)}</Typography>
      {item.Attachment!=="" &&
        <a target="_blank" rel="noreferrer" href={'/documents/'+item.Attachment}>Attachment</a>
      }
      </Card>
           </div>
      ))}
   
    </Container>
  )
}
export default ViewHomework
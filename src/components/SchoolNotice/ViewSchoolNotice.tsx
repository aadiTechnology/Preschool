import React, { useState, useEffect } from 'react'
import BackButton from 'src/library/BackButton/BackButton'
import PageHeader from 'src/library/heading/pageHeader'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import { GetViewSchoolNotice } from 'src/requests/SchoolNotice/RequestSchoolNotice'
import { IGetViewSchoolNoticeListBody } from 'src/Interface/Student/ISchoolNotice';
import { Typography, Card, Container } from '@mui/material';
import { useParams } from 'react-router';
import { getDateFormatted } from '../Common/util';
import axios from 'axios';
//import fileDownload from 'js-file-download'
//import MyPDF from '../path/to/file.pdf';




const ViewSchoolNotice = () => {
  const dispatch = useDispatch();
  const [File, setFile] = useState('')
  const ViewNotice: any = useSelector(
    (state: RootState) => state.ViewSchoolNotice.ViewNotice
  );
  const { Id } = useParams();
  console.log(ViewNotice, "ViewNotice")
  const GetViewSchoolNoticeBody: IGetViewSchoolNoticeListBody =
  {
    Id: parseInt(Id)
  }
  useEffect(() => {
    dispatch(GetViewSchoolNotice(GetViewSchoolNoticeBody));
  }, [])
  
  
  return (
    <Container>
      <PageHeader heading={'View Notice'} />
      <BackButton FromRoute={'/Student/SchoolNotice'} />
      {ViewNotice.map((item, i) => (
        <div key={i}>
          <Card>
            <Typography dangerouslySetInnerHTML={{ __html: item.NoticeDescription }} mt={-2}></Typography>
            <Typography mt={-1.5}>{getDateFormatted(item.AssignDate)}</Typography>
            {item.Attachment !== "" &&
              <a target="_blank" rel="noreferrer" href={'/documents/' + item.Attachment} >Attachment</a>
            }
          </Card>
        </div>
      ))}

    </Container>
  )
}

export default ViewSchoolNotice

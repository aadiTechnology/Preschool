import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import{IAdmissionConversionBody,IAdmissionConversionResult} from 'src/Interface/Admin/IAdmissionConversion'
import {AdmissionConversion} from 'src/requests/Admin/RequestAdmissionConversion'
import { Container } from '@mui/material';

function AdmisssionConversion () {

    const dispatch = useDispatch();

    const AddAdmissionConversion: any = useSelector(
        (state: RootState) => state.AddAdmissionConversion.AdmissionConversion
      );
    
      console.log(AddAdmissionConversion ,'AddAdmissionConversion')

      const AddAdmissionConversionBody:IAdmissionConversionBody={
        
            ClassId: 2,
            StudentName:"rupesh",
            FatherName:"ramesh",
            PhoneNo:"1234",
            MotherName :"rani",
            PhoneNo1:"12345",
            emailid:"e@gmauil.com",
            BirthDate:"6/20/2023",
            Address:"pune",
            Sms:true,
            Attachment:"yes",
            UserId:3
      }

        useEffect(() => {
            dispatch(AdmissionConversion(AddAdmissionConversionBody));
            
           },[])

      

  return (
    <Container>
        <PageHeader heading={'Admission Conversion'} />
    </Container>
  )
}

export default AdmisssionConversion
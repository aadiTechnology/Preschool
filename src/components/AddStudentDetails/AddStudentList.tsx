import React, { useState, useEffect } from 'react'
import { RootState, } from 'src/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAdmissionDetails ,getStudentEnquiryList} from 'src/requests/Student/AddStudentDetails/RequestAddStudentDetails';
import { IGetAdmissionDetailsBody } from 'src/Interface/Student/IAddStudentDetails';
import TabulerList from 'src/library/List/TabulerList';
function AddStudentList({ clickEdit }) {
    const dispatch = useDispatch();
    const GetAdmissionDetails: any = useSelector(
        (state: RootState) => state.AddStudentDetails.AdmissionDetails
    );
    const GetStudentEnquiryList: any = useSelector(
        (state: RootState) => state.AddStudentDetails.StudentEnquiry
    );
    const GetAdmissionDetailsBody: IGetAdmissionDetailsBody =
        { "Id": 1, }
    useEffect(() => {
        dispatch(getStudentEnquiryList());
    }, [])

    const Submit = () => {

    }

    const Delete = () => {

    }
    return (
        <div>
        <TabulerList ItemList={GetStudentEnquiryList} clickEdit={clickEdit} Submit={Submit} Delete={Delete}/>
        </div>
    )
}

export default AddStudentList
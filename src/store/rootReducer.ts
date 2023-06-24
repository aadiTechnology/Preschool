import { combineReducers } from '@reduxjs/toolkit';

import Holidaysslice from "../requests/Student/Holidays"
import SchoolListslice from 'src/requests/Student/SchoolList/SchoolList';
import ChangePasswordslice from 'src/requests/ChangePassword/ChangePassword'
import Homeworkslice from 'src/requests/Student/Homework/RequestHomework'
import Viewphotoslice from 'src/requests/Student/Viewphoto/RequestViewphoto'
import AddHomeWorkSlice from 'src/requests/Teacher/RequestAddHomeWork';
import AddPhotoSlice from 'src/requests/Admin/RequestAddPhoto';
import AddStudentDetailsslice from 'src/requests/Student/AddStudentDetails/RequestAddStudentDetails';
import UserLoginSlice, { UserLogin } from 'src/requests/Admin/RequestUserLogin'
import AdmissionConversionSlice from 'src/requests/Admin/RequestAdmissionConversion'
const rootReducer = combineReducers({
    Holidays:Holidaysslice,
    SchoolList: SchoolListslice,
    ChangePassword:ChangePasswordslice,
    AddHomeWork: AddHomeWorkSlice,
    HomeWork: Homeworkslice,
    Viewphoto: Viewphotoslice,
    AddPhoto:AddPhotoSlice,
    UserLogin:UserLoginSlice,
    AddStudentDetails :AddStudentDetailsslice,
    AddAdmissionConversion:AdmissionConversionSlice
    
});

export default rootReducer;

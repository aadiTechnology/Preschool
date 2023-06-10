import { combineReducers } from '@reduxjs/toolkit';

import Holidaysslice from "../requests/Student/Holidays"
import SchoolListslice from 'src/requests/Student/SchoolList/SchoolList';
import ChangePasswordslice from 'src/requests/ChangePassword/ChangePassword'
import Homeworkslice from 'src/requests/Student/Homework/RequestHomework'
import Viewphotoslice from 'src/requests/Student/Viewphoto/RequestViewphoto'
import AddHomeWorkSlice from 'src/requests/Teacher/RequestAddHomeWork';
const rootReducer = combineReducers({
    Holidays:Holidaysslice,
    SchoolList: SchoolListslice,
    ChangePassword:ChangePasswordslice,
    AddHomeWork: AddHomeWorkSlice,
    HomeWork: Homeworkslice,
    Viewphoto: Viewphotoslice
});

export default rootReducer;

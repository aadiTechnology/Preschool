import { combineReducers } from '@reduxjs/toolkit';

import Holidaysslice from "../requests/Student/Holidays"
import SchoolListslice from 'src/requests/Student/SchoolList/SchoolList';
import ChangePasswordslice from 'src/requests/ChangePassword/ChangePassword'
import HomeWorkslice from 'src/requests/Student/AddHomeWork/AddHomeWork';
import ClassNameListSlice from 'src/requests/Teacher/RequestTeacher';
const rootReducer = combineReducers({
    Holidays:Holidaysslice,
    SchoolList: SchoolListslice,
    ChangePassword:ChangePasswordslice,
    AddHomeWork:HomeWorkslice,
    ClassNameList: ClassNameListSlice
});

export default rootReducer;

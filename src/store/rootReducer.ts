import { combineReducers } from '@reduxjs/toolkit';

import Holidaysslice from "../requests/Student/Holidays"
import SchoolListslice from 'src/requests/Student/SchoolList/SchoolList';
import ChangePasswordslice from 'src/requests/ChangePassword/ChangePassword'
const rootReducer = combineReducers({
    Holidays:Holidaysslice,
    SchoolList: SchoolListslice,
    ChangePassword:ChangePasswordslice
});

export default rootReducer;

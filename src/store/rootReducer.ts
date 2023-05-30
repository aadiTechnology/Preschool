import { combineReducers } from '@reduxjs/toolkit';

import Holidaysslice from "../requests/Student/Holidays"
import SchoolListslice from 'src/requests/Student/SchoolList/SchoolList';

const rootReducer = combineReducers({
    Holidays:Holidaysslice,
    SchoolList: SchoolListslice,
});

export default rootReducer;

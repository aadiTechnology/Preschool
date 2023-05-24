import { combineReducers } from '@reduxjs/toolkit';

import Holidaysslice from "../Slice/Student/Holidays"

const rootReducer = combineReducers({
    Holidays:Holidaysslice
});

export default rootReducer;

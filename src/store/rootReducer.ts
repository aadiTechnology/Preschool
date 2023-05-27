import { combineReducers } from '@reduxjs/toolkit';

import Holidaysslice from "../requests/Student/Holidays"

const rootReducer = combineReducers({
    Holidays:Holidaysslice
});

export default rootReducer;

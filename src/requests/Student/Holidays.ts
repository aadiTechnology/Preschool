import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import HolidaysApi from "../../api/Student/holidays";
import IHolidays from"../../Interface/holidays"
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'src/store';



const Holidaysslice = createSlice({
  name: 'holidays',
  initialState:{
    HolidaysData:[]
  },
  reducers: {
    getHolidays(state,action){
      state.HolidaysData=action.payload;
      alert("SLice Reducer Method:"+ JSON.stringify(state.HolidaysData))
    }
  }   
});


export const getHolidays =
  (data:any): AppThunk =>
  async (dispatch) => {
    const response = await HolidaysApi.GetHolidayList(data);
    dispatch(Holidaysslice.actions.getHolidays(response.data));
    alert("Async Mehtod :"+ JSON.stringify(response.data));
  };


export default Holidaysslice.reducer

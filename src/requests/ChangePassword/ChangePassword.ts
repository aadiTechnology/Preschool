import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'src/store';
import {IChangePasswordBody} from 'src/Interface/ChangePassword';
import ChangePasswordApi from 'src/api/Student/ChangePassword'

const ChangePasswordslice = createSlice({
  name: 'SchoolList',
  initialState:{
    ChangePassword:{},
   
  },
  reducers: {
    getChangePassword(state,action){
      state.ChangePassword=action.payload;
    },
  }   
});


export const getChangePassword =
  (data:IChangePasswordBody): AppThunk =>
  async (dispatch) => {
    const response = await ChangePasswordApi.GetChangePassword(data);
    dispatch(ChangePasswordslice.actions.getChangePassword(response));
  };



export default ChangePasswordslice.reducer

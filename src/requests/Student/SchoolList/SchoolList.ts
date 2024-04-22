import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'src/store';
import {ISchoolListBody} from 'src/Interface/SchoolList';
import SchoolListApi from 'src/api/Student/SchoolList'

const SchoolListslice = createSlice({
  name: 'SchoolList',
  initialState:{
    SchoolList:[],
   
  },
  reducers: {
    getSchoolList(state,action){
      state.SchoolList=action.payload;
    },
  }   
});


export const getSchoolList =
  (data:ISchoolListBody): AppThunk =>
  async (dispatch) => {
    const response = await SchoolListApi.GetAllSchoolsList(data);
    let responseData = [];
    responseData = response.data.GetAllSchoolsResult?.map((item,i)=>{
      return {
        Id: i,
        Name: item.SchoolName,
        Value: item.SchoolId
      }

    })
    dispatch(SchoolListslice.actions.getSchoolList(responseData));
  };



export default SchoolListslice.reducer

import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'src/store';
import {IGetClassNameListBody} from 'src/Interface/Teacher/ITeacher';
import GetClassForTeacherApi from 'src/api/Teacher/ApiTeacher'

const ClassNameListSlice = createSlice({
  name: 'ClassNameList',
  initialState:{
    ClassNameList:[],
   
  },
  reducers: {
    getClassNameList(state,action){
      state.ClassNameList=action.payload;
    },
  }   
});


export const getClassNameList =
  (data:IGetClassNameListBody): AppThunk =>
  async (dispatch) => {
    const response = await GetClassForTeacherApi. GetClassForTeacher(data);
    let a = response.data.map((item, i) => {
        return {
            Id: i,
            Name: item.ClassName,
            AssignedDate: item.ClassId,
        }
      })
    console.log("response",response)
   
    dispatch(ClassNameListSlice.actions.getClassNameList(a));
  };



export default ClassNameListSlice.reducer

import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'src/store';
import {IGetClassNameListBody ,IGetDescriptionBody} from 'src/Interface/Teacher/ITeacher';
import GetClassForTeacherApi from 'src/api/Teacher/ApiTeacher'

const ClassNameListSlice = createSlice({
  name: 'ClassNameList',
  initialState:{
    ClassNameList:[],
    Description:{}
   
  },
  reducers: {
    getClassNameList(state,action){
      state.ClassNameList=action.payload;
    },
    getDescription(state,action){
      state.Description=action.payload;
    },
    resetMessage(state) {
      state.Description = {};
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
     dispatch(ClassNameListSlice.actions.getClassNameList(a));
  };


  export const getDescription =
  (data:IGetDescriptionBody): AppThunk =>
  async (dispatch) => {
    const response = await GetClassForTeacherApi.GetDescription(data);
    dispatch(ClassNameListSlice.actions.getDescription(response.data));
  };

  export const resetMessage =
  (): AppThunk =>
    async (dispatch) => {
      dispatch(ClassNameListSlice.actions.resetMessage());
    }



export default ClassNameListSlice.reducer

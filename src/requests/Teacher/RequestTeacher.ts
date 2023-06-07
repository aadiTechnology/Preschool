import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'src/store';
import {IGetClassNameListBody ,IGetAddHomeworkBody ,IGetDetailsListBody ,IDeleteHomeworkBody ,IHomeworkListForEditBody} from 'src/Interface/Teacher/ITeacher';
import GetClassForTeacherApi from 'src/api/Teacher/ApiTeacher'

const ClassNameListSlice = createSlice({
  name: 'ClassNameList',
  initialState:{
    ClassNameList:[],
    AddHomework:{},
    DetailsList:[],
    DeleteHomework:{},
    HomeworkListForEdit:{}
   
  },
  reducers: {
    getClassNameList(state,action){
      state.ClassNameList=action.payload;
    },
    getAddHomework(state,action){
      state.AddHomework=action.payload;
    },

    getDetailsList(state,action){
      state.DetailsList=action.payload;
    },
    getDeleteHomework(state,action){
      state.DeleteHomework=action.payload;
    },
    getHomeworkListForEdit(state,action){
      state.HomeworkListForEdit=action.payload;
    },
    resetMessage(state) {
      state.AddHomework = {};
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


  export const getAddHomework =
  (data:IGetAddHomeworkBody): AppThunk =>
  async (dispatch) => {
    const response = await GetClassForTeacherApi.GetAddHomework(data);
    dispatch(ClassNameListSlice.actions.getAddHomework(response.data));
  };

  
  export const getDeleteHomework =
  (data:IDeleteHomeworkBody): AppThunk =>
  async (dispatch) => {
    const response = await GetClassForTeacherApi.GetDeleteHomework(data);
    dispatch(ClassNameListSlice.actions.getDeleteHomework(response.data));
  };

  export const getHomeworkListForEdit =
  (data:IHomeworkListForEditBody): AppThunk =>
  async (dispatch) => {
    const response = await GetClassForTeacherApi.GetHomeworkListForEdit(data);
    dispatch(ClassNameListSlice.actions.getHomeworkListForEdit(response.data));
  };

  export const getDetailsList =
  (data:IGetDetailsListBody): AppThunk =>
  async (dispatch) => {
    const response = await GetClassForTeacherApi. GetDetailsList(data);
   let DeleteList = response.data.map((item,i)=>{
    return {
         Id:item.Id,
         Text1:item.SubjectName,
         Text2 : item.SubjectDescription,
         Text3 : item.SubjectName,
         Text4 : item.Attachment,
         Text5 : item.Camera,
         Text6 : item.AssignDate
    }
   })

    dispatch(ClassNameListSlice.actions.getDetailsList(DeleteList));
  };

  export const resetMessage =
  (): AppThunk =>
    async (dispatch) => {
      dispatch(ClassNameListSlice.actions.resetMessage());
    }



export default ClassNameListSlice.reducer

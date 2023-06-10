import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'src/store';
import {IGetClassNameListBody ,IGetAddHomeworkBody , ISubmitHomeworkBody,IGetDetailsListBody ,IDeleteHomeworkBody ,IHomeworkListForEditBody} from 'src/Interface/Teacher/IAddHomework';
import GetClassForTeacherApi from 'src/api/Teacher/ApiAddHomeWork'

const AddHomeWorkSlice = createSlice({
  name: 'AddHomeWork',
  initialState:{
    ClassNameList:[],
    AddHomework:{},
    DetailsList:[],
    DeleteHomework:{},
    SubmitHomework:{},
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

    getSubmitHomework(state,action){
      state.SubmitHomework=action.payload;
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
     dispatch(AddHomeWorkSlice.actions.getClassNameList(a));
  };


  export const getAddHomework =
  (data:IGetAddHomeworkBody): AppThunk =>
  async (dispatch) => {
    const response = await GetClassForTeacherApi.GetAddHomework(data);
    dispatch(AddHomeWorkSlice.actions.getAddHomework(response.data));
  };

  
  export const getDeleteHomework =
  (data:IDeleteHomeworkBody): AppThunk =>
  async (dispatch) => {
    const response = await GetClassForTeacherApi.GetDeleteHomework(data);
    dispatch(AddHomeWorkSlice.actions.getDeleteHomework(response.data));
  };

  export const getSubmitHomework =
  (data:ISubmitHomeworkBody): AppThunk =>
  async (dispatch) => {
    const response = await GetClassForTeacherApi.GetSubmitHomework(data);
    dispatch(AddHomeWorkSlice.actions.getSubmitHomework(response.data));
  };

  export const getHomeworkListForEdit =
  (data:IHomeworkListForEditBody): AppThunk =>
  async (dispatch) => {
    const response = await GetClassForTeacherApi.GetHomeworkListForEdit(data);
    dispatch(AddHomeWorkSlice.actions.getHomeworkListForEdit(response.data));
  };

  export const getDetailsList =
  (data:IGetDetailsListBody): AppThunk =>
  async (dispatch) => {
    const response = await GetClassForTeacherApi. GetDetailsList(data);
   let DeleteList = response.data.map((item,i)=>{
    return {
         Id:item.Id,
         Text1:  item.Class,
         Text2 : item.SubjectDescription,
         Text3 : item.SubjectName,
         Text4 : item.Attachment,
         Text5 : item.Camera,
         Text6 : item.AssignDate
    }
   })

    dispatch(AddHomeWorkSlice.actions.getDetailsList(DeleteList));
  };

  export const resetMessage =
  (): AppThunk =>
    async (dispatch) => {
      dispatch(AddHomeWorkSlice.actions.resetMessage());
    }



export default AddHomeWorkSlice.reducer

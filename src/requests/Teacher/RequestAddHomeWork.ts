import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'src/store';
import {IGetClassNameListBody ,IGetAddHomeworkBody , IGetSubjectNameBody,ISubmitHomeworkBody,IGetDetailsListBody ,IDeleteHomeworkBody ,IHomeworkListForEditBody} from 'src/Interface/Teacher/IAddHomework';
import GetClassForTeacherApi from 'src/api/Teacher/ApiAddHomeWork'
import { getDateFormatted } from 'src/components/Common/util';

const AddHomeWorkSlice = createSlice({
  name: 'AddHomeWork',
  initialState:{
    ClassNameList:[],
    SubjectList:[],
    AddHomework:'',
    DetailsList:[],
    DeleteHomework:'',
    SubmitHomework:'',
    HomeworkListForEdit:null,
    Loading: true,
   
  },
  reducers: {
    getClassNameList(state,action){
      state.ClassNameList=action.payload;
      state.Loading = false;
    },

    getSubjectNameList(state,action){
      state.SubjectList=action.payload;
      state.Loading = false;
    },
    getAddHomework(state,action){
      state.AddHomework=action.payload;
      state.Loading = false
    },
    resetAddHomeworkMessage(state) {
      state.AddHomework = '';
    },
    getDetailsList(state,action){
      state.DetailsList=action.payload;
      state.Loading = false;
    },
    getDeleteHomework(state,action){
      state.DeleteHomework=action.payload;
      state.Loading = false;
    },
    resetDeleteMessage(state) {
      state.DeleteHomework = '';
    },

    getSubmitHomework(state,action){
      state.SubmitHomework=action.payload;
      state.Loading = false
    },
    resetSubmitMessage(state) {
      state.SubmitHomework = '';
    },
    getHomeworkListForEdit(state,action){
      state.HomeworkListForEdit=action.payload;
      state.Loading = false
    },
    resetHomeworkListForEdit(state){
      state.HomeworkListForEdit=null;
    },
    getLoading(state) {
      state.Loading = true
    }
  }   
});


export const getClassNameList =
  (data:IGetClassNameListBody): AppThunk =>
  async (dispatch) => {
    dispatch(AddHomeWorkSlice.actions.getLoading());

    const response = await GetClassForTeacherApi. GetClassForTeacher(data);
    let a = response.data.map((item, i) => {
        return {
            Id: i,
            Name: item.ClassName,
            Value: item.ClassId,
        }
      })
     dispatch(AddHomeWorkSlice.actions.getClassNameList(a));
  };


  export const getSubjectNameList =
  (): AppThunk =>
  async (dispatch) => {
    dispatch(AddHomeWorkSlice.actions.getLoading());

    const response = await GetClassForTeacherApi.GetSubjectForTeacher();
    let Subject = response.data.map((item, i) => {
        return {
            Id: i,
            Name: item.SubjectName,
            Value: item.Id,
        }
      })
     dispatch(AddHomeWorkSlice.actions.getSubjectNameList(Subject));
  };


  export const getAddHomework =
  (data:IGetAddHomeworkBody): AppThunk =>
  async (dispatch) => {
    dispatch(AddHomeWorkSlice.actions.getLoading());
    const response = await GetClassForTeacherApi.GetAddHomework(data);
    dispatch(AddHomeWorkSlice.actions.getAddHomework(response.data));
  };


  export const resetAddHomeworkMessage =
  (): AppThunk =>
    async (dispatch) => {
      dispatch(AddHomeWorkSlice.actions.resetAddHomeworkMessage());
    }
  export const getDeleteHomework =
  (data:IDeleteHomeworkBody): AppThunk =>
  async (dispatch) => {
    dispatch(AddHomeWorkSlice.actions.getLoading());
    const response = await GetClassForTeacherApi.GetDeleteHomework(data);
    dispatch(AddHomeWorkSlice.actions.getDeleteHomework(response.data));
  };

  export const resetDeleteMessage =
  (): AppThunk =>
    async (dispatch) => {
      dispatch(AddHomeWorkSlice.actions.resetDeleteMessage());
    }

  export const getSubmitHomework =
  (data:ISubmitHomeworkBody): AppThunk =>
  async (dispatch) => {
    dispatch(AddHomeWorkSlice.actions.getLoading());
    const response = await GetClassForTeacherApi.GetSubmitHomework(data);
    dispatch(AddHomeWorkSlice.actions.getSubmitHomework(response.data));
  };
  
  export const resetSubmitMessage =
  (): AppThunk =>
    async (dispatch) => {
      dispatch(AddHomeWorkSlice.actions.resetSubmitMessage());
    }
    export const getHomeworkListForEdit =
    (data:IHomeworkListForEditBody): AppThunk =>
    async (dispatch) => {
      dispatch(AddHomeWorkSlice.actions.getLoading());
      const response = await GetClassForTeacherApi.GetHomeworkListForEdit(data);
      dispatch(AddHomeWorkSlice.actions.getHomeworkListForEdit(response.data));
    };
    
  export const resetHomeworkListForEdit =
  (): AppThunk =>
  async (dispatch) => {
    dispatch(AddHomeWorkSlice.actions.resetHomeworkListForEdit());
  };

  export const getDetailsList =
  (data:IGetDetailsListBody): AppThunk =>
  async (dispatch) => {
    const getWithoutHTML = (value) =>{
      var div = document.createElement("div");
      div.innerHTML = value;
      var text = div.textContent || div.innerText || "";
      return text;
    }
    const response = await GetClassForTeacherApi. GetDetailsList(data);
   let DeleteList = response.data.map((item,i)=>{
    return {
         Id:item.Id,
         Text1:  item.SubjectName,
         Text2 : getWithoutHTML(item.SubjectDescription),
         //  Text2 : item.SubjectDescription.substring(10),
         Text3 : getDateFormatted(item.AssignDate),
         Text4 : item.Attachment,
         Text5 : item.Camera,
         Text6 : '',
         IsSubmited: item.IsSubmited
    }
   })

    dispatch(AddHomeWorkSlice.actions.getDetailsList(DeleteList));
  };


export default AddHomeWorkSlice.reducer

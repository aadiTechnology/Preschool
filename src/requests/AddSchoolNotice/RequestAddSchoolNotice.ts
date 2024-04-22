import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import StudentSchoolNoticeApi from "src/api/AddSchoolNotice/ApiAddSchoolNotice"
import { IAddSchoolNoticeBody, ISchoolNoticeListForEditBody, IGetSchoolNoticeListBody, IGetClassNameListBody, ISendNoticeBody,IDeleteSchoolNoticeBody } from "src/Interface/AddSchoolNotice/IAddSchoolNotice";
import { getDateFormatted } from 'src/components/Common/util';


const AddSchoolNoticeSlice = createSlice({
  name: 'AddSchoolNotice',
  initialState: {
    ClassNameList: [],
    SchoolNotice: "",
    sendNotice: '',
    SchoolNoticeList: [],
    EditSchoolNoticeList: null,
    //Loading: true,
    DeleteSchoolNotice:'',
  },

  reducers: {
    getClassNameList(state, action) {
      state.ClassNameList = action.payload;
      //state.Loading = false;
    },

    addSchoolNotice(state, action) {
      state.SchoolNotice = action.payload;
    },

    resetSchoolNoticeMessage(state) {
      state.SchoolNotice = '';
    },
    getSendNotice(state, action) {
      state.sendNotice = action.payload;
      //state.Loading = false
    },
    resetSendMessage(state) {
      state.sendNotice = '';
    },
    getSchoolNoticeList(state, action) {
      state.SchoolNoticeList = action.payload;
    },
    schoolNoticeListForEdit(state, action) {
      state.EditSchoolNoticeList = action.payload;

    },
    resetSchoolNoticeListForEdit(state) {
      state.EditSchoolNoticeList = null;
    },
    getLoading(state) {
      //state.Loading = true
    },
    getDeleteSchoolNotice(state, action){
      state.DeleteSchoolNotice= action.payload;
      // state.Loading = false;
    },
    resetDeleteMessage(state) {
      state.DeleteSchoolNotice = '';
    },
  }


});

export const getClassNameList =
  (data: IGetClassNameListBody): AppThunk =>
    async (dispatch) => {
      dispatch(AddSchoolNoticeSlice.actions.getLoading());

      const response = await StudentSchoolNoticeApi.GetClassForTeacher(data);
      let a = response.data.map((item, i) => {
        return {
          Id: i,
          Name: item.ClassName,
          Value: item.ClassId,
        }
      })
      // dispatch(AddSchoolNoticeSlice.actions.getClassNameList(a));
    };
export const SchoolNoticeses =
  (data: IAddSchoolNoticeBody): AppThunk =>
    async (dispatch) => {
      dispatch(AddSchoolNoticeSlice.actions.getLoading());
      const response = await StudentSchoolNoticeApi.StudentSchoolNotice(data)
    console.log(response ,"response")
    
      
      dispatch(AddSchoolNoticeSlice.actions.addSchoolNotice(response.data))
    }

export const resetSchoolNoticeMessage =
  (): AppThunk =>
    async (dispatch) => {
      dispatch(AddSchoolNoticeSlice.actions.resetSchoolNoticeMessage());
    }
export const getSendnotice =
  (data: ISendNoticeBody): AppThunk =>
    async (dispatch) => {
      //dispatch(AddSchoolNoticeSlice.actions.getLoading());
      const response = await StudentSchoolNoticeApi.GetSendNotice(data);
      dispatch(AddSchoolNoticeSlice.actions.getSendNotice(response.data));
    };

export const resetSendMessage =
  (): AppThunk =>
    async (dispatch) => {
      dispatch(AddSchoolNoticeSlice.actions.resetSendMessage());
    }
export const getSchoolNoticeListForEdit =
  (data: ISchoolNoticeListForEditBody): AppThunk =>
    async (dispatch) => {
     // dispatch(AddSchoolNoticeSlice.actions.getLoading());
      const response = await StudentSchoolNoticeApi.SchoolNoticeListForEdit(data);
      dispatch(AddSchoolNoticeSlice.actions.schoolNoticeListForEdit(response.data));
    };

export const resetSchoolNoticeListForEdit =
  (): AppThunk =>
    async (dispatch) => {
      dispatch(AddSchoolNoticeSlice.actions.resetSchoolNoticeListForEdit());
    };
export const getSchoolNoticeList =
  (data: IGetSchoolNoticeListBody): AppThunk =>
    async (dispatch) => {
      const getWithoutHTML = (value) => {
        var div = document.createElement("div");
        div.innerHTML = value;
        var text = div.textContent || div.innerText || "";
        return text;
      }
      const response = await StudentSchoolNoticeApi.GetSchoolNoticeList(data);
      let DeleteList = response.data.map((item, i) => {
        return {
          Id: item.Id,
          Text2: item.NoticeName,
          Text4: getDateFormatted(item.AssignDate),
          Text3: getWithoutHTML(item.NoticeDescription),
          Text5:item.Attachment
        }
      })
      
        
      dispatch(AddSchoolNoticeSlice.actions.getSchoolNoticeList(DeleteList));
    };
    export const getDeleteSchoolNotice =
    (data:IDeleteSchoolNoticeBody): AppThunk =>
    async (dispatch) => {
      // dispatch(AddSchoolNoticeSlice.actions.getLoading());
      const response = await StudentSchoolNoticeApi.SchoolNoticeListForDelete(data);
      dispatch(AddSchoolNoticeSlice.actions.getDeleteSchoolNotice(response.data));
    };
  
    export const resetDeleteMessage =
    (): AppThunk =>
      async (dispatch) => {
        dispatch(AddSchoolNoticeSlice.actions.resetDeleteMessage());
      }

export default AddSchoolNoticeSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import GetAddStudentDetailsApi from "src/api/Student/ApiAddStudentDetails";
import { async } from "q";
import { IAddStudentEnquiryBody, IEditStudentEnquiryBody,IDeleteStudentBody, IStudentDetailFollowUpBody, IGetAdmissionDetailsBody, IAddUserLoginInfoBody } from "src/Interface/Student/IAddStudentDetails"


const AddStudentDetailsslice = createSlice({
  name: 'AddStudentDetails',
  initialState: {
    AddStudentDetails: '',
    AdmissionDetails: [],
    AddUserLoginInfo: '',
    StudentEnquiry: [],
    StudentDetailsFollowUp: {},
    EditStudent: {},
    DeleteStudent:'',

  },
  reducers: {
    GetAddStudentDetails(state, action) {
      state.AddStudentDetails = action.payload;
    },

    getAdmissionDetails(state, action) {
      state.AdmissionDetails = action.payload;
    },
    getStudentEnquiry(state, action) {
      state.StudentEnquiry = action.payload;
    },
    getStudentDetailsFollowUp(state, action) {
      state.StudentDetailsFollowUp = action.payload;
    },
    resetAddStudentDetails(state) {
      state.AddStudentDetails = '';
    },
    AddUserLoginInfo(state, action) {
      state.AddUserLoginInfo = action.payload;
    },
    resetAddUser(state) {
      state.AddUserLoginInfo = '';
    },

    EditStudentEnquiry(state, action) {
      state.EditStudent = action.payload;
    },

    DeleteStudentDetail(state, action) {
      state.DeleteStudent = action.payload;
    },
    
    resetStudentsDelete(state) {
      state.DeleteStudent = '';
    },


  }


});


export const GetAddStudentEnquiryDetails =
  (data: IAddStudentEnquiryBody): AppThunk =>
    async (dispatch) => {
      const response = await GetAddStudentDetailsApi.GetAddStudentEnquiryDetails(data)
      dispatch(AddStudentDetailsslice.actions.GetAddStudentDetails(response.data))
    }

export const getAdmissionDetails =
  (data: IGetAdmissionDetailsBody): AppThunk =>
    async (dispatch) => {
      const response = await GetAddStudentDetailsApi.GetAdmissionDetail(data)
      let StudentList = response.data.map((item, i) => {
        return {
          Id: item.Id,
          Text1: item.StudentName,
          Text2: item.FatherName,
          Text3: item.PhoneNo,
          Text4: item.Address,
          Text5: item.EmailId,

        }
      })

      dispatch(AddStudentDetailsslice.actions.getAdmissionDetails(StudentList))
    }

export const getStudentEnquiryList =
  (): AppThunk =>
    async (dispatch) => {
      const response = await GetAddStudentDetailsApi.GetStudentEnquiryList()
      let StudentEnquiryList = response.data.map((item, i) => {
        return {
          Id: item.Id,
          Text1: item.StudentName,
          Text2: item.BirthDate,
          Text3: item.FatherName,
          Text4: item.SocietyName,
          Text5: item.EmailId,

        }
      })
      dispatch(AddStudentDetailsslice.actions.getStudentEnquiry(StudentEnquiryList))
    }

export const StudentDetailsForFollowUp =
  (data: IStudentDetailFollowUpBody): AppThunk =>
    async (dispatch) => {
      const response = await GetAddStudentDetailsApi.GetStudentDetailsFollowUp(data)
      let StudentFollowUpList = null
      let dataRecieved = response.data.map((item, i) => {
        return {
          Id: item.Id,
          Text1: item.StudentName,
          Text2: item.FatherName,
          Text3: item.PhoneNo,
          Text4: item.ClassName,
          Text5: item.EmailId,
          Text6: item.MotherName,
          Text7: item.PhoneNo2,
          // Text8: item.BirthDate


        }
      })
      if (dataRecieved.length > 0)
        StudentFollowUpList = dataRecieved[0];
      dispatch(AddStudentDetailsslice.actions.getStudentDetailsFollowUp(StudentFollowUpList))
    }

export const resetAddStudent =
  (): AppThunk =>
    async (dispatch) => {
      dispatch(AddStudentDetailsslice.actions.resetAddStudentDetails());
    }

export const resetAddUserLogin =
  (): AppThunk =>
    async (dispatch) => {
      dispatch(AddStudentDetailsslice.actions.resetAddUser());
    }



export const AddUserLoginInfo =
  (data: IAddUserLoginInfoBody): AppThunk =>
    async (dispatch) => {
      const response = await GetAddStudentDetailsApi.AddUserLoginInfo(data)
      dispatch(AddStudentDetailsslice.actions.AddUserLoginInfo(response.data))
    }

export const EditStudentEnquirydetails =
  (data: IEditStudentEnquiryBody): AppThunk =>
    async (dispatch) => {
      const response = await GetAddStudentDetailsApi.EditStudentEnquiry(data)
      dispatch(AddStudentDetailsslice.actions.EditStudentEnquiry(response.data))
    }

    export const DeleteStudentDetails =
  (data: IDeleteStudentBody): AppThunk =>
    async (dispatch) => {
      const response = await GetAddStudentDetailsApi.DeleteStudentDetails(data)
      dispatch(AddStudentDetailsslice.actions.DeleteStudentDetail(response.data))
    }

    export const resetStudentDelete =
  (): AppThunk =>
    async (dispatch) => {
      dispatch(AddStudentDetailsslice.actions.resetStudentsDelete());
    }


export default AddStudentDetailsslice.reducer
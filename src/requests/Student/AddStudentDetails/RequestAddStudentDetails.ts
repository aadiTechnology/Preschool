import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import GetAddStudentDetailsApi from "src/api/Student/ApiAddStudentDetails";
import { async } from "q";
import {IAddStudentEnquiryBody ,IStudentDetailFollowUpBody,IGetAdmissionDetailsBody,IAddUserLoginInfoBody} from  "src/Interface/Student/IAddStudentDetails"


const AddStudentDetailsslice = createSlice({
    name: 'AddStudentDetails',
    initialState: {
        AddStudentDetails: '',
        AdmissionDetails:[],
        AddUserLoginInfo:'',
        StudentEnquiry:[],
        StudentDetailsFollowUp:{}

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
            state.AddUserLoginInfo =action.payload;
            },
            resetAddUser(state) {
              state.AddUserLoginInfo = '';
            },   
    
    }
     
     
});


export const GetAddStudentEnquiryDetails=
(data:IAddStudentEnquiryBody):AppThunk =>
async(dispatch)=>{
  const response=await GetAddStudentDetailsApi.GetAddStudentEnquiryDetails(data)
   dispatch(AddStudentDetailsslice.actions.GetAddStudentDetails(response.data))
}

export const getAdmissionDetails=
(data:IGetAdmissionDetailsBody):AppThunk =>
async(dispatch)=>{
  const response=await GetAddStudentDetailsApi.GetAdmissionDetail(data)
  let StudentList = response.data.map((item,i)=>{
    return {
         Id:item.ClassId,
         Text1:  item.StudentName,
         Text2 : item.FatherName,
         Text3 : item.PhoneNo,
         Text4 : item.Address,
         Text5 : item.EmailId,
     
    }
   })

   dispatch(AddStudentDetailsslice.actions.getAdmissionDetails(StudentList))
}

export const getStudentEnquiryList=
():AppThunk =>
async(dispatch)=>{
  const response=await GetAddStudentDetailsApi.GetStudentEnquiryList()
  let StudentEnquiryList = response.data.map((item,i)=>{
    return {
         Id:item.ClassId,
         Text1:  item.StudentName,
         Text2 : item.BirthDate,
         Text3 : item.FatherName,
         Text4 : item.SocietyName,
         Text5 : item.EmailId,
     
    }
   })

   dispatch(AddStudentDetailsslice.actions.getStudentEnquiry(StudentEnquiryList))
}

export const StudentDetailsForFollowUp=
(data:IStudentDetailFollowUpBody):AppThunk =>
async(dispatch)=>{
  const response=await GetAddStudentDetailsApi.GetStudentDetailsFollowUp(data)
  let StudentFollowUpList = response.data.map((item,i)=>{
    return {
         Id:item.Id,
         Text1:  item.StudentName,
         Text2 : item.FatherName,
         Text3 : item.PhoneNo,
         Text4 : item.ClassName,
         Text5 : item.EmailId,
     
    }
   })

   dispatch(AddStudentDetailsslice.actions.getStudentDetailsFollowUp(StudentFollowUpList))
}

export const resetAddStudent=
(): AppThunk =>
  async (dispatch) => {
    dispatch(AddStudentDetailsslice.actions.resetAddStudentDetails());
  }

  export const  resetAddUserLogin=
(): AppThunk =>
  async (dispatch) => {
    dispatch(AddStudentDetailsslice.actions.resetAddUser());
  }
 

  
export const AddUserLoginInfo=
(data:IAddUserLoginInfoBody):AppThunk =>
async(dispatch)=>{
  const response=await GetAddStudentDetailsApi.AddUserLoginInfo(data)
   dispatch(AddStudentDetailsslice.actions.AddUserLoginInfo(response.data))
}


export default AddStudentDetailsslice.reducer
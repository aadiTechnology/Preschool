import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import GetAddStudentDetailsApi from "src/api/Student/ApiAddStudentDetails";
import { async } from "q";
import {IGetAddStudentDetailsBody ,IGetAdmissionDetailsBody,IAddUserLoginInfoBody} from  "src/Interface/Student/IAddStudentDetails"


const AddStudentDetailsslice = createSlice({
    name: 'AddStudentDetails',
    initialState: {
        AddStudentDetails: '',
        AdmissionDetails:[],
        AddUserLoginInfo:''

      },
    reducers: {
        GetAddStudentDetails(state, action) {
            state.AddStudentDetails = action.payload;
            },

            getAdmissionDetails(state, action) {
              state.AdmissionDetails = action.payload;
              },
        resetAddStudentDetails(state) {
            state.AddStudentDetails = '';
          },
          AddUserLoginInfo(state, action) {
            state.AddUserLoginInfo = '';
            },   
    
    }
     
     
});


export const GetAddStudentDetails=
(data:IGetAddStudentDetailsBody):AppThunk =>
async(dispatch)=>{
  const response=await GetAddStudentDetailsApi.GetAddStudentDetails(data)
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

export const resetAddStudent=
(): AppThunk =>
  async (dispatch) => {
    dispatch(AddStudentDetailsslice.actions.resetAddStudentDetails());
  }

  
export const AddUserLoginInfo=
(data:IAddUserLoginInfoBody):AppThunk =>
async(dispatch)=>{
  const response=await GetAddStudentDetailsApi.AddUserLoginInfo(data)
   dispatch(AddStudentDetailsslice.actions.AddUserLoginInfo(response.data))
}


export default AddStudentDetailsslice.reducer
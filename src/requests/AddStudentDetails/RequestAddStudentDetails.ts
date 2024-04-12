import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import AddStudentDetailsApi from "src/api/AddStudentDetails/ApiAddStudentDetails";
import { IAddStudentDetailsBody,IGetStudentDetailsBody,IGetStudentDetailsListBody,IDeleteStudentDetailsBody} from "src/Interface/AddStudentDetails/IAddStudentDetails"


const AddStudentDetailslice = createSlice({
  name: 'AddStudentDetails',
  initialState: {
    StudentDetails: "",
    GetStudentDetails: [],
    GetStudentDetailsList: [],
    DeleteStudentDetails:""
  },
  reducers: {
    AddStudentDetails(state, action) {
      state.StudentDetails = action.payload;
    },
    
    GetStudentDetails(state, action) {
      state.GetStudentDetails = action.payload;
    },
    GetStudentDetailsList(state, action) {
      state.GetStudentDetailsList = action.payload;
    },
    DeleteStudentDetails(state, action) {
      state.DeleteStudentDetails = action.payload;
    },
}


});


export const AddStudentDetails =
  (data: IAddStudentDetailsBody): AppThunk =>
    async (dispatch) => {
      const response = await AddStudentDetailsApi.AddStudentDetails(data)
      dispatch(AddStudentDetailslice.actions.AddStudentDetails(response.data))
    }
   
 export const GetStudentDetails =
  (data: IGetStudentDetailsBody): AppThunk =>
   async (dispatch) => {
   const response = await AddStudentDetailsApi.GetStudentDetails(data)
   dispatch(AddStudentDetailslice.actions.GetStudentDetails(response.data))
   }
   export const GetStudentDetailsList =
  (data: IGetStudentDetailsListBody): AppThunk =>
   async (dispatch) => {
   const response = await AddStudentDetailsApi.GetStudentDetailsList(data)
   dispatch(AddStudentDetailslice.actions.GetStudentDetailsList(response.data))
   }
   export const DeleteStudentDetails =
  (data: IDeleteStudentDetailsBody): AppThunk =>
   async (dispatch) => {
   const response = await AddStudentDetailsApi.DeleteStudentDetails(data)
   dispatch(AddStudentDetailslice.actions.DeleteStudentDetails(response.data))
   }
    


export default AddStudentDetailslice.reducer
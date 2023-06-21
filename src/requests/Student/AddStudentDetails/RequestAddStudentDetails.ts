import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import GetAddStudentDetailsApi from "src/api/Student/ApiAddStudentDetails";
import { async } from "q";
import {IGetAddStudentDetailsBody} from  "src/Interface/Student/IAddStudentDetails"


const AddStudentDetailsslice = createSlice({
    name: 'AddStudentDetails',
    initialState: {
        AddStudentDetails: {},
      },
    reducers: {
        GetAddStudentDetails(state, action) {
            state.AddStudentDetails = action.payload;
            
        },}
     
     
});


export const GetAddStudentDetails=
(data:IGetAddStudentDetailsBody):AppThunk =>
async(dispatch)=>{
  const response=await GetAddStudentDetailsApi.GetAddStudentDetails(data)
   dispatch(AddStudentDetailsslice.actions.GetAddStudentDetails(response.data))
}

export default AddStudentDetailsslice.reducer
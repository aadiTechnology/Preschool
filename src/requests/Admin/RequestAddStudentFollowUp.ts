import { createSlice } from '@reduxjs/toolkit'
import { AppThunk } from 'src/store';
import { IAddStudentFollowUpBody } from "src/Interface/Admin/IAddStudentFollowUp";
import AddStudentFollowUpApi from 'src/api/Admin/ApiAddStudentFollowUp';

const AddStudentFollowUpSlice = createSlice({
    name: 'FollowUp',
    initialState: {
        StudentFollowUp: ''
    },
    reducers: {
        StudentFollowUp(state, action) {
            state.StudentFollowUp = action.payload;
        },

    }
});

export const AddStudentFollowUp =
  (data: IAddStudentFollowUpBody): AppThunk =>
    async (dispatch) => {
      const response = await AddStudentFollowUpApi.AddStudentFollowUp(data);
      dispatch(AddStudentFollowUpSlice.actions.StudentFollowUp(response.data));
    };

    export default AddStudentFollowUpSlice.reducer
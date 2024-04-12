import { createSlice } from '@reduxjs/toolkit'
import { AppThunk } from 'src/store';
import { IAddStudentFollowUpBody,IDeleteFollowUpListBody } from "src/Interface/Admin/IAddStudentFollowUp";
import AddStudentFollowUpApi from 'src/api/Admin/ApiAddStudentFollowUp';

const AddStudentFollowUpSlice = createSlice({
  name: 'FollowUp',
  initialState: {
    StudentFollowUp: '',
    DeleteFollowUp: '',
    FollowUpList: []
  },
  reducers: {
    StudentFollowUp(state, action) {
      state.StudentFollowUp = action.payload;
    },
    StudentFollowList(state, action) {
      state.FollowUpList = action.payload;
    },

    DeleteFollowUpL(state, action) {
      state.DeleteFollowUp = action.payload;
    },

    resetDeleteFollowUpL(state) {
      state.DeleteFollowUp = '';
    },

  }
});

export const AddStudentFollowUp =
  (data: IAddStudentFollowUpBody): AppThunk =>
    async (dispatch) => {
      const response = await AddStudentFollowUpApi.AddStudentFollowUp(data);
      dispatch(AddStudentFollowUpSlice.actions.StudentFollowUp(response.data));
    };

export const DeleteFollowUpList =
  (data: IDeleteFollowUpListBody): AppThunk =>
    async (dispatch) => {
      const response = await AddStudentFollowUpApi.DeleteFollowUp(data);
      dispatch(AddStudentFollowUpSlice.actions.DeleteFollowUpL(response.data));
    };

export const resetDeleteFollowUpList =
    (): AppThunk =>
    async (dispatch) => {
      dispatch(AddStudentFollowUpSlice.actions.resetDeleteFollowUpL());
    };


export const StudentFollowUpList =
  (): AppThunk =>
    async (dispatch) => {
      const response = await AddStudentFollowUpApi.FollowUpList()
      let StudentList = response.data.map((item, i) => {
        return {
          Id: item.Id,
          Text1: item.Comment,
          Text2: item.Comment,
          Text3: item.Comment,
          Text4: item.SocietyName,
          Text5: item.StudentAddress,

        }
      })
    dispatch(AddStudentFollowUpSlice.actions.StudentFollowList(StudentList));
    }

export default AddStudentFollowUpSlice.reducer
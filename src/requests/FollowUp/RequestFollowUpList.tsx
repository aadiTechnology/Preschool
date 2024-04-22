import { createSlice } from "@reduxjs/toolkit";
import FollowUpApi from "src/api/FollowUp/ApiFollowUp"; // Import the correct API for follow-up
import { IAddFollowUpBody, IGetFollowUpDetailsBody } from "src/Interface/FollowUp/IFollowUp"; // Import the correct interfaces for follow-up
import { AppThunk } from "src/store";
import { getDateFormatted } from 'src/components/Common/util';
import { Tooltip } from "@mui/material";
import Delete from "@mui/icons-material/Delete";

const FollowUpSlice = createSlice({
    name: 'FollowUp', // Change slice name to 'FollowUp'
    initialState: {
        AddFollowUpMsg: '',
        DeleteFollowUpMsg: '',
        FollowUpList: [],
        Status: [],
        FollowUpHistory: [],
        Loading: true,
    },
    reducers: {
        getAddFollowUpMsg(state, action) {
            state.Loading = false;
            state.AddFollowUpMsg = action.payload;
        },
        getDeleteFollowUpMsg(state, action) {
            state.Loading = false;
            state.DeleteFollowUpMsg = action.payload;
        },
        resetAddFollowUpMsg(state) {
            state.Loading = false;
            state.AddFollowUpMsg = "";
        },
        resetDeleteFollowUpMsg(state) {
            state.Loading = false;
            state.DeleteFollowUpMsg = "";
        },
        getFollowUpList(state, action) {
            state.Loading = false;
            state.FollowUpList = action.payload;
        },
        getLoading(state, action) {
            state.Loading = true;
        },
        getFollowUpHistoryList(state, action) {
            state.Loading = false;
            state.FollowUpHistory = action.payload;
        },
        getStatus(state, action) {
            state.Loading = false;
            state.Status = action.payload;
        },
    }
});

export const AddFollowUpDetails =
    (data: IAddFollowUpBody): AppThunk =>
        async (dispatch) => {
            dispatch(FollowUpSlice.actions.getLoading(true));
            const response = await FollowUpApi.AddFollowUpApi(data);
            dispatch(FollowUpSlice.actions.getAddFollowUpMsg(response.data));
        };

export const DeleteFollowUpDetails =
    (data: IGetFollowUpDetailsBody): AppThunk =>
        async (dispatch) => {
            dispatch(FollowUpSlice.actions.getLoading(true));
            const response = await FollowUpApi.DeleteFollowUpApi(data);
            dispatch(FollowUpSlice.actions.getDeleteFollowUpMsg(response.data));
        };

export const resetAddFollowUpMsg =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FollowUpSlice.actions.resetAddFollowUpMsg());
        };

export const resetDeleteFollowUpMsg =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FollowUpSlice.actions.resetDeleteFollowUpMsg());
        };

export const getFollowUpList =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FollowUpSlice.actions.getLoading(true));
            const response = await FollowUpApi.GetFollowUpListApi(); // Update to use follow-up API
            const responseData = response.data.map((Item, i) => {
                return {
                    Id: Item.StudentId,
                    Text1: Item.StudentName,
                    Text2: Item.FollowUpCount,
                    Text3: Item.Status,
                    Text4: Item.Reminder,
                    Text5: <Tooltip title={Item.Comment} placement="right"><p>{Item.Comment.slice(0, 15)}...</p></Tooltip>,
                    Text6: Item.SocietyName,
                    Text7: Item.FollowUpDate// Update to use follow-up date
                }
            })
            dispatch(FollowUpSlice.actions.getFollowUpList(responseData));
        };

export const GetStatus =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FollowUpSlice.actions.getLoading(true));
            const response = await FollowUpApi.GetStatusApi();
            const responseData = response.data.map((Item, i) => {
                return {
                    Id: Item.ID,
                    Name: Item.Status,
                    Value: Item.ID.toString()
                };
            });
            dispatch(FollowUpSlice.actions.getStatus(responseData));
        };

export const GetFollowUpHistoryList =
    (data: IGetFollowUpDetailsBody): AppThunk =>
        async (dispatch) => {
            dispatch(FollowUpSlice.actions.getLoading(true));

            const response = await FollowUpApi.GetFollowUpHistoryListApi(data);
            const responseData = response.data.map((Item, i) => {
                return {
                    Id: Item.StudentId,
                    Text1: Item.FollowUpCount,
                    Text2: Item.Status,
                    Text3: Item.Reminder,
                    Text4: <Tooltip title={Item.Comment} placement="right"><p>{Item.Comment.slice(0, 20)}...</p></Tooltip>,
                    Text5: Item.SocietyName,
                    Text6: Item.FollowUpDate
                }
            });
            dispatch(FollowUpSlice.actions.getFollowUpHistoryList(responseData));
        };

export default FollowUpSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import FollowUpApi from "src/api/FollowUp/ApiFollowUp"; // Import the correct API for follow-up
import { IAddAdmissionBody, IGetAdmissionDetailsBody } from "src/Interface/Admission/IAdmission"; // Import the correct interfaces for follow-up
import { AppThunk } from "src/store";
import { getDateFormatted } from 'src/components/Common/util';
import { Tooltip } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import AdmissionApi from "src/api/Admission/ApiAdmission";

const AdmissionSlice = createSlice({
    name: 'Admission', // Change slice name to 'FollowUp'
    initialState: {
        AddAdmissionMsg: '',
        DeleteAdmissionMsg: '',
        AdmissionList: [],
        Loading: true,
    },
    reducers: {
        getAddAdmissionMsg(state, action) {
            state.Loading = false;
            state.AddAdmissionMsg = action.payload;
        },
        getDeleteAdmissionMsg(state, action) {
            state.Loading = false;
            state.DeleteAdmissionMsg = action.payload;
        },
        resetAddAdmissionMsg(state) {
            state.Loading = false;
            state.AddAdmissionMsg = "";
        },
        resetDeleteAdmissionMsg(state) {
            state.Loading = false;
            state.DeleteAdmissionMsg = "";
        },
        getAdmissionList(state, action) {
            state.Loading = false;
            state.AdmissionList = action.payload;
        },
        getLoading(state, action) {
            state.Loading = true;
        }
    }
});

export const AddAdmissionDetails =
    (data: IAddAdmissionBody): AppThunk =>
        async (dispatch) => {
            dispatch(AdmissionSlice.actions.getLoading(true));
            const response = await AdmissionApi.AddAdmissionApi(data);
            dispatch(AdmissionSlice.actions.getAddAdmissionMsg(response.data));
        };

export const DeleteAdmissionDetails =
    (data: IGetAdmissionDetailsBody): AppThunk =>
        async (dispatch) => {
            dispatch(AdmissionSlice.actions.getLoading(true));
            const response = await AdmissionApi.DeleteAdmissionApi(data);
            dispatch(AdmissionSlice.actions.getDeleteAdmissionMsg(response.data));
        };

export const resetAddAdmissionMsg =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(AdmissionSlice.actions.resetAddAdmissionMsg());
        };

export const resetDeleteAdmissionMsg =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(AdmissionSlice.actions.resetDeleteAdmissionMsg());
        };

export const getAdmissionList =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(AdmissionSlice.actions.getLoading(true));
            const response = await AdmissionApi.GetAdmissionListApi(); // Update to use follow-up API
            const responseData = response.data.map((Item, i) => {
                return {
                    Id: Item.ID,
                    Text1: Item.StudentName,
                    Text2: Item.ClassName,
                    Text3: Item.FatherPhoneNo,
                    Text4: Item.SocietyName,
                    Text5: Item.AdmissionDate
                }
            })
            dispatch(AdmissionSlice.actions.getAdmissionList(responseData));
        };


export default AdmissionSlice.reducer;

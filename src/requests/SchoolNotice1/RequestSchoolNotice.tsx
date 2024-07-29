import { createSlice } from "@reduxjs/toolkit";
import SchoolNoticeApi from "src/api/SchoolNotice/ApiSchoolNotice";
import { IAddSchoolNotice, IGetSchoolNoticeDetails } from "src/Interface/SchoolNotice/ISchoolNotice"; // Update import to match your Enquiry interfaces
import { AppThunk } from "src/store";
import { getDateFormatted } from 'src/components/Common/util';

const SchoolNoticeSlice1 = createSlice({
    name: 'SchoolNotice',
    initialState: {
        AddSchoolNoticeMsg: '',
        SchoolNoticeList: [],
        SchoolNoticeDates: [],
        SchoolNoticeDetails: null,
        SchoolNoticeDetailsByDate:[],
        updateSchoolNoticeDetailsMsg: '',
        deleteSchoolNoticeDetailsMsg: '',
        Class: [],
        Loading: true
    },
    reducers: {
        getAddSchoolNoticeMsg(state, action) {
            state.Loading = false;
            state.AddSchoolNoticeMsg = action.payload;
        },
        resetSchoolNoticeDetails(state) {
            state.Loading = false;
            state.AddSchoolNoticeMsg = "";
        },
        getSchoolNoticeList(state, action) {
            state.Loading = false;
            state.SchoolNoticeList = action.payload;
        },
        getClass(state, action) {
            state.Loading = false;
            state.Class = action.payload;
        },
        getSchoolNoticeDates(state, action) {
            state.Loading = false;
            state.SchoolNoticeDates = action.payload;
        },
        getSchoolNoticeDetaislByDate(state, action) {
            state.Loading = false;
            state.SchoolNoticeDetailsByDate = action.payload;
        },
        getLoading(state, action) {
            state.Loading = true;
        },
        getSchoolNoticeDetails(state, action) {
            state.Loading = false;
            state.SchoolNoticeDetails = action.payload;
        },
        resetAddSchoolNoticeDetails(state) {
            state.Loading = false;
            state.SchoolNoticeDetails = null;
        },
        getDeleteSchoolNoticeMsg(state, action) {
            state.Loading = false;
            state.deleteSchoolNoticeDetailsMsg = action.payload;
        },
        resetDeleteSchoolNoticeMsg(state) {
            state.Loading = false;
            state.deleteSchoolNoticeDetailsMsg = "";
        }
    }
});

export const AddSchoolNoticeDetails =
    (data: IAddSchoolNotice): AppThunk =>
        async (dispatch) => {
            dispatch(SchoolNoticeSlice1.actions.getLoading(true));
            const response = await SchoolNoticeApi.AddSchoolNoticeApi(data);
            dispatch(SchoolNoticeSlice1.actions.getAddSchoolNoticeMsg(response.data));
        };

export const resetAddSchoolNoticeDetails =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(SchoolNoticeSlice1.actions.resetAddSchoolNoticeDetails());
        };

export const resetSchoolNoticeDetails =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(SchoolNoticeSlice1.actions.resetSchoolNoticeDetails());
        };

export const getSchoolNoticeList =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(SchoolNoticeSlice1.actions.getLoading(true));
            // const responseData = response.data.map((Item, i) => {
            //     return {
            //         Id: Item.ID,
            //         Text1: Item.EmployeeName,
            //         Text2: Item.BirthDate,
            //         Text3: Item.EmailId,
            //         Text4: Item.PhoneNo,
            //     };
            const response = await SchoolNoticeApi.GetSchoolNoticeListApi();
            const responseData = response.data.map((Item, i) => {
                return {
                    Id: Item.ID,
                    Text1: Item.NoticeTitle,
                    Text2: Item.ClassName,
                    Text3: getDateFormatted(Item.NoticeDate)

                };
            });
            dispatch(SchoolNoticeSlice1.actions.getSchoolNoticeList(responseData));
        };

 
export const getSchoolNoticeDates =
(): AppThunk =>
    async (dispatch) => {
        dispatch(SchoolNoticeSlice1.actions.getLoading(true));
        const response = await SchoolNoticeApi.GetSchoolNoticeDatesApi();
        const responseData = response.data.map((Item, i) => {
            return {
                Id: i,
                Name: getDateFormatted(Item.NoticeDate),
                value: Item.NoticeDate
            };
        });
        dispatch(SchoolNoticeSlice1.actions.getSchoolNoticeDates(responseData));
    };

    export const getSchoolNoticeDetailsByDate =
(data: IGetSchoolNoticeDetails): AppThunk =>
    async (dispatch) => {
        dispatch(SchoolNoticeSlice1.actions.getLoading(true));
        const response = await SchoolNoticeApi.GetSchoolNoticeDetailsByDateApi(data);
        const responseData = response.data.map((Item, i) => {
            return {
                Id: Item.ID,
                Text1: Item.NoticeTitle,
                Text2:  getDateFormatted(Item.NoticeDate)
            };
        });
        dispatch(SchoolNoticeSlice1.actions.getSchoolNoticeDetaislByDate(responseData));
     };
   

export const getSchoolNoticeDetails =
    (data: IGetSchoolNoticeDetails): AppThunk =>
        async (dispatch) => {
            dispatch(SchoolNoticeSlice1.actions.getLoading(true));
            const response = await SchoolNoticeApi.GetSchoolNoticeDetailsApi(data);
            dispatch(SchoolNoticeSlice1.actions.getSchoolNoticeDetails(response.data));
        };

export const DeleteSchoolNoticeDetails =
    (data: IGetSchoolNoticeDetails): AppThunk =>
        async (dispatch) => {
            dispatch(SchoolNoticeSlice1.actions.getLoading(true));
            const response = await SchoolNoticeApi.DeleteSchoolNoticeApi(data);
            dispatch(SchoolNoticeSlice1.actions.getDeleteSchoolNoticeMsg(response.data));
        };
export const resetDeleteSchoolNoticeMsg =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(SchoolNoticeSlice1.actions.resetDeleteSchoolNoticeMsg());
        };


export default SchoolNoticeSlice1.reducer;
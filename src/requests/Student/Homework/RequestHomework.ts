import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import { IGetDateForLegendBody } from "src/Interface/Student/IHomework";
import GetHomeworkApi from "src/api/Student/ApiHomework";
import { async } from "q";
import {IGetViewHomeWorkListBody} from  "src/Interface/Student/IHomework"


const Homeworkslice = createSlice({
    name: 'Homework',
    initialState: {
        HighlightedDate: {},
        ViewHomework:[]

    },
    reducers: {
        GetDateForLegend(state, action) {
            state.HighlightedDate = action.payload;
        },
        GetViewHomework(state, action) {
            state.ViewHomework = action.payload;
        },
    }
});

export const GetDateForLegend=
(data:IGetDateForLegendBody):AppThunk =>
async(dispatch)=>{
    const response=await GetHomeworkApi.GetDateForLegend(data)
   

    dispatch(Homeworkslice.actions.GetDateForLegend(response.data))
}
export const GetViewHomework=
(data:IGetViewHomeWorkListBody):AppThunk =>
async(dispatch)=>{
    const response=await GetHomeworkApi.GetViewHomeWorkList(data)
   

    dispatch(Homeworkslice.actions.GetViewHomework(response.data))
}

export default Homeworkslice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import { IGetDateForLegendBody } from "src/Interface/Student/IHomework";
import GetDateForLegendApi from "src/api/Student/ApiHomework";
import { async } from "q";


const Homeworkslice = createSlice({
    name: 'Homework',
    initialState: {
        HighlightedDate: {},

    },
    reducers: {
        GetDateForLegend(state, action) {
            state.HighlightedDate = action.payload;
        },
    }
});

export const GetDateForLegend=
(data:IGetDateForLegendBody):AppThunk =>
async(dispatch)=>{
    const response=await GetDateForLegendApi.GetDateForLegend(data)
   

    dispatch(Homeworkslice.actions.GetDateForLegend(response.data))
}

export default Homeworkslice.reducer
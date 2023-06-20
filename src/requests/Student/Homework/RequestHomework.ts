import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import { IGetDateForLegendBody } from "src/Interface/Student/IHomework";
import GetHomeworkApi from "src/api/Student/ApiHomework";
import { async } from "q";
import {IGetViewHomeWorkListBody} from  "src/Interface/Student/IHomework"


const Homeworkslice = createSlice({
    name: 'Homework',
    initialState: {
        HighlightedDate: [],
        ViewHomework:[],
        Loading :true

    },
    reducers: {
        GetDateForLegend(state, action) {
            state.HighlightedDate = action.payload;
            state.Loading = false;
        },
        GetViewHomework(state, action) {
            state.ViewHomework = action.payload;
            state.Loading = false;
        },
        getLoading(state) {
            state.Loading = true
          }
    }
});

export const GetDateForLegend=
(data:IGetDateForLegendBody):AppThunk =>
async(dispatch)=>{
    dispatch(Homeworkslice.actions.getLoading());
    const response=await GetHomeworkApi.GetDateForLegend(data)
    let HomeWorkList = response.data.map((item,i)=>{
        return {
             Id:item.Id,
             Text1:  item.SubjectName,
             Text2 : item.AssignDate.split(' ')[0],
           
          
        }
       })
    dispatch(Homeworkslice.actions.GetDateForLegend(HomeWorkList))
}
export const GetViewHomework=
(data:IGetViewHomeWorkListBody):AppThunk =>
async(dispatch)=>{
    dispatch(Homeworkslice.actions.getLoading());
    const response=await GetHomeworkApi.GetViewHomeWorkList(data)
   

    dispatch(Homeworkslice.actions.GetViewHomework(response.data))
}

export default Homeworkslice.reducer
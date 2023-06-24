import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import { IGetDateForLegendBody } from "src/Interface/Student/IHomework";
import GetHomeworkApi from "src/api/Student/ApiHomework";
import { async } from "q";
import {IGetViewHomeWorkListBody} from  "src/Interface/Student/IHomework"


const Homeworkslice = createSlice({
    name: 'Homework',
    initialState: {
        HomeworkDetails: [],
        // HomeworkDate: [],
        ViewHomework:[],
        // AllowPrevious: false,
        // AllowNext:false,
        Loading :true

    },
    reducers: {
        GetHomeworkDate(state, action) {
            state.HomeworkDetails = action.payload;
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

export const GetHomeworkDate=
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
       dispatch(Homeworkslice.actions.GetHomeworkDate(HomeWorkList))
}
export const GetViewHomework=
(data:IGetViewHomeWorkListBody):AppThunk =>
async(dispatch)=>{
    dispatch(Homeworkslice.actions.getLoading());
    const response=await GetHomeworkApi.GetViewHomeWorkList(data)
   dispatch(Homeworkslice.actions.GetViewHomework(response.data))
}

export default Homeworkslice.reducer
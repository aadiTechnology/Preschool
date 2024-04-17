import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import { IGetDateForLegendBody ,IGetDatewiseHomeworkDetailsBody } from "src/Interface/Student/IHomework";
import GetHomeworkApi from "src/api/Student/ApiHomework";
import {IGetViewHomeWorkListBody} from  "src/Interface/Student/IHomework"
import { getDateFormatted, getMonthYearFormatted } from "src/components/Common/util";



const Homeworkslice = createSlice({
    name: 'Homework',
    initialState: {
        HomeworkDetails: [],
         HomeworkDate: [],
        ViewHomework:[],
        AllowPrevious: false,
        AllowNext:false,
        Loading :true

    },
    reducers: {
        GetHomework(state, action) {
            state.HomeworkDetails = action.payload;
            state.Loading = false;
        },
        GetHomeworkDate(state, action) {
           
            let count = action.payload.HomeworkDate?.length-1;
            let HomeWorkDateList = action.payload.HomeworkDate?.map((item,i)=>{
               
                return {
                Id:i,
                Name:getMonthYearFormatted(item),
                Value: item,
                IsActive: i===count?true:false 
                }
            })
            state.HomeworkDate = HomeWorkDateList;
            state.AllowPrevious = action.payload.AllowPrevious
            state.AllowNext = action.payload.AllowNext
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

export const GetHomework=
(data:IGetDateForLegendBody):AppThunk =>
async(dispatch)=>{
    dispatch(Homeworkslice.actions.getLoading());
    const response=await GetHomeworkApi.GetDateForLegend(data)
  
    let HomeWorkList = response.data.map((item,i)=>{
        return {
             Id:item.Id,
             Text1:  item.SubjectName,
             Text2 : getDateFormatted(item.AssignDate.split(' ')[0]),
        }
       })
       dispatch(Homeworkslice.actions.GetHomework(HomeWorkList))
};

export const GetHomeworkDate=
(data:IGetDatewiseHomeworkDetailsBody):AppThunk =>
async(dispatch)=>{
    dispatch(Homeworkslice.actions.getLoading());
    const response=await GetHomeworkApi.GetHomeWorkDate(data)
       dispatch(Homeworkslice.actions.GetHomeworkDate(response.data))
}
export const GetViewHomework=
(data:IGetViewHomeWorkListBody):AppThunk =>
async(dispatch)=>{
    dispatch(Homeworkslice.actions.getLoading());
    const response=await GetHomeworkApi.GetViewHomeWorkList(data)
   dispatch(Homeworkslice.actions.GetViewHomework(response.data))
}

export default Homeworkslice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import {IGetDateForLegendNoticeBody,IGetViewSchoolNoticeListBody,IGetDatewiseSchoolNoticeBody } from "src/Interface/Student/ISchoolNotice";
import GetSchoolNoiceApi from "src/api/Student/APISchoolNotice";
//import {IGetViewHomeWorkListBody} from  "src/Interface/Student/IHomework"
import { getDateFormatted, getMonthYearFormatted } from "src/components/Common/util";

const SchoolNoticeSlice = createSlice({
    name: 'Homework',
    initialState: {
        SchoolNotice: [],
         NoticeDate: [],
        ViewNotice:[],
        AllowPrevious: false,
        AllowNext:false
        //Loading :true

    },
    reducers: {
        GetSchoolNotice(state, action) {
            state.SchoolNotice = action.payload;
           // state.Loading = false;
        },
        GetSchoolNoticeDate(state, action) {
           
            let count = action.payload.NoticeDate?.length-1;
            let NoticeDateList = action.payload.NoticeDate?.map((item,i)=>{
               
                return {
                Id:i,
                Name:getMonthYearFormatted(item),
                Value: item,
                IsActive: i===count?true:false 
                }
            })
            state.NoticeDate = NoticeDateList;
            state.AllowPrevious = action.payload.AllowPrevious
            state.AllowNext = action.payload.AllowNext
            //state.Loading = false;
        },
        GetViewSchoolNotice(state, action) {
            state.ViewNotice = action.payload;
            //state.Loading = false;
        },
        // getLoading(state) {
        //     state.Loading = true
        //   }
    }
});

export const GetSchoolNotice=
(data:IGetDateForLegendNoticeBody):AppThunk =>
async(dispatch)=>{
    //dispatch(SchoolNoticeSlice.actions.getLoading());
    const response=await GetSchoolNoiceApi.GetDateForLegendNotice(data)
   
    
      
    let SchoolNoticeList = response.data.map((item,i)=>{
         

        return {
             Id:item.Id,
             Text1:  item.NoticeName,
             Text2 : getDateFormatted(item.AssignDate.split(' ')[0]),
             //Text3: window.URL.createObjectURL(new Blob([item.Attachment]))
             

    }
             
        
       })
       dispatch(SchoolNoticeSlice.actions.GetSchoolNotice(SchoolNoticeList))
};

export const GetSchoolNoticeDate=
(data:IGetDatewiseSchoolNoticeBody):AppThunk =>
async(dispatch)=>{
    //dispatch(SchoolNoticeSlice.actions.getLoading());
    const response=await GetSchoolNoiceApi.GetNoticeDate(data)
       dispatch(SchoolNoticeSlice.actions.GetSchoolNoticeDate(response.data))
}
export const GetViewSchoolNotice=
(data:IGetViewSchoolNoticeListBody):AppThunk =>
async(dispatch)=>{
    //dispatch(SchoolNoticeSlice.actions.getLoading());
    const response=await GetSchoolNoiceApi.GetViewSchoolNoticeList(data)
                  
   dispatch(SchoolNoticeSlice.actions.GetViewSchoolNotice(response.data))
}

export default SchoolNoticeSlice.reducer
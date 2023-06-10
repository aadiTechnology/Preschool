import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import { IGetYearDropDownForAlbumListBody } from "src/Interface/Student/IViewphoto";
import GetYearDropDownForAlbumListApi from "src/api/Student/ApiViewphoto";
import { async } from "q";


const Viewphotoslice = createSlice({
    name: 'Viewphoto',
    initialState: {
        YearList: [],

    },
    reducers: {
        GetYearDropDownForAlbumList(state, action) {
            state.YearList = action.payload;
        },
    }
});

export const GetYearDropDownForAlbumList=
(data:IGetYearDropDownForAlbumListBody):AppThunk =>
async(dispatch)=>{
    const response=await GetYearDropDownForAlbumListApi.GetYearDropDownForAlbumList(data)
   

    dispatch(Viewphotoslice.actions.GetYearDropDownForAlbumList(response.data))
}

export default Viewphotoslice.reducer
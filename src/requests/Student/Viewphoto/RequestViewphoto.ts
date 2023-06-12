import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import { IGetYearDropDownForAlbumListBody, IGetAlbumNameListBody } from "src/Interface/Student/IViewphoto";
import GetViewAlbumbApi from "src/api/Student/ApiViewphoto";


import { async } from "q";


const Viewphotoslice = createSlice({
    name: 'Viewphoto',
    initialState: {
        YearList: [],
        AlbumList: []

    },
    reducers: {
        GetYearDropDownForAlbumList(state, action) {
            state.YearList = action.payload;
        },

        GetAlbumNameList(state, action) {
            state.AlbumList = action.payload;
        },
    }
});

export const GetYearDropDownForAlbumList=
(data:IGetYearDropDownForAlbumListBody):AppThunk =>
async(dispatch)=>{
    const response=await GetViewAlbumbApi.GetYearDropDownForAlbumList(data)
    let YearList = response.data.map((item, i) => {
        return {
            Id: item.AlbumId,
            Name: item.AlbumDate,
            Value: item.AlbumDate,
        }
      })

    dispatch(Viewphotoslice.actions.GetYearDropDownForAlbumList(YearList))
}

export const GetAlbumNameList=
(data:IGetAlbumNameListBody):AppThunk =>
async(dispatch)=>{
    const response=await GetViewAlbumbApi.GetAlbumNameList(data)
   

    dispatch(Viewphotoslice.actions.GetAlbumNameList(response.data))
}

export default Viewphotoslice.reducer
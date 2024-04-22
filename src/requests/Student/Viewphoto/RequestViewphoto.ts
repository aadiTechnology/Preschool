import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import { IGetYearDropDownForAlbumListBody, IGetAlbumNameListBody } from "src/Interface/Student/IViewphoto";
import GetViewAlbumbApi from "src/api/Student/ApiViewphoto";


import { async } from "q";


const Viewphotoslice = createSlice({
    name: 'Viewphoto',
    initialState: {
        YearList: [],
        AlbumList: [],
        Loading: true,

    },
    reducers: {
        GetYearDropDownForAlbumList(state, action) {
            state.YearList = action.payload;
        },

        GetAlbumNameList(state, action) {
            state.AlbumList = action.payload;
            state.Loading = false
        },
        getLoading(state) {
            state.Loading = true
          }
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
    dispatch(Viewphotoslice.actions.getLoading());
    const response=await GetViewAlbumbApi.GetAlbumNameList(data)
   let AlbumList = response.data.map((item ,i)=>{
    return{
        Id: item.AlbumId,
        Text1: item.Title,
        Link: item.FacebookLink
    }
   })

    dispatch(Viewphotoslice.actions.GetAlbumNameList(AlbumList))
}

export default Viewphotoslice.reducer
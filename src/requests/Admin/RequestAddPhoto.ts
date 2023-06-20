import { createSlice } from '@reduxjs/toolkit'
import { AppThunk } from 'src/store';
import { IAddPhotoAlbumBody, IAddPhotoAlbumResult, IGetClassNameListBody, IGetClassNameListResult, IGetAllAlbumNameListBody, IGetAllAlbumNameListResult, IDeletePhotoAlbumBody, IDeletePhotoAlbumResult } from "src/Interface/Admin/IAddPhoto"
import GetAddPhotoApi from 'src/api/Admin/ApiAddPhoto';


const AddPhotoSlice = createSlice({
  name: 'AddPhoto',
  initialState: {
    AddPhotoAlbum: null,
    GetClassNameList: [],
    GetAllAlbumNameList: [],
    DeleteAllAlbumList: null,
    Loading :true

  },
  reducers: {
    GetClassNameList(state, action) {
      state.GetClassNameList = action.payload;
    },

    getAddPhoto(state, action) {
      state.AddPhotoAlbum = action.payload;
    },

    resetgetAddPhotoMessage(state) {
      state.AddPhotoAlbum = "";
    },
    GetAllAlubumList(state, action) {
      state.GetAllAlbumNameList = action.payload;
      state.Loading = false;
    },
    DeleteAllAlbumList(state, action) {
      state.DeleteAllAlbumList = action.payload;
    },

    resetDeleteAllAlbumList(state) {
      state.DeleteAllAlbumList = "";
    },
    getLoading(state) {
      state.Loading = true
    }
  }
});

export const getAddPhoto =
  (data: IAddPhotoAlbumBody): AppThunk =>
    async (dispatch) => {
      const response = await GetAddPhotoApi.GetAddPhoto(data);
      dispatch(AddPhotoSlice.actions.getAddPhoto(response.data));
    };

    export const resetgetAddPhoto =
    (): AppThunk =>
      async (dispatch) => {
        dispatch(AddPhotoSlice.actions.resetgetAddPhotoMessage());
      }

export const getClassNameList =
  (): AppThunk =>
    async (dispatch) => {
      const response = await GetAddPhotoApi.GetClassList();
     
      let getClass = response.data.map((item, i) => {
        console.log(item ,"Value")
        return {
          Id: i,
          Name: item.ClassName,
          Value: item.ClassId,
        }
      })
      
      dispatch(AddPhotoSlice.actions.GetClassNameList(getClass));
    };

export const GetAllAlbumNameList =
  (): AppThunk =>
    async (dispatch) => {
      dispatch(AddPhotoSlice.actions.getLoading());
      const response = await GetAddPhotoApi.GetAllAlbumList();
      let getAllAlbum = response.data.map((item, i) => {
        return {
          Id: item.Id,
          Text1: item.Title,
          Text2: item.AlbumDate.split(' ')[0],
          Text3: item.Class

        }
      })
      dispatch(AddPhotoSlice.actions.GetAllAlubumList(getAllAlbum));
    };

    export const DeleteAllAlbumList =
    (data:IDeletePhotoAlbumBody): AppThunk =>
    async (dispatch) => {
      const response = await GetAddPhotoApi.DeleteAlbumList(data);
      dispatch(AddPhotoSlice.actions.DeleteAllAlbumList(response.data));
    };

    export const resetDeleteAlbumListMessage =
    (): AppThunk =>
      async (dispatch) => {
        dispatch(AddPhotoSlice.actions.resetDeleteAllAlbumList());
      }

export default AddPhotoSlice.reducer
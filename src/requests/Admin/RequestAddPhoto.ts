import { createSlice } from '@reduxjs/toolkit'
import { AppThunk } from 'src/store';
import { IAddPhotoAlbumBody, IAddPhotoAlbumResult, IGetClassNameListBody, IGetClassNameListResult, IGetAllAlbumNameListBody, IGetAllAlbumNameListResult, IDeletePhotoAlbumBody, IDeletePhotoAlbumResult } from "src/Interface/Admin/IAddPhoto"
import GetAddPhotoApi from 'src/api/Admin/ApiAddPhoto';


const AddPhotoSlice = createSlice({
  name: 'AddPhoto',
  initialState: {
    AddPhotoAlbum: {},
    GetClassNameList: [],
    GetAllAlbumNameList: [],
    DeleteAllAlbumList: {}

  },
  reducers: {
    GetClassNameList(state, action) {
      state.GetClassNameList = action.payload;
    },

    getAddPhoto(state, action) {
      state.AddPhotoAlbum = action.payload;
    },
    GetAllAlubumList(state, action) {
      state.GetAllAlbumNameList = action.payload;
    },
    DeleteAllAlbumList(state, action) {
      state.DeleteAllAlbumList = action.payload;
    }
  }
});

export const getAddPhoto =
  (data: IAddPhotoAlbumBody): AppThunk =>
    async (dispatch) => {
      const response = await GetAddPhotoApi.GetAddPhoto(data);
      dispatch(AddPhotoSlice.actions.getAddPhoto(response.data));
    };

export const getClassNameList =
  (data: IGetClassNameListBody): AppThunk =>
    async (dispatch) => {
      const response = await GetAddPhotoApi.GetClassList(data);
      let getClass = response.data.map((item, i) => {
        return {
          Id: i,
          Name: item.ClassName,
          Value: item.ClassName,
        }
      })
      dispatch(AddPhotoSlice.actions.GetClassNameList(getClass));
    };

export const GetAllAlbumNameList =
  (data: IGetAllAlbumNameListBody): AppThunk =>
    async (dispatch) => {
      const response = await GetAddPhotoApi.GetAllAlbumList(data);
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


export default AddPhotoSlice.reducer
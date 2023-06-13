import { createSlice } from '@reduxjs/toolkit'
import { AppThunk } from 'src/store';
import{IAddPhotoAlbumBody,IAddPhotoAlbumResult,IGetClassNameListBody,IGetClassNameListResult} from "src/Interface/Admin/IAddPhoto"
import GetAddPhotoApi from 'src/api/Admin/ApiAddPhoto';


const AddPhotoSlice = createSlice({
    name: 'AddPhoto',
    initialState:{
      
      AddPhotoAlbum:{},
      GetClassNameList:[]
      
     
    },
    reducers: {
      GetClassNameList(state,action){
        state.GetClassNameList=action.payload;
      },
     
      getAddPhoto(state,action){
        state.AddPhotoAlbum=action.payload;
      },
    }   
  });

  export const getAddPhoto =
  (data:IAddPhotoAlbumBody): AppThunk =>
  async (dispatch) => {
    const response = await GetAddPhotoApi.GetAddPhoto(data);
    dispatch(AddPhotoSlice.actions.getAddPhoto(response.data));
  };

  export const getClassNameList =
  (data:IGetClassNameListBody): AppThunk =>
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

  export default AddPhotoSlice.reducer
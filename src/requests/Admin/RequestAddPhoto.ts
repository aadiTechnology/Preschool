import { createSlice } from '@reduxjs/toolkit'
import { AppThunk } from 'src/store';
import{IAddPhotoAlbumBody,IAddPhotoAlbumResult} from "src/Interface/Admin/IAddPhoto"
import GetAddPhotoApi from 'src/api/Admin/ApiAddPhoto';


const AddPhotoSlice = createSlice({
    name: 'AddPhoto',
    initialState:{
      
      AddPhotoAlbum:{},
      
     
    },
    reducers: {
     
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

  export default AddPhotoSlice.reducer
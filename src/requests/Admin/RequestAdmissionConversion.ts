import { createSlice } from '@reduxjs/toolkit'
import { AppThunk } from 'src/store';
import{IAdmissionConversionBody,IAdmissionConversionResult} from   "src/Interface/Admin/IAdmissionConversion"
import AdmissionConversionApi from "src/api/Admin/ApiAdmissionConversion"


const AdmissionConversionSlice = createSlice({
    name: 'AdmissionConversion',
    initialState:{
      AdmissionConversion:{}
      
     
    },
    reducers: {
     
      AdmissionConversion(state,action){
        state.AdmissionConversion=action.payload;
      },
    }   
  });

  export const AdmissionConversion =
  (data:IAdmissionConversionBody): AppThunk =>
  async (dispatch) => {
    const response = await AdmissionConversionApi.AddAdmissionConversion(data);
    dispatch(AdmissionConversionSlice.actions.AdmissionConversion(response.data));
  };

  export default AdmissionConversionSlice.reducer
import { createSlice } from '@reduxjs/toolkit'
import { AppThunk } from 'src/store';
import{IAdmissionConversionBody} from   "src/Interface/Admin/IAdmissionConversion"
import AdmissionConversionApi from "src/api/Admin/ApiAdmissionConversion"


const AdmissionConversionSlice = createSlice({
    name: 'AdmissionConversion',
    initialState:{
      AdmissionConversion:'',
      Loading :true
     
    },
    reducers: {
     
      AdmissionConversion(state,action){
        state.AdmissionConversion=action.payload;
        state.Loading = false;
      },

      resetgetAdmissionConversion(state){
        state.AdmissionConversion='';
        state.Loading = false;
      },
      getLoading(state) {
        state.Loading = true
      }
    }   
  });

  export const AdmissionConversion =
  (data:IAdmissionConversionBody): AppThunk =>
  async (dispatch) => {
    dispatch(AdmissionConversionSlice.actions.getLoading());
    const response = await AdmissionConversionApi.AddAdmissionConversion(data);
    dispatch(AdmissionConversionSlice.actions.AdmissionConversion(response.data));
  };

  export const resetgetAddAdmissionConversion =
  (): AppThunk =>
    async (dispatch) => {
      dispatch(AdmissionConversionSlice.actions.resetgetAdmissionConversion());
    }

  export default AdmissionConversionSlice.reducer
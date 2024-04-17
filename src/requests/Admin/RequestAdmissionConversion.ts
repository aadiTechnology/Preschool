import { createSlice } from '@reduxjs/toolkit'
import { AppThunk } from 'src/store';
import{IAdmissionConversionBody ,IGetAdmissionDetailsBody} from   "src/Interface/Admin/IAdmissionConversion"
import AdmissionConversionApi from "src/api/Admin/ApiAdmissionConversion"


const AdmissionConversionSlice = createSlice({
    name: 'AdmissionConversion',
    initialState:{
      AdmissionConversion:'',
      AdmissionDetail:[],
      Loading :true
     
    },
    reducers: {
     
      AdmissionConversion(state,action){
        state.AdmissionConversion=action.payload;
        state.Loading = false;
      },

      GetAdmissionDetails(state,action){
        state.AdmissionDetail=action.payload;
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

  export const GetAdmissionDetail =
  (data:IGetAdmissionDetailsBody): AppThunk =>
  async (dispatch) => {
    dispatch(AdmissionConversionSlice.actions.getLoading());
    const response = await AdmissionConversionApi.AdmissionDetails(data);
    let AdmissionList = response.data.map((item ,i)=>{
      return{
          Id: item.Id,
          Text1: item.StudentName,
          Text2: item.FatherName,
          Text3: item.MotherName,
        }
     })
   dispatch(AdmissionConversionSlice.actions.GetAdmissionDetails(AdmissionList));
  };

  export const resetgetAddAdmissionConversion =
  (): AppThunk =>
    async (dispatch) => {
      dispatch(AdmissionConversionSlice.actions.resetgetAdmissionConversion());
    }

  export default AdmissionConversionSlice.reducer
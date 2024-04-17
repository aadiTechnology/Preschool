import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import { IGetClassNameListBody,IGetClassDivisionListBody} from "src/Interface/ClassNameList/ICLassNameList";
import ClassNameListApi from 'src/api/ClassNameList/ApiClassNameList';

const ClassNameSlice = createSlice({
    name : 'ClassName',
 
    initialState:{
        ClassNameResult:[],
        GetDivisionList:[],
       
    },
     reducers : {
      StudentDetailsgetClassName(state , action)
       {
         state.ClassNameResult=action.payload;
       },

       ClassDivisionList(state , action)
       {
           state.GetDivisionList=action.payload;
       },
    }
 });
 
 export const StudentDetailsgetClassName =
   (data: IGetClassNameListBody): AppThunk =>
     async (dispatch) => {
       const response = await ClassNameListApi.ClassName(data);
       let responsedata = response.data.map((item, i) => {
        return {
          Id:item.ClassId,
          Name: item.ClassName,
          Value: item.ClassId,
        }
      })
      dispatch(ClassNameSlice.actions.StudentDetailsgetClassName(responsedata));
     };

     export const ClassDivisionList =
  (data: IGetClassDivisionListBody): AppThunk =>
    async (dispatch) => {
      const response = await ClassNameListApi. DivisionList(data);
      let responsedata = response.data.map((item, i) => {
        return {
          Id:item.ClassId,
          Name: item.DivisionName,
          Value: item.DivisionName,
        }
      })
      dispatch(ClassNameSlice.actions.ClassDivisionList(responsedata));
    };

    
      export default ClassNameSlice.reducer
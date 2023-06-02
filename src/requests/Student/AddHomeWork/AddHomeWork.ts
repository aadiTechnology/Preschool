import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'src/store';
import {ISchoolListBody} from 'src/Interface/SchoolList';
import SchoolListApi from 'src/api/Student/SchoolList'

const HomeWorkslice = createSlice({
  name: 'SchoolList',
  initialState:{
    HomeWork:[],
   
  },
  reducers: {
    getHomeWork(state,action){
      state.HomeWork=action.payload;
    },
  }   
});


export const getHomeWork =
  (): AppThunk => async (dispatch) => {
    
  const DropDown = [ 
    { 
      id:1,
       Name:"SR KG",
       Value:''
    },
    { id:2,
      Name:"SR KG1",
      Value:''
    },
    { 
        id:3,
        Name:"SR KG3",
        Value:''
      },
      

  
    ];
    const response = await DropDown;
    console.log(response)
    dispatch(HomeWorkslice.actions.getHomeWork(response));
  };



export default HomeWorkslice.reducer

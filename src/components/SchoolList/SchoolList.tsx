import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import DropDown from 'src/library/DropDown/DropDown';
import { Box } from '@mui/material';
import PageHeader from 'src/library/heading/pageHeader'
import {getSchoolList} from 'src/requests/Student/SchoolList/SchoolList';
import { ISchoolListBody } from 'src/Interface/SchoolList';


function SchoolList() {
  
    const dispatch = useDispatch();
    const GetSchoolList: any = useSelector(
      (state: RootState) => state.SchoolList.SchoolList
    );
     console.log("GetSchoolList",GetSchoolList)
    const getSchoolListBody: ISchoolListBody =
    {
        asSchoolId:"Default",
   
    }

 
    useEffect(() => {
        dispatch(getSchoolList(getSchoolListBody));
      }, []);
    
      const [item, setItem] = useState('');

    const ClickItem = (value) => {
        setItem(value);
    };
  return (
    <div>
     <PageHeader heading={'School List'} />
     <Box sx={{ display:"flex" ,alignItems:"center" , justifyContent:"center"}}>
      {GetSchoolList.length>0 &&
     <DropDown itemList={GetSchoolList} ClickItem={ClickItem} DefaultValue={item} Label={'Select School'}/>
      }
     </Box>
      
    </div>
  )
}

export default SchoolList
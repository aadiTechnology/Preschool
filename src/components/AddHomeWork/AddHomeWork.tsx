import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { Card, Container, TextField, Box, Button, Typography } from '@mui/material'
import DropDown from 'src/library/DropDown/DropDown'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { getClassNameList, getAddHomework, getDetailsList, getDeleteHomework, getHomeworkListForEdit } from 'src/requests/Teacher/RequestAddHomeWork';
import { IGetClassNameListBody, IGetAddHomeworkBody, IGetDetailsListBody, IDeleteHomeworkBody, IHomeworkListForEditBody } from 'src/Interface/Teacher/IAddHomework';
import { toast } from 'react-toastify';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TabulerCard from 'src/library/Card/TabulerCard';
import { toolbarOptions } from '../Common/util';


function AddHomeWork() {

     const GetHomeWork: any = useSelector(
        (state: RootState) => state.AddHomeWork.ClassNameList
    );

    const GetHomeWorkDetailsList: any = useSelector(
        (state: RootState) => state.AddHomeWork.DetailsList
    );

    console.log(GetHomeWorkDetailsList , "GetHomeWorkDetailsList")

    const GetAddHomework: any = useSelector(
        (state: RootState) => state.AddHomeWork.AddHomework
    );

    const GetEditList: any = useSelector(
        
        (state: RootState) => state.AddHomeWork.HomeworkListForEdit
    );
    

    console.log(GetEditList , "GetEditList")

    const dispatch = useDispatch();
    const [subjectDescription, setSubjectDescription] = useState('')
    const [selectclass, setSelectClass] = useState('');
    const [selectdate, setSelectDate] = useState('');
    const [errordescription, setErrordescription] = useState('')
    const [errorselectdate, setErrorselectdate] = useState('')
    const [editing, setEditing] = useState(GetEditList);
    const handleContentChange = (value) => {
        setSubjectDescription(value);
     };
    const ClickItem = (value) => {
        setSelectClass(value);
    };



    const GetClassNameListBody: IGetClassNameListBody =
    {
        Id: 0
    }

    const GetAddHomeworkBody: IGetAddHomeworkBody =
    {
        Class: selectclass,
        SubjectName: '',
        SubjectDescription: subjectDescription,
        AssignDate: selectdate,
        Attachment: '',
        Camera: ''
    }

    const GetDetailsListBody: IGetDetailsListBody =
    {
        Id: 0
    }

    useEffect(() => {
        dispatch(getClassNameList(GetClassNameListBody));
        dispatch(getDetailsList(GetDetailsListBody));
    }, [])

    useEffect(() => {
        if(GetEditList!==null){
        setSelectDate(GetEditList.AssignDate)
        setSelectClass("2")
    }
    }, [GetEditList])

    useEffect(() => {
      toast.success(GetAddHomework)
      dispatch(getDetailsList(GetDetailsListBody));
    }, [GetAddHomework])
  
 
    const Edit = (Id) => {
      
        setEditing(GetEditList);
        console.log(GetEditList)
          const GetHomeworkEditBody: IHomeworkListForEditBody =
          {
              Id: Id
          }
          dispatch(getHomeworkListForEdit(GetHomeworkEditBody));
  
         
      }
  

    const onAddHomeWork = () => {
        let isValid = true;

        if (subjectDescription === '') {
            setErrordescription('Field is required');
            isValid = false;
        } else {
            setErrordescription('');
        }

        if (selectdate === '') {
            setErrorselectdate('Field is required');
            isValid = false;
        } else {
            setErrorselectdate('');
        }

        if (isValid) {
            dispatch(getAddHomework(GetAddHomeworkBody));
            setSubjectDescription('');
            setSelectClass('');
            setSelectDate('');
        }
    };

const clickDelete = () =>{
    dispatch(getDetailsList(GetDetailsListBody));

}

    return (
        <Container>
            <PageHeader heading={'AddHomeWork'} />
            <Card>
                <DropDown itemList={GetHomeWork} ClickItem={ClickItem} DefaultValue={selectclass} Label={'Select Class'} />
                <br></br>
                <ReactQuill value={subjectDescription} onChange={handleContentChange} modules={toolbarOptions} />
                {errordescription}
                <TextField type="date" value={selectdate} onChange={(e) => setSelectDate(e.target.value)} />
                {errorselectdate}
                <Box mt={2}>
                    <input type="file" ></input>
                </Box>
                <Button sx={{ mt: 2 }} onClick={onAddHomeWork}>Save</Button>
            </Card>
            <br></br>
            <TabulerCard homeWorkList={GetHomeWorkDetailsList} 
            onEdit={Edit} clickDelete={clickDelete}/>
        
        </Container>

    )
}

export default AddHomeWork
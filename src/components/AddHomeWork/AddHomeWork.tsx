import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { Card, Container, TextField, Box, Button, Typography } from '@mui/material'
import DropDown from 'src/library/DropDown/DropDown'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { getClassNameList, getAddHomework, getHomeworkListForEdit, resetAddHomeworkMessage ,getSubjectNameList} from 'src/requests/Teacher/RequestAddHomeWork';
import { IGetClassNameListBody, IGetAddHomeworkBody, IGetDetailsListBody, IDeleteHomeworkBody, IHomeworkListForEditBody ,IGetSubjectNameBody} from 'src/Interface/Teacher/IAddHomework';
import { toast } from 'react-toastify';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toolbarOptions } from '../Common/util';
import SuspenseLoader from 'src/layouts/Components/SuspenseLoader';
import ErrorMessageForm from 'src/library/ErrorMessage/ErrorMessageForm';
import AddHomeworkList from './AddHomeworkList';


function AddHomeWork() {

    const GetHomeWork: any = useSelector((state: RootState) => state.AddHomeWork.ClassNameList);
    const GetSubject: any = useSelector((state: RootState) => state.AddHomeWork.SubjectList);
    const GetAddHomework: any = useSelector((state: RootState) => state.AddHomeWork.AddHomework);
    const GetEditList: any = useSelector((state: RootState) => state.AddHomeWork.HomeworkListForEdit);

    const loading = useSelector((state: RootState) => state.AddHomeWork.Loading);
    
    const dispatch = useDispatch();
    const [Id, setId] = useState(0)
    const [subjectDescription, setSubjectDescription] = useState('')
    const [selectclass, setSelectClass] = useState('');
    const [selectsubject, setSelectSubject] = useState(0);
    const [selectdate, setSelectDate] = useState('');
    const [errordescription, setErrordescription] = useState('')
    const [errorselectdate, setErrorselectdate] = useState('')
    const [editing, setEditing] = useState(GetEditList);


    const ClickItem = (value) => {
        setSelectClass(value);
    };

    const ClickSubjectItem = (value) => {
        setSelectSubject(value);
    };

    const GetClassNameListBody: IGetClassNameListBody = { Id: 0 }

    const GetAddHomeworkBody: IGetAddHomeworkBody =
    {
        Id: Id,
        ClassId: parseInt(selectclass),
        SubjectId: selectsubject,
        SubjectDescription: subjectDescription,
        AssignDate: selectdate,
        AcademicId: 4,
        Attachment: '',
        Camera: '',
        UserId: 1,
        UserRoleId: 1

    }

  

    useEffect(() => {
        dispatch(getClassNameList(GetClassNameListBody));
        dispatch(getSubjectNameList());
    }, [])

    useEffect(() => {
        if (GetEditList !== null) {
            setId(GetEditList.Id)
            setSelectDate(GetEditList.AssignDate)
            setSubjectDescription(GetEditList.SubjectDescription)
            setSelectClass(GetEditList.ClassId)
        }
    }, [GetEditList])

    const clickEdit = (Id) => {
        setEditing(GetEditList);
        const GetHomeworkEditBody: IHomeworkListForEditBody = { Id: Id }
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
            console.log(GetAddHomeworkBody,"GetAddHomeworkBody")
            dispatch(getAddHomework(GetAddHomeworkBody));
            setSubjectDescription('');
            setSelectClass('');
            setSelectDate('');
        }
    };

    useEffect(() => {
        if (GetAddHomework !== '') {
          toast.success(GetAddHomework, { toastId: 'success1' })
          dispatch(resetAddHomeworkMessage());
        }
      }, [GetAddHomework])
    
    return (
        <Container>
            <PageHeader heading={'AddHomeWork'} />
            <Card>
                <DropDown itemList={GetHomeWork} ClickItem={ClickItem} DefaultValue={selectclass} Label={'Select Class'} />
                <br></br>
                <DropDown itemList={GetSubject} ClickItem={ClickSubjectItem} DefaultValue={selectsubject} Label={'Select Subject'} />
                <br></br>
                <ReactQuill value={subjectDescription} onChange={(value) => setSubjectDescription(value)} modules={toolbarOptions} />
                <ErrorMessageForm  error={errordescription}/>
                <TextField type="date" value={selectdate} onChange={(e) => setSelectDate(e.target.value)} />
                <ErrorMessageForm error={errorselectdate}/>
                <Box mt={2}>
                    <input type="file" ></input>
                </Box>
                <Button sx={{ mt: 2 }} onClick={onAddHomeWork}>Save</Button>
            </Card>
            <br></br>
            {
                loading ? <SuspenseLoader /> :
                    <AddHomeworkList clickEdit={clickEdit} />
            }

        </Container>

    )
}

export default AddHomeWork
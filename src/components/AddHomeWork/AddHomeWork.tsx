import React, { useState, useEffect, useRef } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { Card, Container, TextField, Box, Button, Typography,Grid } from '@mui/material'
import DropDown from 'src/library/DropDown/DropDown'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { getClassNameList, getAddHomework, getHomeworkListForEdit, resetAddHomeworkMessage, getSubjectNameList, resetHomeworkListForEdit } from 'src/requests/Teacher/RequestAddHomeWork';
import { IGetClassNameListBody, IGetAddHomeworkBody, IGetDetailsListBody, IDeleteHomeworkBody, IHomeworkListForEditBody, IGetSubjectNameBody } from 'src/Interface/Teacher/IAddHomework';
import { toast } from 'react-toastify';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ChangeFileIntoBase64, CheckFileValidation, IsDateValid, IsFutureDateValid, IsTodayFutureDateValid, getDateFormatted, getInputDateFormatted, getTodayformatDate, toolbarOptions } from '../Common/util';
import SuspenseLoader from 'src/layouts/Components/SuspenseLoader';
import ErrorMessageForm from 'src/library/ErrorMessage/ErrorMessageForm';
import AddHomeworkList from './AddHomeworkList';
import { Styles } from 'src/assets/style/CommonStyle';
import Icon1 from 'src/library/icon/icon1';
import { ButtonPrimary } from 'src/library/StyledComponents/CommonStyled';
import SendIcon from '@mui/icons-material/Send';

function AddHomeWork() {

    const GetHomeWork: any = useSelector((state: RootState) => state.AddHomeWork.ClassNameList);
    const GetSubject: any = useSelector((state: RootState) => state.AddHomeWork.SubjectList);
    const GetAddHomework: any = useSelector((state: RootState) => state.AddHomeWork.AddHomework);
    const GetEditList: any = useSelector((state: RootState) => state.AddHomeWork.HomeworkListForEdit);

    const loading = useSelector((state: RootState) => state.AddHomeWork.Loading);

    const dispatch = useDispatch();
    const aRef = useRef(null);
    const classes = Styles();
    const [Id, setId] = useState(0)
    const [subjectDescription, setSubjectDescription] = useState('')
    const [selectclass, setSelectClass] = useState(sessionStorage.getItem("ClassDivisionId"));
    const [selectclasserror, setSelectClasserror] = useState('');
    const [selectsubject, setSelectSubject] = useState('');
    const [selectsubjecterror, setSelectSubjecterror] = useState('');
    const [selectdate, setSelectDate] = useState(getTodayformatDate());
    const [dateerror, setDateerror] = useState('');
    const [descriptionerror, setdescriptionerror] = useState('')
    const [selectdateerror, setSelectdateerror] = useState('')
    const [fileData, setFileData] = useState('');
    const [Attachment, setAttachment] = useState('');
    const [fileName, setFileName] = useState('');
    const [Error, setError] = useState('');
    const validFiles = ['jpg', 'jpeg', 'png', 'bmp']

    // const GetClassNameListBody: IGetClassNameListBody = { Id: 0 }


    const ClickItem = (value) => {
        setSelectClass(value);
    };

    const ClickSubjectItem = (value) => {
        setSelectSubject(value);
    };

    const changeFile = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            let isValid = CheckFileValidation(e.target.files[0], ['jpg', 'jpeg', 'png', 'bmp', 'pdf'], 2000000)
            setError(isValid)
            if (isValid === null) {
                let base64URL: any = await ChangeFileIntoBase64(e.target.files[0]);
                setFileData(base64URL.slice(base64URL.indexOf(',') + 1));
                setFileName(e.target.files[0].name);
            }
            else {
                aRef.current.value = null;
            }
        }
    }

    const GetAddHomeworkBody: IGetAddHomeworkBody =
    {
        Id: Id,
        ClassDivisionId: parseInt(selectclass),
        SubjectId: parseInt(selectsubject),
        SubjectDescription: subjectDescription,
        AssignDate: selectdate,
        AcademicId: 4,
        BinaryData: fileData,
        AttachmentName: fileName,
        Attachment: Attachment,
        Camera: '',
        UserId: 1,
        UserRoleId: 1,
    }



    useEffect(() => {
        // dispatch(getClassNameList(GetClassNameListBody));
        dispatch(getSubjectNameList());
    }, [])

    useEffect(() => {
        if (GetEditList !== null) {
            setId(GetEditList.Id)
            setSelectDate(getDateFormatted(GetEditList.AssignDate))
            setSubjectDescription(GetEditList.SubjectDescription)
            setSelectClass(GetEditList.ClassDivisionId)
            setSelectSubject(GetEditList.SubjectId)
            if (GetEditList.AttachmentName != null) {
                setAttachment(GetEditList.Attachment)
                setFileName(GetEditList.AttachmentName)
            }
            resetError();
            dispatch(resetHomeworkListForEdit());

        }
    }, [GetEditList])

    const clickEdit = (Id) => {
        const GetHomeworkEditBody: IHomeworkListForEditBody = { Id: Id }
        dispatch(getHomeworkListForEdit(GetHomeworkEditBody));
    }

    const onAddHomeWork = () => {
        let isValid = true;

        if (subjectDescription === '') {
            setdescriptionerror('Field is required');
            isValid = false;
        } else {
            setdescriptionerror('');
        }

        if (IsAssignDateValid(selectdate) !== '') {
            setSelectdateerror(IsAssignDateValid(selectdate))
            isValid = false;
        }
        if (selectclass === '') {
            setSelectClasserror('Field is required');
            isValid = false;
        } else {
            setSelectClasserror('');
        }
        if (selectsubject === '') {
            setSelectSubjecterror('Field is required');
            isValid = false;
        } else {
            setSelectSubjecterror('');
        }

        if (isValid) {
            dispatch(getAddHomework(GetAddHomeworkBody));
            setSubjectDescription('');
            setSelectSubject('');
            setSelectDate(getTodayformatDate());
            setFileData('');
            setFileName('');
            aRef.current.value = ""
        }
    };

    const resetError = () => {
        setdescriptionerror('');
        setSelectdateerror('');
        setSelectSubjecterror('');
        setSelectClasserror('');
    }
    useEffect(() => {
        if (GetAddHomework !== '') {
            toast.success(GetAddHomework, { toastId: 'success1' })
            dispatch(resetAddHomeworkMessage());
        }
    }, [GetAddHomework])

    const IsAssignDateValid = (value) => {
        let msg = IsDateValid(value);
        if (msg === '')
            msg = IsTodayFutureDateValid(value);
        return msg
    }
    return (
        <Container>
            <PageHeader heading={'Add Homework'} />
            <Card>
                {/* <DropDown itemList={GetHomeWork} ClickItem={ClickItem} DefaultValue={selectclass} Label={'Select Class'} /> */}
                <ErrorMessageForm error={selectclasserror} />
                <br></br>
                <DropDown itemList={GetSubject} ClickItem={ClickSubjectItem} DefaultValue={selectsubject} Label={'Select Subject'} />
                <ErrorMessageForm error={selectsubjecterror} />
                <br></br>
                <ReactQuill value={subjectDescription} modules={toolbarOptions}
                    onChange={(value) => setSubjectDescription(value)} />
                <ErrorMessageForm error={descriptionerror} />
                {/* <TextField value={selectdate} onChange={(e) => setSelectDate(e.target.value)}
                    onBlur={(e) => { setSelectdateerror(IsAssignDateValid(e.target.value)) }} />
                (date format dd MMM yyyy e.g. <b>23 Aug 2023</b>)
                <ErrorMessageForm error={selectdateerror} /> */}
                <Box mt={2}>
                    <input type="file" ref={aRef} onChange={changeFile} ></input>
                </Box>
                {fileName}
                <Box className={classes.iIconSupport}>
                    <Icon1 Note={"Supports only " + validFiles.join(', ') + " files types up to 2 MB"} />
                </Box>
                {Error && <ErrorMessageForm error={Error} />}
                  <Grid container>
                    <Grid item xs={12} md={3} sx={{float:"right"}}>
                        
                    <ButtonPrimary  onClick={onAddHomeWork} >Submit&nbsp;<SendIcon fontSize="small"/></ButtonPrimary>
                    </Grid>
                  </Grid>
              
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
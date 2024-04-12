import React, { useState, useEffect, useRef } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { Card, Container, TextField, Box, Button, Typography, Grid } from '@mui/material'
import DropDown from 'src/library/DropDown/DropDown'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { getSchoolNoticeList, resetSchoolNoticeMessage, resetSchoolNoticeListForEdit, SchoolNoticeses, getSchoolNoticeListForEdit } from 'src/requests/AddSchoolNotice/RequestAddSchoolNotice';
import { IAddSchoolNoticeBody, ISchoolNoticeListForEditBody } from 'src/Interface/AddSchoolNotice/IAddSchoolNotice';
import { IGetClassNameListBody } from 'src/Interface/ClassNameList/ICLassNameList';
import { StudentDetailsgetClassName } from 'src/requests/ClassNameList/RequestClassNameList'
import { toast } from 'react-toastify';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ChangeFileIntoBase64, CheckFileValidation, IsDateValid, IsFutureDateValid, IsTodayFutureDateValid, getDateFormatted, getInputDateFormatted, getTodayformatDate, toolbarOptions } from '../Common/util';
import SuspenseLoader from 'src/layouts/Components/SuspenseLoader';
import ErrorMessageForm from 'src/library/ErrorMessage/ErrorMessageForm';
import AddSchoolNoticeList from './AddSchoolNoticeList';
import { Styles } from 'src/assets/style/CommonStyle';
import Icon1 from 'src/library/icon/icon1';
import { ButtonPrimary } from 'src/library/StyledComponents/CommonStyled';
import SendIcon from '@mui/icons-material/Send';

function AddSchoolNotice() {
  const dispatch = useDispatch();
  const aRef = useRef(null);
  const classes = Styles();
  const [Id, setId] = useState(0);
  const [userId, setUserId] = useState(sessionStorage.getItem("UserId"))
  const [Title, setTitle] = useState('');
  const [Titleerror, setTitleerror] = useState('');
  const [NoticeDescription, setNoticeDescription] = useState('')
  const [subjectDescription, setSubjectDescription] = useState('')
  const [selectclass, setSelectClass] = useState(sessionStorage.getItem("ClassDivisionId"));
  const [selectclasserror, setSelectClasserror] = useState('');
  const [selectdate, setSelectDate] = useState(getTodayformatDate());
  const [dateerror, setDateerror] = useState('');
  const [descriptionerror, setdescriptionerror] = useState('')
  const [selectdateerror, setSelectdateerror] = useState('')
  const [ChooseFile, setChooseFile] = useState('');
  const [fileData, setFileData] = useState();
  const [Attachment, setAttachment] = useState('');
  const [fileName, setFileName] = useState('');
  const [Error, setError] = useState('');
  const validFiles = ['jpg', 'jpeg', 'png', 'bmp']
  const [ClassId, setClassId] = useState(0);


  const ClassNameList = useSelector((state: RootState) => state.ClassNameList.ClassNameResult);
  console.log(ClassNameList, "ClassNameList")

  const SchoolNotice = useSelector((state: RootState) => state.AddSchoolNotice.SchoolNotice);
  console.log(SchoolNotice, "SchoolNotice");

  const GetEditList: any = useSelector((state: RootState) => state.AddSchoolNotice.EditSchoolNoticeList);
  console.log("GetEditList", GetEditList)


  // const loading = useSelector((state: RootState) => state.AddHomeWork.Loading);


  const ClickClassItem = (value) => {
    setClassId(value);
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


  const ClassNameBody: IGetClassNameListBody =
  {
    "Id": ClassId
  }
  useEffect(() => {
    dispatch(StudentDetailsgetClassName(ClassNameBody))
  }, [ClassId]);

  const SchoolNoticeDetails: IAddSchoolNoticeBody =
  {
    Id: Id,
    ClassId: ClassId,
    NoticeName: Title,
    NoticeDescription: NoticeDescription,
    AssignDate: selectdate,
    BinaryData: fileData,
    AttachmentName: fileName,
    Attachment: Attachment,
    UserId: 181
  }



  // const ClickItem = (value) => {
  //   setSelectClass(value);
  // };

  // const ClickSubjectItem = (value) => {
  //   setSelectSubject(value);
  // };

  // useEffect(() => {
  //   // dispatch(SchoolNoticeses(IGetClassNameListBody));
  //    dispatch(SchoolNoticeses());
  // }, [])

  useEffect(() => {
    if (GetEditList !== null) {
      setId(GetEditList.Id)
      setSelectClass(GetEditList.ClassId)
      setClassId(GetEditList.ClassDivisionId)
      setSelectDate(getDateFormatted(GetEditList.AssignDate))
      setTitle(GetEditList.NoticeName)
      setNoticeDescription(GetEditList.NoticeDescription)
      if (GetEditList.AttachmentName != null) {
        setAttachment(GetEditList.Attachment)
        setFileData(GetEditList.Attachment)
        setFileName(GetEditList.AttachmentName)
      }
      resetError();
      dispatch(resetSchoolNoticeListForEdit());

    }
  }, [GetEditList])

  const clickEdit = (Id) => {
    const GetSchoolNoticeEditBody: ISchoolNoticeListForEditBody = { Id: Id }
    dispatch(getSchoolNoticeListForEdit(GetSchoolNoticeEditBody));
  }

  const onAddSchoolNotice = () => {
    let isValid = true;

    if (NoticeDescription === '') {
      setdescriptionerror('Field is required1');
      isValid = false;
    } else {
      setdescriptionerror('');
    }

    // if (IsAssignDateValid(selectdate) !== '') {
    //   alert('wwwwwhere'+selectdate)
    //   setSelectdateerror(IsAssignDateValid(selectdate))
    //     isValid = false;
    // }
    if (ClassId === 0) {
      alert('here')
      setSelectClasserror('Field is required2');
      isValid = false;
    } else {
      setSelectClasserror('');
    }
    alert(isValid)
    if (isValid) {
      toast.success("School Notice Added Successfully", { toastId: 'success1' })
      dispatch(SchoolNoticeses(SchoolNoticeDetails));
      setNoticeDescription('');
      setSelectDate(getTodayformatDate());
      setFileData(null);
      setFileName('');
      aRef.current.value = ""
    }

  };

  const resetError = () => {
    setdescriptionerror('');
    setSelectdateerror('');
    setSelectClasserror('');
  }
  useEffect(() => {
    if (SchoolNotice !== '') {
      toast.success(ClassNameList, { toastId: 'success1' })
      dispatch(resetSchoolNoticeMessage());
    }
  }, [ClassNameList])

  // const IsAssignDateValid = (value) => {
  //   let msg = IsDateValid(value);
  //   if (msg === '')
  //     msg = IsTodayFutureDateValid(value);
  //   return msg
  // }
  return (
    <Container>
            <Card>
        {/* <DropDown itemList={GetHomeWork} ClickItem={ClickItem} DefaultValue={selectclass} Label={'Select Class'} />  */}
        <Typography variant='h3' color={'success'} >

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h3> School Notice </h3>
          </div>
        </Typography>
        <ErrorMessageForm error={selectclasserror} />
        <br></br>
        {<DropDown itemList={ClassNameList} ClickItem={ClickClassItem} DefaultValue={ClassId} Label={'Select Class'} />}
        <br></br>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label={"Title:"} value={Title}
              onChange={(e) => setTitle(e.target.value)}
              variant="standard" error={Titleerror !== ''}
              helperText={Titleerror} > </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField type='date' label={"Date"} value={selectdate} focused onChange={(e) => { setSelectDate(e.target.value) }}
             /><br></br>
          </Grid>
        </Grid>
        <ReactQuill value={NoticeDescription} modules={toolbarOptions}
          onChange={(value) => setNoticeDescription(value)} />
        <ErrorMessageForm error={descriptionerror} />
        <Box mt={2}>
          <input type="file" ref={aRef} onChange={changeFile} ></input>
        </Box>
        {fileName}
        <Box className={classes.iIconSupport}>
          <Icon1 Note={"Supports only " + validFiles.join(', ') + " files types up to 5 MB"} />
        </Box>
        {Error && <ErrorMessageForm error={Error} />}
        <Grid container>
          <Grid item xs={12} md={3} sx={{ float: "right" }}>

            <ButtonPrimary onClick={onAddSchoolNotice} >Send&nbsp;<SendIcon fontSize="small" /></ButtonPrimary>
          </Grid>
        </Grid>

      </Card>
      <br></br>
      {

        <AddSchoolNoticeList clickEdit={clickEdit} />
      }

    </Container >

  )
}

export default AddSchoolNotice
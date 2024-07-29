import React, { useState, useEffect, useRef } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { Card, Container, TextField, Box, Button, Typography, Grid } from '@mui/material'
import CalendarField from "src/libraries/Training/CalendarField";
import InputField from "src/libraries/Training/InputField";
import Dropdown from "src/libraries/Training/Dropdown";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { IAddSchoolNotice } from 'src/Interface/SchoolNotice/ISchoolNotice';
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
import { getClass } from 'src/requests/Enquiry/RequestEnquiryList';
import { AddSchoolNoticeDetails, getSchoolNoticeDetails, resetSchoolNoticeDetails } from 'src/requests/SchoolNotice1/RequestSchoolNotice';
import { number } from 'prop-types';
import { getCalendarFormat } from '../Common/util';

function AddSchoolNotice() {
  const Class = useSelector((state: RootState) => state.Enquiry.Class);
  const AddSchoolNoticeMsg = useSelector((state: RootState) => state.SchoolNotice.AddSchoolNoticeMsg)
  const SchoolNoticeDetails = useSelector((state: RootState) => state.SchoolNotice.SchoolNoticeDetails)

  const [Id, setID] = useState('')
  const [ClassID, setClassID] = useState('0');
  const [Title, setTitle] = useState('');
  const aRef = useRef(null);
  const validFiles = ['jpg', 'jpeg', 'png', 'bmp'];
  const [error, setError] = useState('');
  const [fileData, setFileData] = useState('');
  const [fileName, setFileName] = useState('');
  const [NoticeDescription, setNoticeDescription] = useState('');
  const [selectdate, setSelectDate] = useState('');
  const [ClassErrorMessage, setClassErrorMessage] = useState('')
  const [TitleErrorMessage, setTitleErrorMessage] = useState('')
  const [descriptionerror, setDescriptionError] = useState('');
  const [selectdateErrorMessage, setselectdateErrorMessage] = useState('')
  const [fileDataErrorMessage, setfileDataErrorMessage] = useState('')
  const [fileNameErrorMessage, setfileNameErrorMessage] = useState('')

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClass())
    
  }, [dispatch]);

  useEffect(() => {
    if (AddSchoolNoticeMsg !== '') {
      toast.success(AddSchoolNoticeMsg);
      dispatch(resetSchoolNoticeDetails())
      clickCancel()
    }
  }, [AddSchoolNoticeMsg])

  useEffect(() => {
    if (Id !== '') {
      dispatch(getSchoolNoticeDetails({ ID: Number(Id) }))
    }
  }, [Id])

  useEffect(() => {
    if (SchoolNoticeDetails !== null) {
      setClassID(SchoolNoticeDetails.ClassId)
      setTitle(SchoolNoticeDetails.NoticeTitle)
      setNoticeDescription(SchoolNoticeDetails.NoticeDescription)
      setSelectDate(getCalendarFormat(SchoolNoticeDetails.NoticeDate))
      setFileName(SchoolNoticeDetails.NoticeFileName)
    }
    console.log(SchoolNoticeDetails)
  }, [SchoolNoticeDetails])

  const clickClass = (value) => {
    setClassID(value);
    setClassErrorMessage("");
  }

  const clickTitle = (value) => {
    setTitle(value);
    setTitleErrorMessage("");
  }

  const clickNoticeDate = (value) => {
    setSelectDate(value);
    setselectdateErrorMessage("");
  }

  const changeFile = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      let isValid = CheckFileValidation(e.target.files[0], ['jpg', 'jpeg', 'png', 'bmp', 'pdf'], 2000000)
      setError(isValid)
      if (isValid === null) {
        let base64URL: any = await ChangeFileIntoBase64(e.target.files[0]);
        setFileData(base64URL.slice(base64URL.indexOf(',') + 1));
        setFileName(e.target.files[0].name);
        setfileDataErrorMessage("");
      }
      else {
        aRef.current.value = null;
      }
    }
  }
  if (Id !== '') {
    console.log(Id)
  }
  const IsFormValid = () => {
    let isValid = true;
    if (ClassID === "0") {
      setClassErrorMessage("Please select student's class")
      isValid = false
    } else {
      setClassErrorMessage("")
    };
    if (Title === "") {
      setTitleErrorMessage("Please enter Notice Title")
      isValid = false
    } else {
      setTitleErrorMessage("");
    };
    if (selectdate === "") {
      setselectdateErrorMessage("Please select date of notice")
      isValid = false
    } else {
      setselectdateErrorMessage("");
    };
    if (NoticeDescription === "") {
      setDescriptionError("Please enter description of notice")
      isValid = false
    } else {
      setDescriptionError("");
    };
    if (aRef.current.value === "") {
      setFileName("")
      setfileDataErrorMessage("Please select file")
      setfileNameErrorMessage("Please select file")
      isValid = false
    } else {
      setfileDataErrorMessage("");
      setfileNameErrorMessage("");
    };

    return isValid
  }

  const clickSubmit = () => {
    const isFormValid = IsFormValid();
    if (isFormValid) {
      const AddSchoolNotice: IAddSchoolNotice = {
        ID: Id == '' ? 0 : Number(Id),
        ClassIds: ClassID,
        NoticeTitle: Title,
        NoticeDescription: NoticeDescription,
        NoticeFileName: fileName,
        BinaryData: fileData,
        NoticeDate: selectdate

      }
      dispatch(AddSchoolNoticeDetails(AddSchoolNotice))
      
      console.log(IsFormValid())
    }
    else {
      // If the form is not valid, show an error message
      toast.error('Please fill all required fields correctly.');
    }

  }
  const clickEdit = (Id) => {
    setID(Id)
  }

  const clickCancel = () => {alert('cancel')
    setClassID('0')
    setID('0')
    setTitle('')
    setSelectDate('')
    setNoticeDescription('')
    setError('')
    setFileName('')
    setClassErrorMessage('')
    setTitleErrorMessage('')
    setDescriptionError('')
    setselectdateErrorMessage('')
    setfileDataErrorMessage('')
  }

  return (
    <>
      <PageHeader heading={'Add School Notice'} />
      <Container>
        <Card>
          {/* <DropDown itemList={GetHomeWork} ClickItem={ClickItem} DefaultValue={selectclass} Label={'Select Class'} />  */}
          <Typography variant='h3' color={'success'} >
          </Typography>

          <br></br>
          <Dropdown
            ItemList={Class}
            Label=""
            DefaultValue={ClassID}
            ClickItem={clickClass}
            Placeholder="Select Class"
            ErrorMessage={ClassErrorMessage}
          />
          <Grid container spacing={2} rowSpacing={2}>
            <Grid item xs={6} sm={6}>
              {/* <TextField label={"Title:"} value={Title}
                onChange={(e) => setTitle(e.target.value) }
                variant="standard" error={TitleErrorMessage !== ''}
                helperText={TitleErrorMessage} > ClickItem={clickTitle}</TextField> */}
              <InputField
                Item={Title}
                Label="Title"
                ClickItem={clickTitle}
                ErrorMessage={TitleErrorMessage}
              />
            </Grid>
            <Grid item xs={6}>
              {/* <TextField type='date' label={"Date"} value={selectdate} focused onChange={(e) => { setSelectDate(e.target.value) }}
              /><ErrorMessageForm error={selectdateErrorMessage} /><br></br> */}
              <CalendarField
                Item={selectdate}
                Label="Date *"
                ClickItem={clickNoticeDate}
                ErrorMessage={selectdateErrorMessage}
              />
            </Grid>
          </Grid>
          <ReactQuill value={NoticeDescription} modules={toolbarOptions}
            onChange={(value) => setNoticeDescription(value)}
            onChangeSelection={(value) => setDescriptionError("")} />
          <ErrorMessageForm error={descriptionerror} />

          <Box mt={2}>
            <input type="file" ref={aRef} accept=".png,.jpg,.jpeg,.bmp" onChange={changeFile} ></input>
          </Box>

          {/* {fileName} */}
          {/* <Box className={classes.iIconSupport}> */}
          <Box>
            <Icon1 Note={"Supports only " + validFiles.join(', ') + " files types up to 5 MB"} />
          </Box>
          {Error && <ErrorMessageForm error={fileDataErrorMessage} />}
          <Grid container>
            <Grid item xs={12} md={3} sx={{ float: "right" }}>
              <ButtonPrimary onClick={clickSubmit} >Send&nbsp;<SendIcon fontSize="small" /></ButtonPrimary>
            </Grid>
          </Grid>

        </Card>
        <br></br>
        {
          <AddSchoolNoticeList SchoolNotice={clickEdit} />
          // <AddSchoolNoticeList clickEdit={clickEdit} />
        }

      </Container >

    </>
  )
}

export default AddSchoolNotice


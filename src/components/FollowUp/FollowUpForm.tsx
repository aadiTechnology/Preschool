
import { Box, Card, Checkbox, Container, Divider, FormControlLabel, FormGroup, Grid, Switch, Typography } from "@mui/material"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IAddEnquiryBody, IGetEnquiryDetailsBody } from "src/Interface/Enquiry/IEnquiry"
import { IAddFollowUpBody } from "src/Interface/FollowUp/IFollowUp"
import ButtonField from "src/libraries/Training/ButtonField"
import CalendarField from "src/libraries/Training/CalendarField"
import Dropdown from "src/libraries/Training/Dropdown"
import InputField from "src/libraries/Training/InputField"
import RadioList from "src/libraries/Training/RadioList"
import SendIcon from '@mui/icons-material/Send';
import PageHeader from 'src/library/heading/pageHeader'
import { AddStudentDetails, getClass, resetAddEnquiryDetails } from "src/requests/Enquiry/RequestEnquiryList"
import { getEnquiryDetails } from "src/requests/Enquiry/RequestEnquiryList"
import { RootState, useDispatch, useSelector } from 'src/store'
import { calculateAge, getCalendarFormat } from "../Common/utils1"
import { AddFollowUpDetails, GetFollowUpHistoryList, GetStatus, resetAddFollowUpMsg } from "src/requests/FollowUp/RequestFollowUpList"
import { toast } from "react-toastify"
import FollowUpCountHistory from "./FollowUpCountHistory"
import { ButtonPrimary } from "src/library/StyledComponents/CommonStyled"



const FollowUp = () => {

    const dispatch = useDispatch();

    // const followUpDetails = {
    //     classId : '2',
    //     studentName : 'John Doe',
    //     fatherName : 'Jake Doe',
    //     fatherNumber : '1234567895',
    //     motherName : 'Jenny Doe',
    //     motherNumber : '4567891234',
    //     email : 'mailto:doe@gmail.com',
    //     statusId : '0',
    //     reminder : '',
    //     comment : ''
    // };
    const { Id } = useParams();
    const HistoryList = useSelector((state: RootState) => state.FollowUp.FollowUpHistory);


    // const statusList = [{ Id: 1, Name: "Yes", Value: "1" },
    // { Id: 2, Name: "No", Value: "2" },
    // { Id: 3, Name: "Did Not Connect", Value: "3" }];

    // const classList = [{ Id: 1, Name: "Play Group", Value: "1" },
    // { Id: 2, Name: "Nursery", Value: "2" },
    // { Id: 3, Name: "Jr. K.G", Value: "3" },
    // { Id: 4, Name: "Sr. K.G", Value: "4" },
    // { Id: 5, Name: "Day Care", Value: "5" }];

    const [ClassID, setClassID] = useState('0');
    const [EditMode, setEditMode] = useState(false);
    const [StudentID, setStudentID] = useState('0');
    const [StudentName, setStudentName] = useState('');
    const [BirthDate, setBirthDate] = useState('')
    const [GenderList, setGenderList] = useState([
        { Id: 1, Name: 'Male', Value: "1" },
        { Id: 2, Name: 'Female', Value: "2" }
    ])
    const [Gender, setGender] = useState('0')
    const [Age, setAge] = useState('')
    const [FatherName, setFatherName] = useState('');
    const [FatherPhoneNo, setFatherPhoneNo] = useState('');
    const [MotherName, setMotherName] = useState('');
    const [MotherPhoneNo, setMotherPhoneNo] = useState('');
    const [EmailId, setEmailId] = useState('');
    const [StatusId, setStatusId] = useState('0');
    const [FollowUpCount, setFollowUpCount] = useState('0');
    const [Reminder, setReminder] = useState('');
    const [Comment, setComment] = useState('');
    const [StudentAddress, setStudentAddress] = useState('')
    const [SocietyName, setSocietyName] = useState('')


    const Class = useSelector((state: RootState) => state.Enquiry.Class);
    const EnquiryDetails = useSelector((state: RootState) => state.Enquiry.EnquiryDetails);
    const FollowUpdatedMsg = useSelector((state: RootState) => state.Enquiry.AddEnquiryMsg)
    console.log(EnquiryDetails)
    const Status = useSelector((state: RootState) => state.FollowUp.Status);
    const AddFollowUpMsg = useSelector((state: RootState) => state.FollowUp.AddFollowUpMsg)

    useEffect(() => {
        dispatch(getClass())
        if (Id !== undefined) {
            const GetEnquiryDetailsBody: IGetEnquiryDetailsBody = {
                ID: Number(Id)
            }
            dispatch(getEnquiryDetails(GetEnquiryDetailsBody))
        }

    }, [Id, dispatch]);

    useEffect(() => {
        if (EnquiryDetails !== null) {
            setClassID(EnquiryDetails.ClassId)
            setStudentName(EnquiryDetails.StudentName)
            setFatherName(EnquiryDetails.FatherName)
            setFatherPhoneNo(EnquiryDetails.FatherPhoneNo)
            setMotherName(EnquiryDetails.MotherName)
            setMotherPhoneNo(EnquiryDetails.MotherPhoneNo)
            setEmailId(EnquiryDetails.EmailId)
        }
    }, [EnquiryDetails])

    useEffect(() => {
        dispatch(GetStatus())
    }, [])

    useEffect(() => {
        if (AddFollowUpMsg !== '') {
            if (FollowUpdatedMsg !==''){
                toast.success('FollowUp Taken Successfully with some Updates.');
                dispatch(resetAddFollowUpMsg())
                dispatch(resetAddEnquiryDetails());
                clickCancel();
                dispatch(GetFollowUpHistoryList({ StudentId: Number(Id) }));
            } 
            else {
            toast.success(AddFollowUpMsg);
            dispatch(resetAddFollowUpMsg())
            clickCancel();
            dispatch(GetFollowUpHistoryList({ StudentId: Number(Id) }));
        }
    }
    }, [AddFollowUpMsg])
    // console.log(Status);

    const clickClass = (value) => {
        if(EditMode===true){
        setClassID(value)
        }
    }
    const clickStudentName = (value) => {
        if(EditMode===true){
        setStudentName(value)
        }
    };
    const clickFatherName = (value) => {
        if(EditMode===true){
        setFatherName(value)
        }
    };
    const clickFatherNumber = (value) => {
        if(EditMode===true){
        setFatherPhoneNo(value)
        }
    };
    const clickMotherName = (value) => {
        if(EditMode===true){
        setMotherName(value)
        }
    };
    const clickMotherNumber = (value) => {
        if(EditMode===true){
        setMotherPhoneNo(value)
        }
    };
    const clickEmailId = (value) => {
        if(EditMode===true){
        setEmailId(value)
        }
    }
    const clickStatusId = (value) => {
        setStatusId(value)
    };
    const clickReminder = (value) => {
        setReminder(value)
    };
    const clickComment = (value) => {
        setComment(value)
    };


    //validation

    const [statusError, setStatusError] = useState('');
    const [reminderError, setReminderError] = useState('');
    const [commentError, setCommentError] = useState('');

    const validateStatus = () => {
        if (StatusId === '0') {
            setStatusError('Please select a status');
            return false;
        }
        setStatusError('');
        return true;
    };
    const clickCancel = () => {
        setStatusId('0')
        setComment("")
        setReminder("")
    }
    const validateReminder = () => {
        if (Reminder === "") {
            setReminderError('Please select a future date for the reminder');
            return false;
        }
        setReminderError('');
        return true;
    };

    const validateComment = () => {
        if (!Comment.trim()) {
            setCommentError('Comment is required');
            return false;
        }
        setCommentError('');
        return true;
    };

    const handleSubmit = () => {
        const isStatusValid = validateStatus();
        const isReminderValid = validateReminder();
        const isCommentValid = validateComment();

        if (isStatusValid && isReminderValid && isCommentValid) {
            // Proceed with form submission
        }
    };

    const onEdit = () => {
        if (EditMode === false) {
            setEditMode(true)
        } else if (EditMode === true) {
            setEditMode(false)
        }
    }

    const clickSubmit = () => {
        const AddFollowUpBody: IAddFollowUpBody = {
            // ID: Id == undefined ? 0 : Number(Id),
            ID: 0,
            ClassId: Number(ClassID),
            StudentId: Number(EnquiryDetails.ID),
            StudentName: StudentName,
            FatherName: FatherName,
            FatherPhoneNo: FatherPhoneNo,
            MotherName: MotherName,
            MotherPhoneNo: MotherPhoneNo,
            EmailId: EmailId.trim(),
            StatusId: Number(StatusId),
            FollowUpCount: Number(HistoryList.length + 1),
            Reminder: Reminder,
            Comment: Comment,

        }
        const AddStudentBody: IAddEnquiryBody = {
            ID: Number(Id),
            StudentName: StudentName,
            ClassId: Number(ClassID),
            FatherName: FatherName,
            FatherPhoneNo: FatherPhoneNo,
            MotherName: MotherName,
            MotherPhoneNo: MotherPhoneNo,
            EmailId: EmailId.trim(), 
        }
        dispatch(AddStudentDetails(AddStudentBody))
        dispatch(AddFollowUpDetails(AddFollowUpBody))
        dispatch(GetFollowUpHistoryList({ StudentId: Number(Id) }));

    }


    return (
        <>
            <PageHeader heading={'FollowUp Form'} />
            <Container sx={{ py: 2 }}>
                <Card variant="outlined">
                    <Box p={2}>
                        {   /*    <Typography variant="h2" gutterBottom align="center">
                                FollowUp Form
                            </Typography>
                            <Divider /> */}
                        <form>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <FormGroup>
                                    <FormControlLabel control={<Switch checked={EditMode} onChange={onEdit} />} label="Edit Mode" />
                                </FormGroup>
                            </Grid>
                            <Grid container spacing={2} >
                                <Grid item xs={6} sm={6}>
                                    <InputField Item={StudentName} Label={'Student Name'}
                                        ClickItem={clickStudentName}
                                        ErrorMessage={undefined} />
                                </Grid>
                                <Grid item xs={6} sm={6} sx={{ mt: 2.7 }} >
                                    <Dropdown ItemList={Class} Label={'Class'} DefaultValue={ClassID}
                                        ClickItem={clickClass} ErrorMessage={''} />
                                </Grid>

                                <Grid item xs={6}>
                                    <InputField Item={FatherName} Label={'Father Name'}
                                        ClickItem={clickFatherName}
                                        ErrorMessage={undefined} />
                                </Grid>
                                <Grid item xs={6}>
                                    <InputField Item={FatherPhoneNo} Label={'FatherPhoneNo'}
                                        ClickItem={clickFatherNumber}
                                        ErrorMessage={undefined} />
                                </Grid>
                                <Grid item xs={6}>
                                    <InputField Item={MotherName} Label={'Mother Name'}
                                        ClickItem={clickMotherName}
                                        ErrorMessage={undefined} />
                                </Grid>
                                <Grid item xs={6}>
                                    <InputField Item={MotherPhoneNo} Label={'MotherPhoneNo'}
                                        ClickItem={clickMotherNumber}
                                        ErrorMessage={undefined} />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputField Item={EmailId} Label={'EmailId'}
                                        ClickItem={clickEmailId}
                                        ErrorMessage={undefined} />
                                </Grid>
                                <Grid item xs={6}>
                                    <RadioList ItemList={Status} Label={'Status'}
                                        DefaultValue={StatusId}
                                        ClickItem={clickStatusId}
                                        ErrorMessage={undefined} />
                                    {statusError && <span style={{ color: 'red' }}>{statusError}</span>}
                                </Grid>
                                <Grid item xs={6}>
                                    <CalendarField Item={Reminder} Label={'Reminder'}
                                        ClickItem={clickReminder}
                                        ErrorMessage={undefined} />
                                    {reminderError && <span style={{ color: 'red' }}>{reminderError}</span>}
                                </Grid>
                                <Grid item xs={12}>
                                    <InputField Item={Comment} Label={'Comment'}
                                        ClickItem={clickComment}
                                        ErrorMessage={undefined} />
                                    {commentError && <span style={{ color: 'red' }}>{commentError}</span>}
                                </Grid>
                                <Grid item xs={6}>
                                    {/* <ButtonField Label={'Submit'} ClickItem={clickSubmit} /> &nbsp;&nbsp; */}
                                    <ButtonPrimary onClick={clickSubmit} >Submit&nbsp;<SendIcon fontSize="small" /></ButtonPrimary>

                                </Grid>
                                <Grid item xs={6}>
                                    <ButtonPrimary onClick={clickCancel} >Clear</ButtonPrimary>

                                    {/* <ButtonField Label={'Cancel'} ClickItem={undefined} /> */}
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Card>
            </Container><br /><br /><br />
            <FollowUpCountHistory />

        </>
    );
}

export default FollowUp;









import { Box, Card, Container, Grid } from '@mui/material';
import { AddStudentDetails, getClass, getEnquiryDetails, resetAddEnquiryDetails } from "src/requests/Enquiry/RequestEnquiryList";
import SendIcon from '@mui/icons-material/Send';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from "src/libraries/Training/Dropdown";
import InputField from 'src/libraries/Training/InputField';
import { ButtonPrimary } from 'src/library/StyledComponents/CommonStyled';
import { RootState } from 'src/store';
import CalendarField from 'src/libraries/Training/CalendarField';
import RadioList from 'src/libraries/Training/RadioList';
import { IsEmailValid, IsPhoneNoValid, calculateAge } from '../Common/util';
import { IAddEnquiryBody } from 'src/Interface/Enquiry/IEnquiry';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import PageHeader from 'src/library/heading/pageHeader';
import { HeadingStyle } from 'src/libraries/styled/HeadingStyled';

const AddEnquiry = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ClassID, setClassID] = useState('0')
    const [StudentName, setStudentName] = useState('')
    const [Age, setAge] = useState('')
    const [BirthDate, setBirthDate] = useState('')
    const [GenderList, setGenderList] = useState([
        { Id: 1, Name: 'Male', Value: "1" },
        { Id: 2, Name: 'Female', Value: "2" }
    ])
    const [Gender, setGender] = useState('0')
    const [FatherName, setFatherName] = useState('')
    const [FatherPhoneNo, setFatherPhoneNo] = useState('');
    const [MotherName, setMotherName] = useState('')
    const [MotherPhoneNo, setMotherPhoneNo] = useState('');
    const [StudentAddress, setStudentAddress] = useState('')
    const [SocietyName, setSocietyName] = useState('')
    const [EmailId, setEmailId] = useState('')

    const [ClassErrorMessage, setClassErrorMessage] = useState('')
    const [StudentNameErrorMessage, setStudentNameErrorMessage] = useState('')
    const [BirthDateErrorMessage, setBirthDateErrorMessage] = useState('')
    const [GenderErrorMessage, setGenderErrorMessage] = useState('')
    const [FatherNameErrorMessage, setFatherNameErrorMessage] = useState('')
    const [FatherPhoneNoErrorMessage, setFatherPhoneNoErrorMessage] = useState('')
    const [MotherNameErrorMessage, setMotherNameErrorMessage] = useState('')
    const [MotherPhoneNoErrorMessage, setMotherPhoneNoErrorMessage] = useState('')
    const [StudentAddressErrorMessage, setStudentAddressErrorMessage] = useState('')
    const [SocietyNameErrorMessage, setSocietyNameErrorMessage] = useState('')
    const [EmailIdErrorMessage, setEmailIdErrorMessage] = useState('')

    const Class = useSelector((state: RootState) => state.Enquiry.Class);
    const AddStudentMsg = useSelector((state: RootState) => state.Enquiry.AddEnquiryMsg)
    const  Loading  = useSelector((state: RootState) => state.Enquiry.Loading);
    const clickClass = (value) => {
        setClassID(value);
        setClassErrorMessage("");
    }
    const clickStudentName = (value) => {
        setStudentName(value);
        setStudentNameErrorMessage("");
    }
    const IsFormValid = () => {
        let isValid = true;
        if (ClassID === "0") {
            setClassErrorMessage("Please select student's class")
            isValid = false
        } else {
            setClassErrorMessage("")
        };
        if (StudentName === "") {
            setStudentNameErrorMessage("Please enter student's name")
            isValid = false
        } else {
            setStudentNameErrorMessage("");
        };
        if (BirthDate === "") {
            setBirthDateErrorMessage("Please enter student's Birthdate")
            isValid = false
        } else {
            setBirthDateErrorMessage("");
        };
        if (Gender === "0") {
            setGenderErrorMessage("Please select gender")
            isValid = false
        } else {
            setGenderErrorMessage("");
        };
        if (FatherName === "") {
            setFatherNameErrorMessage("Please enter Father name")
            isValid = false
        } else {
            setFatherNameErrorMessage("");
        };
        if (FatherPhoneNo === "") {
            setFatherPhoneNoErrorMessage("Please enter valid phone number")
            isValid = false
        };
        if (MotherName === "") {
            setMotherNameErrorMessage("Please enter Mother name")
            isValid = false
        } else {
            setMotherNameErrorMessage("");
        };
        if (MotherPhoneNo === "") {
            setMotherPhoneNoErrorMessage("Please enter valid phone number")
            isValid = false
        };
        if (StudentAddress === "") {
            setStudentAddressErrorMessage("Please enter Residential Address")
            isValid = false
        } else {
            setStudentAddressErrorMessage("");
        };
        if (SocietyName === "") {
            setSocietyNameErrorMessage("Please enter Society Name")
            isValid = false
        } else {
            setSocietyNameErrorMessage("");
        };
        if (EmailId === "") {
            setEmailIdErrorMessage("Please enter valid email-id")
            isValid = false
        };
        if (EmailIdErrorMessage !==""){
            isValid = false
        } else{
            isValid = true
        };
        if (FatherPhoneNoErrorMessage !==""){
            isValid = false
        } else{
            isValid = true
        };
        if (MotherPhoneNoErrorMessage !==""){
            isValid = false
        } else{
            isValid = true
        };
        return isValid
    }
    const clickCancel = () => {
        setClassID('0')
        setStudentName('')
        setBirthDate('')
        setAge('')
        setGender('0')
        setFatherName('')
        setFatherPhoneNo('')
        setMotherName('')
        setMotherPhoneNo('')
        setStudentAddress('')
        setSocietyName('')
        setEmailId('')
        setEmailIdErrorMessage('')
        setSocietyNameErrorMessage('')
        setStudentAddressErrorMessage('')
        setMotherPhoneNoErrorMessage('')
        setMotherNameErrorMessage('')
        setFatherPhoneNoErrorMessage('')
        setFatherNameErrorMessage('')
        setBirthDateErrorMessage('')
        setGenderErrorMessage('')
        setStudentNameErrorMessage('')
        setClassErrorMessage('')
        
    }
    
    useEffect(() => {
        if (AddStudentMsg !== '') {
            // toast.success(AddStudentMsg);
            if (AddStudentMsg === '0'){
                toast.error('Failed to Add Enquiry.');
            } else if (AddStudentMsg === '1'){
                toast.success('Enquiry Added Successfully.');
                clickCancel();
            } else if (AddStudentMsg === '2'){
                toast.success('Enquiry Details Updated Successfully.');
                clickCancel();
                navigate('/extended-sidebar/Student/AddEnquiry')
            } else if (AddStudentMsg === '3'){
                toast.error('Email Id Already Exists.');
            } 
            dispatch(resetAddEnquiryDetails());

            // navigate("/")

        }
    }, [AddStudentMsg, dispatch]);
    const clickSubmit = () => {
        const isFormValid = IsFormValid();
        if (isFormValid) {
            const AddStudentBody: IAddEnquiryBody = {
                ID: 0,
                ClassId: Number(ClassID),
                StudentName: StudentName,
                Birthdate: BirthDate,
                Gender: Number(Gender),
                FatherName: FatherName,
                FatherPhoneNo: FatherPhoneNo,
                MotherName: MotherName,
                MotherPhoneNo: MotherPhoneNo,
                StudentAddress: StudentAddress,
                SocietyName: SocietyName,
                EmailId: EmailId.trim()

            }
            dispatch(AddStudentDetails(AddStudentBody))

            console.log(IsFormValid())
        }
        else {
            // If the form is not valid, show an error message
            toast.error('Please fill all required fields correctly.');        
        }

    }
    const clickBirthDate = (value) => {
        const selectedDate = new Date(value);
        const currentDate = new Date();
        const twoYearsAgo = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());

        // Check if the selected date is in the future
        if (selectedDate > currentDate) {
            setBirthDateErrorMessage("Birth date cannot be in the future");
        } else if (selectedDate > twoYearsAgo) {
            setBirthDateErrorMessage("Child must be at least 1 years old");
        } else {
            // Clear error message if  the selected date is valid
            setBirthDateErrorMessage("");
            setBirthDate(value);
            setAge(calculateAge(value).toString());
        }
    };
    const isNameValid = (name) => {
        // Regular expression to check if the input contains only alphabetic characters
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(name);
      };


    const clickAge = () => {

    };

    const clickGender = (value) => {
        setGender(value);
        setGenderErrorMessage("");
    }
    const clickFatherName = (value) => {
        if (value.trim() === "") {
            setFatherName("");
            setFatherNameErrorMessage("");
          } else if (isNameValid(value)) {
        setFatherName(value);
        setFatherNameErrorMessage("");
        }
    }

    const clickFatherPhoneNo = (value) => {
        // true if its a number, false if not & cannot enter more than 10 digit
        if (!isNaN(+value) && value.length < 11)
            setFatherPhoneNo(value);
        setFatherPhoneNoErrorMessage("");
    }
    const clickMotherName = (value) => {
        if (value.trim() === "") {
            setMotherName("");
            setMotherNameErrorMessage("");
          } else if (isNameValid(value)) 
        setMotherName(value);
        setMotherNameErrorMessage("");
        
    }
    const clickMotherPhoneNo = (value) => {
        // true if its a number, false if not & cannot enter more than 10 digit
        if (!isNaN(+value) && value.length < 11)
            setMotherPhoneNo(value);
        setMotherPhoneNoErrorMessage("");
    }
    const clickStudentAddress = (value) => {
        setStudentAddress(value);
        setStudentAddressErrorMessage("");
    }
    const clickSocietyName = (value) => {
        setSocietyName(value);
        setSocietyNameErrorMessage("");
    }
    const clickEmailId = (value) => {
        setEmailId(value);
        setEmailIdErrorMessage("");
    }

    const BlurFatherPhoneNo = () => {
        setFatherPhoneNoErrorMessage(IsPhoneNoValid(FatherPhoneNo))
    }
    const BlurMotherPhoneNo = () => {
        setMotherPhoneNoErrorMessage(IsPhoneNoValid(MotherPhoneNo))
    }
    const BlurEmailId = () => {
        setEmailIdErrorMessage(IsEmailValid(EmailId.trim()))
    }
    useEffect(() => {
        dispatch(getClass())
    }, []);
    return (<Container>
        <Grid container>
        <Grid item xs={5} sm={5}>
        <img src='/images/SmartKidz_logo.png' style={{ width: 200 }} />
                </Grid>
                <Grid item xs={7} sm={7}>
                <HeadingStyle>Register Student</HeadingStyle>
                </Grid>
                </Grid>
        
        <Card variant="outlined">
        <Box p={1}>
        <Grid container spacing={2} >
                                    <Grid item xs={6} sm={6}>
                                        <InputField
                                            Item={StudentName}
                                            Label="Student's Name"
                                            ClickItem={clickStudentName}
                                            ErrorMessage={StudentNameErrorMessage}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6} sx={{ mt: 2.7 }} >
                                        <Dropdown
                                            ItemList={Class}
                                            Label=""
                                            DefaultValue={ClassID}
                                            ClickItem={clickClass}
                                            Placeholder="Select Class"
                                            ErrorMessage={ClassErrorMessage}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}  sx={{ mt:0.5 }}>
                                        <CalendarField
                                            Item={BirthDate}
                                            Label="Birth Date *"
                                            ClickItem={clickBirthDate}
                                            ErrorMessage={BirthDateErrorMessage}
                                        />

                                    </Grid>

                                    <Grid item xs={6} sm={6}  sx={{ mt:0.5 }}>
                                        <RadioList
                                            ItemList={GenderList}
                                            Label="Gender *"
                                            DefaultValue={Gender}
                                            ClickItem={clickGender}
                                            ErrorMessage={GenderErrorMessage}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <InputField
                                            Item={Age}
                                            Label="Student's Age"
                                            ClickItem={clickAge}
                                            ErrorMessage={undefined}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <InputField
                                            Item={EmailId}
                                            Label="Email Id"
                                            ClickItem={clickEmailId}
                                            ErrorMessage={EmailIdErrorMessage}
                                            BlurItem={BlurEmailId}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <InputField
                                            Item={FatherName}
                                            Label="Father's Name"
                                            ClickItem={clickFatherName}
                                            ErrorMessage={FatherNameErrorMessage}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <InputField
                                            Item={FatherPhoneNo}
                                            Label="Phone No."
                                            ClickItem={clickFatherPhoneNo}
                                            ErrorMessage={FatherPhoneNoErrorMessage}
                                            BlurItem={BlurFatherPhoneNo}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <InputField
                                            Item={MotherName}
                                            Label="Mother's Name"
                                            ClickItem={clickMotherName}
                                            ErrorMessage={MotherNameErrorMessage}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <InputField
                                            Item={MotherPhoneNo}
                                            Label="Phone No."
                                            ClickItem={clickMotherPhoneNo}
                                            ErrorMessage={MotherPhoneNoErrorMessage}
                                            BlurItem={BlurMotherPhoneNo}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <InputField
                                            Item={StudentAddress}
                                            Label="Address"
                                            ClickItem={clickStudentAddress}
                                            ErrorMessage={StudentAddressErrorMessage}
                                        />
                                    </Grid>
                                    <Grid item xs={6} sm={6}>
                                        <InputField
                                            Item={SocietyName}
                                            Label="Society Name"
                                            ClickItem={clickSocietyName}
                                            ErrorMessage={SocietyNameErrorMessage}
                                        />
                                    </Grid>
                                  
                                    <Grid item xs={12}>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                gap: 3
                                            }}>
                                            {/* <ButtonField Label="Submit" ClickItem={clickSubmit} /> */}
                                            <ButtonPrimary  onClick={clickSubmit} >Submit&nbsp;<SendIcon fontSize="small"/></ButtonPrimary>
                                            {/* <ButtonField Label="Clear" ClickItem={clickCancel} /> */}
                                            <ButtonPrimary  onClick={clickCancel} >Clear</ButtonPrimary>
                                        </Box>
                                    </Grid>
                                </Grid>
                                </Box></Card>
        </Container>
  )
}

export default AddEnquiry
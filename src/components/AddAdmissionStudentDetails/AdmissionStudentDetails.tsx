import { RootState } from 'src/store';
import  { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { TextField,Button,Container,Card } from '@mui/material';
import { IsEmailValid, IsMobileNoValid } from "src/components/Common/util"
import ErrorMessageForm from 'src/library/ErrorMessage/ErrorMessageForm';
import PageHeader from 'src/library/heading/pageHeader';
import { IAddStudentDetailsBody,IGetStudentDetailsBody,IGetStudentDetailsResult} from 'src/Interface/AddStudentDetails/IAddStudentDetails';
import { AddStudentDetails,GetStudentDetails } from 'src/requests/AddStudentDetails/RequestAddStudentDetails';

const AdmissionStudentDetails = () => {
  const dispatch = useDispatch();
  const StudentDetails = useSelector(
    (state: RootState) => state.AddStudentDetail.StudentDetails
  );
  console.log(StudentDetails, "StudentDetails")


  const GetStudentDetail = useSelector(
      (state: RootState) => state.AddStudentDetail.GetStudentDetails
    );
    console.log(GetStudentDetail, "GetStudentDetail")

const [studentName, setStudentName] = useState('');
  const [studentNameerror, setStudentNameerror] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthDateerror, setBirthDateerror] = useState('');
  const [age, setAge] = useState('');
  const [ageerror, setAgeerror] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [fatherNameerror, setFatherNameerror] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [phoneNoerror, setPhoneNoerror] = useState('');
  const [motherName, setMotherName] = useState('');
  const [motherNameerror, setMotherNameerror] = useState('');
  const [phoneNo2, setPhoneNo2] = useState('');
  const [phoneNoerror2, setPhoneNoerror2] = useState('');
  const [societyName, setSocietyName] = useState('');
  const [societyNameerror, setSocietyNameerror] = useState('');
  const [studentAddress, setStudentAddress] = useState('');
  const [studentAddresserror, setStudentAddresserror] = useState('');
  const [email, setEmail] = useState('');
  const [emailerror, setEmailerror] = useState('');
  const [Id, setId] = useState(0);
  const[schoolListerror,setSchoolListError]=useState('')
  const [ItemList, setItemList] = useState([])

  const getClassId = ()=>{
    let classId = 0;
    ItemList.map((item) => {
      if(item.IsActive)
        classId= parseInt(item.Value) 
    })
    return classId
  }
const IsSelected = () => {
    let returnVal = false;
    ItemList.map((item)=>{
      if(item.IsActive){
        returnVal = true
      }
    })
    return returnVal;
  }
 
  const AddStudentDetailsBody: IAddStudentDetailsBody =
  {
    Id: Id,
    ClassId: getClassId().toString(),
    StudentName:studentName,
    BirthDate:birthDate,
    Age:parseInt(age),
    FatherName:fatherName,
    PhoneNo:phoneNo,
    MotherName: motherName,
    PhoneNo2: phoneNo2,
    SocietyName: societyName,
    StudentAddress: studentAddress,
    Emailid: email,
    
  }

  const GetStudentDetailsBody:IGetStudentDetailsBody=
  {
      "Id": 145
  }
  useEffect(()=>{
    dispatch(AddStudentDetails(AddStudentDetailsBody));
  },[]);

  useEffect(()=>{
    dispatch(GetStudentDetails(GetStudentDetailsBody));
  },[]);
  
  const onSubmit = () => {
    let isError = false
    if (studentName === '') {
      setStudentNameerror('This field is required')
      isError = true
    } else {
      setStudentNameerror('')
    }
    if (birthDate === '') {
      setBirthDateerror('This field is required')
      isError = true

    } else {
      setBirthDateerror('')
    }
    if (age === '') {
      setAgeerror('This field is required')
      isError = true
    } else {
      setAgeerror('')
    }
    if (fatherName === '') {
      setFatherNameerror('This field is required')
      isError = true
    } else {
      setFatherNameerror('')
    }
    if (motherName === '') {
      setMotherNameerror('This field is required')
      isError = true
    } else {
      setMotherNameerror('')
    }
    if (societyName === '') {
      setSocietyNameerror('This field is required')
      isError = true
    } else {
      setSocietyNameerror('')
    }

    if (studentAddress === '') {
      setStudentAddresserror('This field is required')
      isError = true
    } else {
      setStudentAddresserror('')

    }
    if(!IsSelected()){
      setSchoolListError('Fill the Mandatory Field')
      isError = true
    }
    else {
      setSchoolListError('')
    }
    if (!isError) {
      dispatch(AddStudentDetails(AddStudentDetailsBody));

      
    }
    if (!isError) {
      ResetForm()
    }

  }

  const ResetForm = () => {
    setStudentName('')
    setBirthDate('')
    setAge('')
    setFatherName('')
    setPhoneNo('')
    setMotherName('')
    setPhoneNo2('')
    setSocietyName('')
    setStudentAddress('')
    setEmail('')
    //setChecked(false)
    setItemList(prev=> prev.map((item)=> 
    {return {...item,IsActive:false}}))

  }

  const handleChange = (e) => {
        const input = e.target.value;
        const regex = /^[0-9\b]+$/;
        if (input === "" || (regex.test(input) && input.length <= 2)) {
          setAge(input);
        }
      };
  
  const ChangephoneNo = (e) => {
    // const input=e.target.value;
    const input = e.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || (regex.test(input) && input.length <= 10)) {
      setPhoneNo(input);
    }
    // setPhoneNumber(checkIsNumber(e.target.value))
  };

  const ChangephoneNo2 = (e) => {
    const input = e.target.value;
    const regex = /^[0-9\b]+$/;
    if (input === "" || (regex.test(input) && input.length <= 10)) {
      setPhoneNo2(input);
    }
  };

  
     function IsEmailValid(value) {
      const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{1,3})+$/;
      if (!value) {
          return 'Email Id should not be blank.';
      }
      else if (!emailRegExp.test(value)) {
          return 'Invalid email address';
      }
      return ''
  }

  const onBirthDateChange = (value) => {
        setBirthDate(value)
        const currentDate = new Date();
        if(!isNaN(Date.parse(birthDate))){
        const current = new Date(value);
        setAge((currentDate.getFullYear() - current.getFullYear()).toString());
      }else
      setAge('')
      }


      return (
            <Container>
              <PageHeader heading={'Enquiry Form'} />
              {/* <Typography>Selected Class</Typography> */}
             
               <ErrorMessageForm error={schoolListerror}/>
                 <br></br>
              <Card>
         
                 <TextField value={studentName} onChange={(e) => { setStudentName(e.target.value) }} label={'StudentName'} />
        
                 <ErrorMessageForm error={studentNameerror} />
                 <TextField value={birthDate} type='date' onChange={(e) => {onBirthDateChange(e.target.value) }} label={'Birth Date'} focused />
        
                 <ErrorMessageForm error={birthDateerror} />
                <TextField value={age} type="text"
                  onChange={(e) => handleChange(e)}
                  label={'Age'} />
        
                <ErrorMessageForm error={ageerror} />
                <TextField value={fatherName} onChange={(e) => { setFatherName(e.target.value) }} label={'FatherName'} />
        
                <ErrorMessageForm error={fatherNameerror} />
                <TextField value={phoneNo}
                  type="text"
                  onChange={(e) => ChangephoneNo(e)}
                  onBlur={(e) => { setPhoneNoerror(IsMobileNoValid(e.target.value)) }}
                  error={phoneNoerror !== ''}
                  helperText={phoneNoerror}
                  label={'PhoneNo'} />
                <TextField value={motherName} onChange={(e) => { setMotherName(e.target.value) }} label={'MotherName'} />
                <ErrorMessageForm error={motherNameerror} />
                <TextField value={phoneNo2} onChange={(e) => ChangephoneNo2(e)} onBlur={(e) => { setPhoneNoerror2(IsMobileNoValid(e.target.value)) }}
                  error={phoneNoerror2 !== ''}
                  helperText={phoneNoerror2}
                  label={'PhoneNo2'} />
                <TextField value={societyName} onChange={(e) => { setSocietyName(e.target.value) }} label={'SocietyName'} />
                <ErrorMessageForm error={societyNameerror} />
                <TextField value={studentAddress} onChange={(e) => { setStudentAddress(e.target.value) }} label={'StudentAddress'} />
                <ErrorMessageForm error={studentAddresserror} />
                {/* <TextField value={email}
                  onChange={(e) => {setEmail(e.target.value) }}
                  onBlur={(e) => {setEmailerror(IsEmailValid(e.target.value)) }}
                  label={'Emailid'} /> */}
        <TextField value={email}
          onChange={(e) => {setEmail(e.target.value) }}
          onBlur={(e) => {setEmailerror(IsEmailValid(e.target.value)) } }
          error={emailerror !== ''}
          helperText={emailerror}
          label={'Emailid'} />
                
                <Button onClick={onSubmit}>Submit</Button>
              </Card>
              <br></br>
            
          </Container>
          )
         }
        
export default AdmissionStudentDetails

 
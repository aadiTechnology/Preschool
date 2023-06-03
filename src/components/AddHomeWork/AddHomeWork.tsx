import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { Card, Container, TextField, Box, Button, Typography } from '@mui/material'
import DropDown from 'src/library/DropDown/DropDown'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { getClassNameList ,getDescription} from 'src/requests/Teacher/RequestTeacher';
import { IGetClassNameListBody ,IGetDescriptionBody} from 'src/Interface/Teacher/ITeacher';
import { toast } from 'react-toastify';
function AddHomeWork() {
    const GetHomeWork: any = useSelector(
        (state: RootState) => state.ClassNameList.ClassNameList
    );

    const GetDescription: any = useSelector(
        (state: RootState) => state.ClassNameList.Description
    );

   
    const dispatch = useDispatch();
    const [description, setDescription] = useState('')
    const [selectclass, setSelectClass] = useState('');
    const [selectdate, setSelectDate] = useState('');

    const ClickItem = (value) => {
        setSelectClass(value);
    };

   const GetClassNameListBody: IGetClassNameListBody =
    {
        TeacherId: 0
    }

    const GetDescriptionBody: IGetDescriptionBody =
    {
        Class: selectclass,
        SubjectName: '',
        SubjectDescription:description,
        AssignDate: selectdate,
        Attachment: '',
        Camera:''
    }
    useEffect(() => {
        dispatch(getClassNameList(GetClassNameListBody));
       }, [])

    const SaveDetails=()=>{
       dispatch(getDescription(GetDescriptionBody));
    }

    useEffect(() => {
        console.log(GetDescription,"GetDescription")
      }, [GetDescription])
    return (
        <Container>
            <PageHeader heading={'AddHomeWork'} />
            <Card>
                <DropDown itemList={GetHomeWork} ClickItem={ClickItem} DefaultValue={selectclass} Label={'Select Class'} />
                <TextField
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                   <TextField type="date"
                    value={selectdate} 
                    onChange={(e) => setSelectDate(e.target.value)}
                    />
                <Box mt={2}>
                    <input type="file" ></input>
                </Box>
                <Button sx={{ mt: 2 }} onClick={SaveDetails}>Save</Button>
            </Card>
            <Card component={Box} mt={2}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>sr. No.:- 1</Typography>
                    <Typography>sub: English</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>Description : HomeWorks</Typography>
                    <Typography>Assign Date: 5-6-2023</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                    <Button>Submit</Button>
                    <Button color="success" sx={{ ml: 1 }}>Edit</Button>
                    <Button color="error" sx={{ ml: 1 }}>Delete</Button>
                </Box>
            </Card>
        </Container>
    )
}

export default AddHomeWork
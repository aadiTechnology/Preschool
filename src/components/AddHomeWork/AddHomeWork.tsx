import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { Card, Container, TextField, Box, Button, Typography } from '@mui/material'
import DropDown from 'src/library/DropDown/DropDown'
import { getHomeWork } from 'src/requests/Student/AddHomeWork/AddHomeWork'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { getClassNameList } from 'src/requests/Teacher/RequestTeacher';
import { IGetClassNameListBody } from 'src/Interface/Teacher/ITeacher';


function AddHomeWork() {
    const GetHomeWork: any = useSelector(
        (state: RootState) => state.ClassNameList.ClassNameList
    );

    const dispatch = useDispatch();
    const [description, setDescription] = useState('')
    const [item, setItem] = useState('');

    const ClickItem = (value) => {
        setItem(value);
    };

    useEffect(() => {
        dispatch(getHomeWork);
    }, []);

    const GetClassNameListBody: IGetClassNameListBody =
    {
        TeacherId: 0
    }
    useEffect(() => {
        dispatch(getClassNameList(GetClassNameListBody));
    }, [])
    return (
        <Container>
            <PageHeader heading={'AddHomeWork'} />
            <Card>
                <DropDown itemList={GetHomeWork} ClickItem={ClickItem} DefaultValue={item} Label={'Select Class'} />
                <TextField
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                <TextField
                    label="Assign Date"
                    value={''} />
                <Box mt={2}>
                    <input type="file"></input>
                </Box>
                <Button sx={{ mt: 2 }}>Save</Button>
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
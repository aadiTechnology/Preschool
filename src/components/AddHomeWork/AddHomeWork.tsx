import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { Card, Container, TextField, Box, Button, Typography } from '@mui/material'
import DropDown from 'src/library/DropDown/DropDown'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { getClassNameList, getAddHomework, getDetailsList, getDeleteHomework, getHomeworkListForEdit } from 'src/requests/Teacher/RequestTeacher';
import { IGetClassNameListBody, IGetAddHomeworkBody, IGetDetailsListBody, IDeleteHomeworkBody, IHomeworkListForEditBody } from 'src/Interface/Teacher/ITeacher';
import { toast } from 'react-toastify';
import Card4Text from 'src/library/Card/Card4Text';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TabulerCard from 'src/library/Card/TabulerCard';

function AddHomeWork() {
    const GetHomeWork: any = useSelector(
        (state: RootState) => state.ClassNameList.ClassNameList
    );

    const GetAddHomework: any = useSelector(
        (state: RootState) => state.ClassNameList.AddHomework
    );

    const GetDetailsList: any = useSelector(
        (state: RootState) => state.ClassNameList.DetailsList
    );

  

    const dispatch = useDispatch();
    const [description, setDescription] = useState(' ')
    const [selectclass, setSelectClass] = useState(' ');
    const [selectdate, setSelectDate] = useState(' ');

    const [errordescription, setErrordescription] = useState('')

    const handleContentChange = (value) => {
        setDescription(value);
    };
    const ClickItem = (value) => {
        setSelectClass(value);
    };

    const GetClassNameListBody: IGetClassNameListBody =
    {
        TeacherId: 0
    }

    const GetAddHomeworkBody: IGetAddHomeworkBody =
    {
        Class: selectclass,
        SubjectName: '',
        SubjectDescription: description,
        AssignDate: selectdate,
        Attachment: '',
        Camera: ''
    }

    const GetDetailsListBody: IGetDetailsListBody =
    {
        TeacherId: 3
    }
    useEffect(() => {
        dispatch(getClassNameList(GetClassNameListBody));
        dispatch(getDetailsList(GetDetailsListBody));
    }, [])

    const SubmitHomework = () => {
        if (Validation()) {
            setDescription('')
            setSelectClass('')
            setSelectDate('')
            dispatch(getAddHomework(GetAddHomeworkBody));
        }
    }

    const Validation = () => {
        let isValid = true;
        if (description === '') {
            setErrordescription('field is required')
            isValid = true
        }
        return isValid;
    }


    useEffect(() => {
        toast.success(GetAddHomework)
    }, [GetAddHomework])


    const toolbarOptions = {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline', 'strike'],
                [{ color: [] }],
                [{ align: [] }],
                [{ size: ['small', 'normal', 'large', 'huge'] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
                ['clean'],
            ],
        },
    };
    return (
        <Container>
            <PageHeader heading={'AddHomeWork'} />
            <Card>
                <DropDown itemList={GetHomeWork} ClickItem={ClickItem} DefaultValue={selectclass} Label={'Select Class'} />
                <br></br>
                <ReactQuill
                    value={description}
                    onChange={handleContentChange}
                    modules={toolbarOptions}
                />


                <TextField type="date"
                    value={selectdate}
                    onChange={(e) => setSelectDate(e.target.value)}
                />
                <Box mt={2}>
                    <input type="file" ></input>
                </Box>
                <Button sx={{ mt: 2 }} onClick={SubmitHomework}>Save</Button>
            </Card>
             
             <TabulerCard/>


            {/* {GetDetailsList.map((item, i) => {
                <div key={i}>
                    <Card4Text Text1={item.Text1} Text2={item.Text2} Text3={item.Text3} Text4={item.Text4} />


                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Button>Submit</Button>
                        <Button color="success" sx={{ ml: 1 }} onClick={() => Edit(item.Id)}>Edit</Button>
                        <Button color="error" sx={{ ml: 1 }} onClick={() => Delete(item.Id)}>Delete</Button>
                    </Box>
                </div>

            })} */}


            {/* <Card4Text Text1={'english'} Text2={'marathi'} Text3={'bvdyvbgw'} Text4={'cbcebqyvbye'} />


            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button>Submit</Button>
                <Button color="success" sx={{ ml: 1 }} onClick={() => Edit(Id)}>Edit</Button>
                <Button color="error" sx={{ ml: 1 }} onClick={() => Delete(Id)}>Delete</Button>
            </Box> */}

        </Container>
    )
}

export default AddHomeWork
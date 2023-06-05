import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { Card, Container, TextField, Box, Button, Typography } from '@mui/material'
import DropDown from 'src/library/DropDown/DropDown'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { getClassNameList ,getDescription ,getDetailsList ,getDeleteHomework ,getHomeworkListForEdit} from 'src/requests/Teacher/RequestTeacher';
import { IGetClassNameListBody ,IGetDescriptionBody,IGetDetailsListBody ,IDeleteHomeworkBody ,IHomeworkListForEditBody} from 'src/Interface/Teacher/ITeacher';
import { toast } from 'react-toastify';
import Card4Text from 'src/library/Card/Card4Text';
function AddHomeWork() {
    const GetHomeWork: any = useSelector(
        (state: RootState) => state.ClassNameList.ClassNameList
    );

    const GetDescription: any = useSelector(
        (state: RootState) => state.ClassNameList.Description
    );

    const GetDetailsList: any = useSelector(
        (state: RootState) => state.ClassNameList.DetailsList
    );
    
    const GetDelete: any = useSelector(
        (state: RootState) => state.ClassNameList.DeleteHomework
    );

  
    const GetEditList: any = useSelector(
        (state: RootState) => state.ClassNameList.HomeworkListForEdit
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

    const GetDetailsListBody: IGetDetailsListBody =
    {
        TeacherId: 3
    }
    useEffect(() => {
        dispatch(getClassNameList(GetClassNameListBody));
        dispatch(getDetailsList(GetDetailsListBody));
       }, [])

    const SaveDetails=()=>{
    setDescription('')
    setSelectClass('')
    setSelectDate('')
    dispatch(getDescription(GetDescriptionBody));
    }

    const Delete=(Id)=>{
     const GetDeleteHomeworkBody:IDeleteHomeworkBody =
        {
            TeacherId: Id
        }
        dispatch(getDeleteHomework(GetDeleteHomeworkBody));
     }

     const Edit=(Id)=>{
        const GetHomeworkEditBody:IHomeworkListForEditBody =
           {
            HomeworkDetailsId: Id
           }
           dispatch(getHomeworkListForEdit(GetHomeworkEditBody));
        }

       useEffect(() => {
       toast.success(GetDescription)
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
            {GetDetailsList.map((item, i)=>{
              <div key={i}>
             <Card4Text Text1={item.Text1} Text2={item.Text2} Text3={item.Text3} Text4={item.Text4}/>

             <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button>Submit</Button>
                <Button color="success" sx={{ ml: 1 }} onClick={()=>Edit(item.Id)}>Edit</Button>
                <Button color="error" sx={{ ml: 1 }}   onClick={()=>Delete(item.Id)}>Delete</Button>
                 </Box>
              </div>
              
                 })}
               
           </Container>
    )
}

export default AddHomeWork
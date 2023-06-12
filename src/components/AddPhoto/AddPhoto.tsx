import { Button, Container,TextField,Typography} from '@mui/material'
import React,{useState,useEffect} from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { toast } from 'react-toastify';
import {IAddPhotoAlbumBody} from 'src/Interface/Admin/IAddPhoto'
import {getAddPhoto} from 'src/requests/Admin/RequestAddPhoto'

function AddPhoto  ()  {


    const [title, setTitle] = useState('');
    const onSubmit = () => {
        console.log({ title })
    
      }

    const GetAddPhoto: any = useSelector(
        (state: RootState) => state.AddPhoto.AddPhotoAlbum
    );
    const dispatch = useDispatch();
    console.log(GetAddPhoto,"AddPhoto")

    const AddPhoto: IAddPhotoAlbumBody =
    {
        "Title":"Agnipariksha",
        "Class":"firstStandard",
        "AlbumDate":"05/27/2023",
        "FacebookLink":"httplocalhost45",
        "CreatedBy":101
    }
    useEffect(() => {
        toast.success(GetAddPhoto)
        dispatch(getAddPhoto(AddPhoto));
      }, [])
    

  return (
    <Container>
        <PageHeader heading={'AddPhoto'} />
        <TextField value={title} onChange={(e)=>{setTitle(e.target.value)}}  
      label={'Title'} />
       <Typography> Link</Typography>
      <TextField type='date' />
      <br></br>
      <Button onClick={onSubmit}>Submit</Button>
    </Container>
  )
}

export default AddPhoto
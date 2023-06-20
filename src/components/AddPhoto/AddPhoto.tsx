import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { toast } from 'react-toastify';
import { IAddPhotoAlbumBody, IGetClassNameListBody, IGetAllAlbumNameListBody, IDeletePhotoAlbumBody } from 'src/Interface/Admin/IAddPhoto'
import { getAddPhoto, getClassNameList, GetAllAlbumNameList, DeleteAllAlbumList ,resetDeleteAlbumListMessage ,resetgetAddPhoto } from 'src/requests/Admin/RequestAddPhoto'
import SelectedCard from 'src/library/Card/SelectedCard';
import ListCard from 'src/library/List/ListCard';
import List2Card from 'src/library/List/List2Card';
import SuspenseLoader from 'src/layouts/Components/SuspenseLoader';


function AddPhoto() {

  const dispatch = useDispatch();
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  const [title, setTitle] = useState('');
  const [titlerror, setTitleError] = useState('')
  const [date, setDate] = useState(formattedDate)
  const [dateerror, setDateError] = useState('')
  const [ItemList, setItemList] = useState([])


  const GetAddPhoto: any = useSelector(
    (state: RootState) => state.AddPhoto.AddPhotoAlbum
  );

  const GetClass: any = useSelector(
    (state: RootState) => state.AddPhoto.GetClassNameList
  );

  const GetAllAlbum: any = useSelector(
    (state: RootState) => state.AddPhoto.GetAllAlbumNameList
  );

  const DeleteAllAlbum: any = useSelector(
    (state: RootState) => state.AddPhoto.DeleteAllAlbumList
  );
  const loading = useSelector(
    (state: RootState) => state.AddPhoto.Loading
  );
   const clickItem = (value) => {
    setItemList(value)
  }
   const onSubmit = () => {
    let isError = false
    if (title === '') {
      setTitleError('Please Enter Title Name')
      isError = true
    }
    else {
      setTitleError('')
    }
    if (date === '') {
      setDateError('Mandatory Field')
      isError = true
    }
    else {
      setDateError('')
    }
    const AddPhoto: IAddPhotoAlbumBody =
   
    {
      Title: title,
      ClassId: ItemList.filter((item) => {return (item.IsActive) }).map((obj) => { return obj.Value }).toString(),
      AlbumDate: date,
      FacebookLink: "httplocalhost45",
      UserId: 1
    }
    
    dispatch(getAddPhoto(AddPhoto));
    setTitle('')
    setDate('')
    setItemList(prev=> prev.map((item)=> 
      {return {...item,IsActive:false}}))
  }

  useEffect(() => {
    dispatch(getClassNameList())
    dispatch(GetAllAlbumNameList())
  }, [])

  useEffect(() => {
    setItemList(GetClass)
  }, [GetClass])



  useEffect(() => {
    if (GetAddPhoto !== "" && GetAddPhoto !== null ) {
      toast.success("Photos Added Sucessfully" ,{ toastId: 'success2' })
      dispatch(resetgetAddPhoto());
    }
    dispatch(GetAllAlbumNameList())
   }, [GetAddPhoto])
 console.log("DeleteAllAlbum",DeleteAllAlbum);
 
  useEffect(()=>{
    if(DeleteAllAlbum !== null && DeleteAllAlbum !== ""){
      toast.success(DeleteAllAlbum , { toastId: 'success1' })
    dispatch(resetDeleteAlbumListMessage());
    }
    dispatch(GetAllAlbumNameList())
  },[DeleteAllAlbum])

  const Delete =(Id)=>{
    const DeleteAllAlbumBody: IDeletePhotoAlbumBody = { Id: Id }
    dispatch(DeleteAllAlbumList(DeleteAllAlbumBody))
  }

  const clickNavigate = () => {

  }
  return (
    <Container>
      <PageHeader heading={'AddPhoto'} />
      {ItemList.length > 0 &&
        <SelectedCard ItemList={ItemList} clickItem={clickItem} />
      }
      <TextField value={title} onChange={(e) => setTitle(e.target.value)}
        label={'Title'} />
      {titlerror}
      <Typography> Link</Typography>
      <TextField type='date' value={date} onChange={(e) => setDate(e.target.value)} inputProps={{
        max: formattedDate,
      }} />
      {dateerror}
      <br></br>
      <Button onClick={onSubmit}>Submit</Button>
         {loading ? <SuspenseLoader/> : 
      <List2Card ItemList={GetAllAlbum} Delete={Delete} />}
    </Container>
  )
}

export default AddPhoto
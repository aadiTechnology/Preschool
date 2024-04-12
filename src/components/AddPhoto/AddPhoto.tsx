import { Button, Container, TextField, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { toast } from 'react-toastify';
import { IAddPhotoAlbumBody, IDeletePhotoAlbumBody } from 'src/Interface/Admin/IAddPhoto'
import { getAddPhoto, getClassNameList, GetAllAlbumNameList, DeleteAllAlbum ,resetDeleteAlbumListMessage ,resetgetAddPhoto } from 'src/requests/Admin/RequestAddPhoto'
import SelectedCard from 'src/library/Card/SelectedCard';
import List2Card from 'src/library/List/List2Card';
import SuspenseLoader from 'src/layouts/Components/SuspenseLoader';
import ErrorMessageForm from 'src/library/ErrorMessage/ErrorMessageForm';


function AddPhoto() {

  const dispatch = useDispatch();
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  const [title, setTitle] = useState('');
  const [titlerror, setTitleError] = useState('')
  const [link, setLink] = useState('');
  const [linkerror, setLinkError] = useState('');
  const [date, setDate] = useState(formattedDate);
  const [dateerror, setDateError] = useState('');
  const [schoolListerror, setSchoolListError] = useState('');
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

  const DeleteAllAlbumL: any = useSelector(
    (state: RootState) => state.AddPhoto.DeleteAllAlbumList
  );
  const loading = useSelector(
    (state: RootState) => state.AddPhoto.Loading
  );
   const clickItem = (value) => {
    setItemList(value)
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
 const onSubmit = () => {
    let isError = false
    if (title === '') {
      setTitleError('Please Enter Title Name')
      isError = true
    }
    else {
      setTitleError('')
    }

    if (link === '') {
      setLinkError('Please Enter Link')
      isError = true
    }
    else {
      setLinkError('')
    }
    if (date === '') {
      setDateError('Fill the Mandatory Field')
      isError = true
    }
    else {
      setDateError('')
    }
    if(!IsSelected()){
      setSchoolListError('Fill the Mandatory Field')
      isError = true
    }
    else {
      setSchoolListError('')
    }
  
    const AddPhoto: IAddPhotoAlbumBody =
   
    {
      Title: title,
      ClassId: ItemList.filter((item) => {return (item.IsActive) }).map((obj) => { return obj.Value }).toString(),
      AlbumDate: date,
      FacebookLink: link,
      UserId: 1
    }
    if(!isError){
      dispatch(getAddPhoto(AddPhoto));
    }
  
    setTitle('')
    setDate(formattedDate)
    setLink('')
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
    if (GetAddPhoto !== ''  ) {
      toast.success(GetAddPhoto ,{ toastId: 'success2' })
      dispatch(resetgetAddPhoto());
      }
    dispatch(GetAllAlbumNameList())
   }, [GetAddPhoto])

 
  useEffect(()=>{
  if(DeleteAllAlbumL !== ""){
      toast.success(DeleteAllAlbumL , { toastId: 'success1' })
    dispatch(resetDeleteAlbumListMessage());
    dispatch(GetAllAlbumNameList())
    }
  },[DeleteAllAlbumL])

  const Delete =(Id)=>{
    if(confirm('Are you sure you want to delete photo album')){
      const DeleteAllAlbumBody: IDeletePhotoAlbumBody = { Id: Id }
      dispatch(DeleteAllAlbum(DeleteAllAlbumBody))
    }
   }

  
  return (
    <Container>
      <PageHeader heading={'AddPhoto'} />
      <Typography mb={0.5}>Select Class</Typography>
      
      {ItemList.length > 0 &&

        <SelectedCard ItemList={ItemList} clickItem={clickItem}  />
         
      }
        <ErrorMessageForm error={schoolListerror}/>
    
      <TextField value={title} onChange={(e) => setTitle(e.target.value)}
        label={'Title'} />
        <ErrorMessageForm error={titlerror}/>
        <TextField value={link} onChange={(e) => setLink(e.target.value)}
        label={'Link'} />
        <ErrorMessageForm error={linkerror}/>
      <TextField type='date' value={date} onChange={(e) => setDate(e.target.value)} inputProps={{
        max: formattedDate,
      }} />
      <ErrorMessageForm error={dateerror}/>
      <Button onClick={onSubmit}>Submit</Button>
         {loading ? <SuspenseLoader/> : 
      <List2Card ItemList={GetAllAlbum} Delete={Delete} />}
    </Container>
  )
}

export default AddPhoto
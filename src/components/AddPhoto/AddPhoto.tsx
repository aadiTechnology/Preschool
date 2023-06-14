import { Button, Container,TextField,Typography} from '@mui/material'
import React,{useState,useEffect} from 'react'
import PageHeader from 'src/library/heading/pageHeader'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { toast } from 'react-toastify';
import {IAddPhotoAlbumBody,IGetClassNameListBody,IGetAllAlbumNameListBody,IDeletePhotoAlbumBody} from 'src/Interface/Admin/IAddPhoto'
import {getAddPhoto,getClassNameList,GetAllAlbumNameList,DeleteAllAlbumList} from 'src/requests/Admin/RequestAddPhoto'
import SelectedCard from 'src/library/Card/SelectedCard';
import ListCard from 'src/library/List/ListCard';
import List2Card from 'src/library/List/List2Card';
// const ItemList=[
//   {Id:1 , Name:"playGroup" , Value:1 ,IsActive:false} ,  {Id:2 , Name:"Nursary" , Value:2 ,IsActive:false},
//   {Id:3 , Name:"SR KG" , Value:3 ,IsActive:false} , {Id:4 , Name:"SR KG2" , Value:4 ,IsActive:false}
// ]
function AddPhoto  ()  {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const[titlerror,setTitleError]=useState('')
  const [date , setDate] = useState('')
  const[dateerror,setDateError]=useState('')
 const [ItemList , setItemList] = useState([])

  
   const GetAddPhoto: any = useSelector(
        (state: RootState) => state.AddPhoto.AddPhotoAlbum
    );

    const GetClass: any = useSelector(
      (state: RootState) => state.AddPhoto.GetClassNameList
  );

  const GetAllAlbum:any=useSelector(
    (state:RootState)=>state.AddPhoto.GetAllAlbumNameList
  );

  const DeleteAllAlbum:any=useSelector(
    (state:RootState)=>state.AddPhoto.DeleteAllAlbumList
  );
  
   
   
    
    const clickItem=(value)=>{
      setItemList(value)
    }
    
 
    const AddPhoto: IAddPhotoAlbumBody =
    {
        Title:title,
        Class:ItemList.filter((item)=>{return (item.IsActive)}).map((obj)=>{return obj.Value}).toString(),
        AlbumDate:date,
        FacebookLink:"httplocalhost45",
        UserId:1
    }

    const ClassNameBody:IGetClassNameListBody = {
      "ClassId": 1,
    }

    const  GetAllAlbumBody:IGetAllAlbumNameListBody={
      Id:1,
    }


    const DeleteAllAlbumBody:IDeletePhotoAlbumBody={
      "Id":10,
    }

    const onSubmit = () => {
      let isError=false
      if(title===''){
        setTitleError('Mandotory Field')
        isError=true
      }
      else{
        setTitleError('')
      }
      if(date===''){
        setDateError('Mandatory Field')
        isError=true
      }
      else{
        setDateError('')
      }

      setTitle('')
      setDate('')
      dispatch(getAddPhoto(AddPhoto));
  
    }
 

    useEffect(() => {
      dispatch(getClassNameList(ClassNameBody))
      }, [])

      useEffect(()=>{
        setItemList(GetClass)
         },[GetClass])

      useEffect(() => {
        toast.success(GetAddPhoto)
        }, [GetAddPhoto])

        useEffect(()=>{
          dispatch(GetAllAlbumNameList(GetAllAlbumBody))
        },[])
        // useEffect(()=>{
        //   dispatch(DeleteAllAlbumList(DeleteAllAlbumBody))
        // },[])
  
const clickNavigate =()=>{

}
  return (
    <Container>
        <PageHeader heading={'AddPhoto'} />
        {ItemList.length>0 &&
        <SelectedCard ItemList={ItemList} clickItem={clickItem}/> 
      }
        <TextField value={title} onChange={(e)=>setTitle(e.target.value)}  
      label={'Title'} />
      {titlerror}
       <Typography> Link</Typography>
      <TextField type='date' value={date} onChange={(e)=>setDate(e.target.value)} />
      {dateerror}
      <br></br>
      <Button onClick={onSubmit}>Submit</Button>
     
      <List2Card ItemList={GetAllAlbum}/>
    </Container>
  )
}

export default AddPhoto
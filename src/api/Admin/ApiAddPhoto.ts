import http from "../../utils/http-common";
import {IAddPhotoAlbumBody,IAddPhotoAlbumResult,IGetClassNameListBody,IGetClassNameListResult,IGetAllAlbumNameListBody,IGetAllAlbumNameListResult,IDeletePhotoAlbumBody,IDeletePhotoAlbumResult} from 'src/Interface/Admin/IAddPhoto'


const GetAddPhoto = (data: IAddPhotoAlbumBody) => {
    return http.post<IAddPhotoAlbumResult[]>('AddPhotoAlbum',data);
  };

  const GetClassList=(data:IGetClassNameListBody)=>{
    return http.post<IGetClassNameListResult[]>('GetClassNameList',data);
  };

  const GetAllAlbumList=(data:IGetAllAlbumNameListBody)=>{
    return http.post<IGetAllAlbumNameListResult[]>('GetAllAlbumNameList',data);
  };

  const DeleteAlbumList=(data:IDeletePhotoAlbumBody)=>{
    return http.post<IDeletePhotoAlbumResult[]>('DeletePhotoAlbum',data)
  }

  const GetAddPhotoApi ={
    GetAddPhoto,
    GetClassList,
    GetAllAlbumList,
    DeleteAlbumList

}

export default GetAddPhotoApi;
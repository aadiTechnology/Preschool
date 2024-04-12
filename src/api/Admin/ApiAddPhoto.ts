import http from "../../utils/http-common";
import {IAddPhotoAlbumBody,IGetClassNameListResult,IGetAllAlbumNameListResult,IDeletePhotoAlbumBody} from 'src/Interface/Admin/IAddPhoto'


const GetAddPhoto = (data: IAddPhotoAlbumBody) => {
    return http.post<string>('AddPhotoAlbum',data);
  };

  const GetClassList=()=>{
    return http.post<IGetClassNameListResult[]>('GetClassNameList');
  };

  const GetAllAlbumList=()=>{
    return http.post<IGetAllAlbumNameListResult[]>('GetAllAlbumNameList');
  };

  const DeleteAlbumList=(data:IDeletePhotoAlbumBody)=>{
    return http.post<string>('DeletePhotoAlbum',data)
  }

  const GetAddPhotoApi ={
    GetAddPhoto,
    GetClassList,
    GetAllAlbumList,
    DeleteAlbumList

}

export default GetAddPhotoApi;
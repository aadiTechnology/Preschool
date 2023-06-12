import http from "../../utils/http-common";
import {IAddPhotoAlbumBody,IAddPhotoAlbumResult,IGetClassNameListBody,IGetClassNameListResult} from 'src/Interface/Admin/IAddPhoto'


const GetAddPhoto = (data: IAddPhotoAlbumBody) => {
    return http.post<IAddPhotoAlbumResult[]>('AddPhotoAlbum',data);
  };

  const GetClassList=(data:IGetClassNameListBody)=>{
    return http.post<IGetClassNameListResult[]>('GetClassNameList',data);
  }

  const GetAddPhotoApi ={
    GetAddPhoto,
    GetClassList
}

export default GetAddPhotoApi;
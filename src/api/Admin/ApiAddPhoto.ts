import http from "../../utils/http-common";
import {IAddPhotoAlbumBody,IAddPhotoAlbumResult} from 'src/Interface/Admin/IAddPhoto'


const GetAddPhoto = (data: IAddPhotoAlbumBody) => {
    return http.post<IAddPhotoAlbumResult[]>('AddPhotoAlbum',data);
  };

  const GetAddPhotoApi ={
    GetAddPhoto,
}

export default GetAddPhotoApi;
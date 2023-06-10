import http from "../../utils/http-common";
import { IGetYearDropDownForAlbumListBody,IGetYearDropDownForAlbumListResult } from "src/Interface/Student/IViewphoto";

const GetYearDropDownForAlbumList =(data:IGetYearDropDownForAlbumListBody)=>{
    return http.post<IGetYearDropDownForAlbumListResult>('GetYearDropDownForAlbumList',data)
};

const GetYearDropDownForAlbumListApi ={
    GetYearDropDownForAlbumList

}

export default GetYearDropDownForAlbumListApi;
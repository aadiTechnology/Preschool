import http from "../../utils/http-common";
import { IGetYearDropDownForAlbumListBody,IGetYearDropDownForAlbumListResult, IGetAlbumNameListBody,IGetAlbumNameListResult} from "src/Interface/Student/IViewphoto";

const GetYearDropDownForAlbumList =(data:IGetYearDropDownForAlbumListBody)=>{
    return http.post<IGetYearDropDownForAlbumListResult[]>('GetYearDropDownForAlbumList',data)
};

const GetAlbumNameList =(data:IGetAlbumNameListBody)=>{
    return http.post<IGetAlbumNameListResult[]>('GetAlbumNameList',data)
};

const GetViewAlbumbApi ={
    GetYearDropDownForAlbumList,
    GetAlbumNameList
}

export default GetViewAlbumbApi;
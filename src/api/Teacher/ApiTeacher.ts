import http from "../../utils/http-common";
import {IGetClassNameListBody ,IGetClassNameListResult ,IGetAddHomeworkBody ,
  IGetAddHomeworkResult ,IGetDetailsListBody,IGetDetailsListResult ,IDeleteHomeworkBody ,IDeleteHomeworkResult ,IHomeworkListForEditBody,IHomeworkListForEditResult} from "src/Interface/Teacher/IAddHomework";

  const GetClassForTeacher = (data: IGetClassNameListBody) => {
    return http.post<IGetClassNameListResult[]>('GetClassNameList',data);
  };

  const GetAddHomework = (data: IGetAddHomeworkBody) => {
    return http.post<IGetAddHomeworkResult[]>('AddHomeworkDetails',data);
  };

  const GetDetailsList = (data: IGetDetailsListBody) => {
    return http.post<IGetDetailsListResult[]>('GetHomeworkDetailsList',data);
  };

  const GetDeleteHomework= (data: IDeleteHomeworkBody) => {
    return http.post<IDeleteHomeworkResult[]>('DeleteHomeworkDetails',data);
  };

  const GetHomeworkListForEdit= (data: IHomeworkListForEditBody) => {
    return http.post<IHomeworkListForEditResult[]>('HomeworkDetailsListForEdit',data);
  };
  
const GetClassForTeacherApi ={
    GetClassForTeacher,
    GetAddHomework,
    GetDetailsList,
    GetDeleteHomework,
    GetHomeworkListForEdit
}

export default GetClassForTeacherApi;

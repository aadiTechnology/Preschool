import http from "../../utils/http-common";
import {IGetClassNameListBody ,IGetClassNameListResult ,IGetDescriptionBody ,
  IGetDescriptionResult ,IGetDetailsListBody,IGetDetailsListResult ,IDeleteHomeworkBody ,IDeleteHomeworkResult ,IHomeworkListForEditBody,IHomeworkListForEditResult} from "src/Interface/Teacher/ITeacher";

  const GetClassForTeacher = (data: IGetClassNameListBody) => {
    return http.post<IGetClassNameListResult[]>('GetClassNameList',data);
  };

  const GetDescription = (data: IGetDescriptionBody) => {
    return http.post<IGetDescriptionResult[]>('AddHomeworkDetails',data);
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
    GetDescription,
    GetDetailsList,
    GetDeleteHomework,
    GetHomeworkListForEdit
}

export default GetClassForTeacherApi;

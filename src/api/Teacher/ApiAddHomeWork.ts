import http from "../../utils/http-common";
import {IGetClassNameListBody ,IGetClassNameListResult ,IGetAddHomeworkBody ,IGetSubjectNameBody,IGetSubjectNameResult,
  IGetAddHomeworkResult ,IGetDetailsListBody,IGetDetailsListResult ,IDeleteHomeworkBody ,IDeleteHomeworkResult , ISubmitHomeworkBody,ISubmitHomeworkResult,IHomeworkListForEditBody,IHomeworkListForEditResult} from "src/Interface/Teacher/IAddHomework";

  const GetClassForTeacher = (data: IGetClassNameListBody) => {
    return http.post<IGetClassNameListResult[]>('GetClassNameList',data);
  };

  const GetSubjectForTeacher = () => {
    return http.post<IGetSubjectNameResult[]>('GetSubjectNameDropdown');
  };

  const GetAddHomework = (data: IGetAddHomeworkBody) => {
    return http.post<IGetAddHomeworkResult[]>('AddHomeworkDetails',data);
  };

  const GetDetailsList = (data: IGetDetailsListBody) => {
    return http.post<IGetDetailsListResult[]>('GetHomeworkDetailsList',data);
  };

  const GetSubmitHomework = (data: ISubmitHomeworkBody) => {
    return http.post<ISubmitHomeworkResult[]>('SubmitHomework',data);
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
    GetHomeworkListForEdit,
    GetSubmitHomework,
    GetSubjectForTeacher
}

export default GetClassForTeacherApi;

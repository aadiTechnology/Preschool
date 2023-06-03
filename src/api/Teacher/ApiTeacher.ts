import http from "../../utils/http-common";
import {IGetClassNameListBody ,IGetClassNameListResult ,IGetDescriptionBody ,IGetDescriptionResult } from "src/Interface/Teacher/ITeacher";

  const GetClassForTeacher = (data: IGetClassNameListBody) => {
    return http.post<IGetClassNameListResult[]>('GetClassNameList',data);
  };

  const GetDescription = (data: IGetDescriptionBody) => {
    return http.post<IGetDescriptionResult[]>('AddHomeworkDetails',data);
  };
  
const GetClassForTeacherApi ={
    GetClassForTeacher,
    GetDescription
}

export default GetClassForTeacherApi;

import http from "../../utils/http-common";
import {IGetClassNameListBody ,IGetClassNameListResult } from "src/Interface/Teacher/ITeacher";

  const GetClassForTeacher = (data: IGetClassNameListBody) => {
    return http.post<IGetClassNameListResult[]>('GetClassNameList',data);
  };
  
const GetClassForTeacherApi ={
    GetClassForTeacher
}

export default GetClassForTeacherApi;

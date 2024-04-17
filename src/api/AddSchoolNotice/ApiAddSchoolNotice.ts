import http from "../../utils/http-common";
import {IGetClassNameListBody,IGetClassNameListResult, IAddSchoolNoticeResult,IAddSchoolNoticeBody,IGetSchoolNoticeListBody,IGetSchoolNoticeListResult,ISchoolNoticeListForEditBody,ISchoolNoticeListForEditResult,ISendNoticeBody,ISendNoticeResult,IDeleteSchoolNoticeBody ,IDeleteSchoolNoticeResult} from "src/Interface/AddSchoolNotice/IAddSchoolNotice";

const GetClassForTeacher = (data: IGetClassNameListBody) => {
    return http.post<IGetClassNameListResult[]>('GetClassNameList',data);
  };
const StudentSchoolNotice = (data: IAddSchoolNoticeBody) =>
 {
   console.log(data,"data");
    return http.post<string>('AddSchoolNotice', data);
};

const GetSendNotice = (data: ISendNoticeBody) => {
    return http.post<ISendNoticeResult[]>('SendNotice',data);
  };
  
const GetSchoolNoticeList = (data: IGetSchoolNoticeListBody) => {
    return http.post<IGetSchoolNoticeListResult[]>('GetSchoolNoticeList', data)

};
const SchoolNoticeListForEdit = (data: ISchoolNoticeListForEditBody) => {
    return http.post<ISchoolNoticeListForEditResult[]>('SchoolNoticeListForEdit', data)
};

const SchoolNoticeListForDelete = (data: IDeleteSchoolNoticeBody) => {
  return http.post<string>('DeleteSchoolNotice', data)
};

const StudentSchoolNoticeApi = {
    GetClassForTeacher,
    StudentSchoolNotice,
    GetSendNotice,
    GetSchoolNoticeList,
    SchoolNoticeListForEdit,
    SchoolNoticeListForDelete,
}

export default StudentSchoolNoticeApi
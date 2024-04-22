import http from "../../utils/http-common";
import {IGetClassNameListBody, IGetClassNameListResult,IGetClassDivisionListBody,IGetClassDivisionListResult}  from "src/Interface/ClassNameList/ICLassNameList";


const ClassName = (data:IGetClassNameListBody) => {
    return http.post<IGetClassNameListResult[]>('GetClassNameList',data);
};

const DivisionList = (data:IGetClassDivisionListBody) => {
    return http.post<IGetClassDivisionListResult[]>('GetClassDivisionList',data);
};

const ClassNameListApi={
    ClassName,
    DivisionList,
}


export default ClassNameListApi
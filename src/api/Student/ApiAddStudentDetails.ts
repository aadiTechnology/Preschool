import http from "../../utils/http-common";
import { IGetAddStudentDetailsResult, IGetAddStudentDetailsBody ,IGetAdmissionDetailsResult ,IGetAdmissionDetailsBody,IAddUserLoginInfoBody,IAddUserLoginInfoResult} from "src/Interface/Student/IAddStudentDetails";


const GetAddStudentDetails = (data: IGetAddStudentDetailsBody) => {
    return http.post<IGetAddStudentDetailsResult[]>('AddStudentDetails', data)
};

const GetAdmissionDetail = (data: IGetAdmissionDetailsBody) => {
    return http.post<IGetAdmissionDetailsResult[]>('GetAdmissionDetails', data)
};

const AddUserLoginInfo= (data: IAddUserLoginInfoBody) => {
    return http.post<IAddUserLoginInfoResult[]>('AddUserLoginInfo', data)
};

const GetAddStudentDetailsApi = {
    GetAddStudentDetails,
    GetAdmissionDetail,
    AddUserLoginInfo

}

export default GetAddStudentDetailsApi
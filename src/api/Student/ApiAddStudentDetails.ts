import http from "../../utils/http-common";
import { IAddStudentEnquiryResult, IAddStudentEnquiryBody ,IGetAdmissionDetailsResult ,IGetAdmissionDetailsBody,IAddUserLoginInfoBody,IAddUserLoginInfoResult} from "src/Interface/Student/IAddStudentDetails";


const GetAddStudentEnquiryDetails = (data: IAddStudentEnquiryBody) => {
    return http.post<IAddStudentEnquiryResult[]>('AddStudentEnquiryDetails', data)
};

const GetAdmissionDetail = (data: IGetAdmissionDetailsBody) => {
    return http.post<IGetAdmissionDetailsResult[]>('GetAdmissionDetails', data)
};

const AddUserLoginInfo= (data: IAddUserLoginInfoBody) => {
    return http.post<IAddUserLoginInfoResult[]>('AddUserLoginInfo', data)
};

const GetAddStudentEnquiryDetailsApi = {
    GetAddStudentEnquiryDetails,
    GetAdmissionDetail,
    AddUserLoginInfo

}

export default GetAddStudentEnquiryDetailsApi
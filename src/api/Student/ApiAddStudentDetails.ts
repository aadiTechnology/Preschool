import http from "../../utils/http-common";
import { IAddStudentEnquiryResult, IAddStudentEnquiryBody ,IStudentEnquiryListResult,
IGetAdmissionDetailsResult ,IGetAdmissionDetailsBody,IAddUserLoginInfoBody,
IAddUserLoginInfoResult ,IStudentDetailFollowUpResult ,IStudentDetailFollowUpBody} from "src/Interface/Student/IAddStudentDetails";


const GetAddStudentEnquiryDetails = (data: IAddStudentEnquiryBody) => {
    return http.post<IAddStudentEnquiryResult[]>('AddStudentEnquiryDetails', data)
};

const GetAdmissionDetail = (data: IGetAdmissionDetailsBody) => {
    return http.post<IGetAdmissionDetailsResult[]>('GetAdmissionDetails', data)
};
const GetStudentEnquiryList = () => {
    return http.post<IStudentEnquiryListResult[]>('GetStudentEnquiryDetailsList')
};

const GetStudentDetailsFollowUp = (data: IStudentDetailFollowUpBody) => {
    console.log('GetStudentDetailsForFollowUp',data)
    return http.post<IStudentDetailFollowUpResult[]>('GetStudentDetailsForFollowUp', data)
};

const AddUserLoginInfo= (data: IAddUserLoginInfoBody) => {
    return http.post<IAddUserLoginInfoResult[]>('AddUserLoginInfo', data)
};

const GetAddStudentEnquiryDetailsApi = {
    GetAddStudentEnquiryDetails,
    GetAdmissionDetail,
    AddUserLoginInfo,
    GetStudentEnquiryList,
    GetStudentDetailsFollowUp

}

export default GetAddStudentEnquiryDetailsApi
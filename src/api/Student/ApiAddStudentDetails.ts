import http from "../../utils/http-common";
import { IAddStudentEnquiryBody ,IStudentEnquiryListResult,
IGetAdmissionDetailsResult ,IGetAdmissionDetailsBody,IAddUserLoginInfoBody,IEditStudentEnquiryBody,IEditStudentEnquiryResult,
IStudentDetailFollowUpResult ,IStudentDetailFollowUpBody,IDeleteStudentBody} from "src/Interface/Student/IAddStudentDetails";


const GetAddStudentEnquiryDetails = (data: IAddStudentEnquiryBody) => {
    return http.post<string>('AddStudentEnquiryDetails', data)
};

const GetAdmissionDetail = (data: IGetAdmissionDetailsBody) => {
    return http.post<IGetAdmissionDetailsResult[]>('GetAdmissionDetails', data)
};
const GetStudentEnquiryList = () => {
    return http.post<IStudentEnquiryListResult[]>('GetStudentEnquiryDetailsList')
};

const GetStudentDetailsFollowUp = (data: IStudentDetailFollowUpBody) => {
    return http.post<IStudentDetailFollowUpResult[]>('GetStudentDetailsForFollowUp', data)
};

const AddUserLoginInfo= (data: IAddUserLoginInfoBody) => {
    return http.post<string>('AddUserLoginInfo', data)
};

const EditStudentEnquiry= (data: IEditStudentEnquiryBody) => {
    return http.post<IEditStudentEnquiryResult>('EditStudentEnquirydetails', data)
};
const DeleteStudentDetails= (data: IDeleteStudentBody) => {
    return http.post<string>('DeleteStudentDetails', data)
};

const GetAddStudentEnquiryDetailsApi = {
    GetAddStudentEnquiryDetails,
    GetAdmissionDetail,
    AddUserLoginInfo,
    GetStudentEnquiryList,
    GetStudentDetailsFollowUp,
    EditStudentEnquiry,
    DeleteStudentDetails

}

export default GetAddStudentEnquiryDetailsApi
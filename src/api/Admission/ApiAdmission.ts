import { IAddAdmissionBody, IGetAdmissionDetailsBody } from "src/Interface/Admission/IAdmission"; // Update import to match your Enquiry interfaces
import http from '../../utils/http-common1';

const AddAdmissionApi = (data: IAddAdmissionBody) => {
    return http.post<string>('AddAdmission', data);
};

const GetAdmissionListApi = () => {
    return http.post<IAddAdmissionBody[]>('GetAdmissionList'); // Assuming 'GetEnquiryList' is the endpoint for fetching the enquiry list
};

const DeleteAdmissionApi = (data: IGetAdmissionDetailsBody) => {
    return http.post<string>('DeleteAdmission', data); // Assuming 'AddFollowUp' is the endpoint for adding a follow-up
};

const AdmissionApi = {
    DeleteAdmissionApi,
    GetAdmissionListApi,
    AddAdmissionApi
};

export default AdmissionApi;
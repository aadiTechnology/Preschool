import { IAddEnquiryBody, IGetEnquiryDetailsBody } from "src/Interface/Enquiry/IEnquiry"; // Update import to match your Enquiry interfaces
import http from '../../utils/http-common1';

const AddStudentApi = (data: IAddEnquiryBody) => {
  return http.post<string>('AddStudent', data);
};
const GetEnquiryListApi = () => {
  return http.post<IAddEnquiryBody[]>('GetEnquiryList'); // Assuming 'GetEnquiryList' is the endpoint for fetching the enquiry list
};

const GetClassApi = () => {
  return http.post<IAddEnquiryBody[]>('GetClass');
};
const GetEnquiryDetailsApi = (data: IGetEnquiryDetailsBody) => {
  return http.post<IAddEnquiryBody>('EnquiryListEditorFollowUp', data);
};




const EnquiryApi = {
  AddStudentApi,
  GetEnquiryListApi,
  GetClassApi,
  GetEnquiryDetailsApi
 
};
export default EnquiryApi;

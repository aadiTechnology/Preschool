import {IAddSchoolNotice, IGetSchoolNoticeDetails} from "src/Interface/SchoolNotice/ISchoolNotice"; // Update import to match your Enquiry interfaces
import http from '../../utils/http-common';

const AddSchoolNoticeApi = (data: IAddSchoolNotice) => {
    return http.post<string>('AddSchoolNotice', data);
  };
  const GetSchoolNoticeListApi = () => {
    return http.post<IAddSchoolNotice[]>('GetSchoolNoticeList'); // Assuming 'GetEnquiryList' is the endpoint for fetching the enquiry list
  };
  const GetSchoolNoticeDatesApi = () => {
    return http.post<IAddSchoolNotice[]>('GetSchoolNoticeDates'); // Assuming 'GetEnquiryList' is the endpoint for fetching the enquiry list
  };
  const GetSchoolNoticeDetailsApi = (data: IGetSchoolNoticeDetails) => {
    return http.post<IAddSchoolNotice>('GetNoticeDetailsByID', data);
  };
  const GetSchoolNoticeDetailsByDateApi  = (data: IGetSchoolNoticeDetails) => {
    return http.post<IAddSchoolNotice[]>('GetNoticeDetailsByDate', data);
  };
  const DeleteSchoolNoticeApi = (data: IGetSchoolNoticeDetails) => {
    return http.post<string>('DeleteSchoolNotice', data); // Assuming 'AddFollowUp' is the endpoint for adding a follow-up
  };
  
  

  const SchoolNoticeApi = {
    AddSchoolNoticeApi,
    GetSchoolNoticeDatesApi,
    GetSchoolNoticeListApi,
    GetSchoolNoticeDetailsApi,
    DeleteSchoolNoticeApi,
    GetSchoolNoticeDetailsByDateApi
  };

  export default SchoolNoticeApi;
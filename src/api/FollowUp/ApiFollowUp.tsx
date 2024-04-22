import http from '../../utils/http-common1';


import { IAddFollowUpBody, IGetFollowUpDetailsBody } from "src/Interface/FollowUp/IFollowUp"; // Import the correct interface for follow-up

const AddFollowUpApi = (data: IAddFollowUpBody) => {
  return http.post<string>('AddFollowUp', data); // Assuming 'AddFollowUp' is the endpoint for adding a follow-up
};

const GetFollowUpListApi = () => {
  return http.post<IAddFollowUpBody[]>('GetFollowUpList'); // Assuming 'GetStudentFollowUpList' is the endpoint for fetching follow-up list
};
const GetStatusApi = () => {
  return http.post<IAddFollowUpBody[]>('GetStatus');
};

const GetFollowUpHistoryListApi = (data: IGetFollowUpDetailsBody) => {
  return http.post<IAddFollowUpBody[]>('FollowUpHistory', data); 
};

const DeleteFollowUpApi = (data: IGetFollowUpDetailsBody) => {
  return http.post<string>('DeleteFollowUp', data); // Assuming 'AddFollowUp' is the endpoint for adding a follow-up
};
const FollowUpApi = {
  AddFollowUpApi,
  GetFollowUpListApi,
  GetStatusApi,
  GetFollowUpHistoryListApi,
  DeleteFollowUpApi
};

export default FollowUpApi;

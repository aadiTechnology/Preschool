
import http from"../../utils/http-common";
import { IAddStudentDetailsBody,IGetStudentDetailsBody,IGetStudentDetailsResult,IGetStudentDetailsListResult, IGetStudentDetailsListBody,IDeleteStudentDetailsBody} from "src/Interface/AddStudentDetails/IAddStudentDetails";

const AddStudentDetails = (data: IAddStudentDetailsBody) => {
    return http.post<string>('AddStudentDetails', data)
};
const GetStudentDetails = (data: IGetStudentDetailsBody) => {
    return http.post<IGetStudentDetailsResult[]>('GetStudentDetails',data);
  };
  const GetStudentDetailsList=(data: IGetStudentDetailsListBody)=>{
    return http.post<IGetStudentDetailsListResult[]>('GetStudentDetailsList',data);
  }; 
  const DeleteStudentDetails= (data: IDeleteStudentDetailsBody) => {
    return http.post<string>('DeleteStudentDetails', data)
};
const AddStudentDetailsApi ={
AddStudentDetails,
GetStudentDetails,
GetStudentDetailsList,
DeleteStudentDetails
}


export default AddStudentDetailsApi;
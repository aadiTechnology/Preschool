import http from "../../utils/http-common";
import{IAddStudentFollowUpBody,IGetStudentFollowUpListResult ,IDeleteFollowUpListBody} from 'src/Interface/Admin/IAddStudentFollowUp'


const AddStudentFollowUp = (data: IAddStudentFollowUpBody) => {
    return http.post<string>('AddStudentFollowUp',data);
  };

  const DeleteFollowUp = (data: IDeleteFollowUpListBody) => {
    return http.post<string>('DeleteFollowUpList',data);
  };

  const FollowUpList=()=>{
   return http.post<IGetStudentFollowUpListResult[]>('GetStudentFollowUpList');
  
  };

const AddStudentFollowUpApi={
    AddStudentFollowUp,
    FollowUpList,
    DeleteFollowUp
}

export default AddStudentFollowUpApi;
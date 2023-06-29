import http from "../../utils/http-common";
import{IAddStudentFollowUpBody,IGetStudentFollowUpListResult} from 'src/Interface/Admin/IAddStudentFollowUp'


const AddStudentFollowUp = (data: IAddStudentFollowUpBody) => {
    return http.post<String>('AddStudentFollowUp',data);
  };

  const FollowUpList=()=>{
   return http.post<IGetStudentFollowUpListResult[]>('GetStudentFollowUpList');
  
  };

const AddStudentFollowUpApi={
    AddStudentFollowUp,
    FollowUpList
}

export default AddStudentFollowUpApi;
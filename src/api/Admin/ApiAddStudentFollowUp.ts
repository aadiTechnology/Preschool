import http from "../../utils/http-common";
import{IAddStudentFollowUpBody} from 'src/Interface/Admin/IAddStudentFollowUp'


const AddStudentFollowUp = (data: IAddStudentFollowUpBody) => {
    return http.post<String>('AddStudentFollowUp',data);
  };

const AddStudentFollowUpApi={
    AddStudentFollowUp
}

export default AddStudentFollowUpApi;
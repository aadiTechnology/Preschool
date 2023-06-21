import http from "../../utils/http-common";
import { IGetAddStudentDetailsResult, IGetAddStudentDetailsBody} from "src/Interface/Student/IAddStudentDetails";


const GetAddStudentDetails = (data: IGetAddStudentDetailsBody) => {
    return http.post<IGetAddStudentDetailsResult[]>('AddStudentDetails', data)
};

const GetAddStudentDetailsApi = {
    GetAddStudentDetails

}

export default GetAddStudentDetailsApi
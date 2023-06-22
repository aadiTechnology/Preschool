import http from "../../utils/http-common";
import { IGetAddStudentDetailsResult, IGetAddStudentDetailsBody ,IGetAdmissionDetailsResult ,IGetAdmissionDetailsBody} from "src/Interface/Student/IAddStudentDetails";


const GetAddStudentDetails = (data: IGetAddStudentDetailsBody) => {
    return http.post<IGetAddStudentDetailsResult[]>('AddStudentDetails', data)
};

const GetAdmissionDetail = (data: IGetAdmissionDetailsBody) => {
    return http.post<IGetAdmissionDetailsResult[]>('GetAdmissionDetails', data)
};

const GetAddStudentDetailsApi = {
    GetAddStudentDetails,
    GetAdmissionDetail

}

export default GetAddStudentDetailsApi

import http from "../../utils/http-common";
import { ISchoolListBody ,ISchoolListResult } from "src/Interface/SchoolList";

  const GetAllSchoolsList = (data: ISchoolListBody) => {
    return http.post<ISchoolListResult>('School/GetAllSchools',data);
  };
  
const SchoolListApi ={
    GetAllSchoolsList
}

export default SchoolListApi;

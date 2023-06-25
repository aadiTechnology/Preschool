import http from "../../utils/http-common";
import{IAdmissionConversionBody} from 'src/Interface/Admin/IAdmissionConversion'


const AddAdmissionConversion = (data: IAdmissionConversionBody) => {
    return http.post<String>('AdmissionConversion',data);
  };

  const AdmissionConversionApi ={
    AddAdmissionConversion
}

export default AdmissionConversionApi;
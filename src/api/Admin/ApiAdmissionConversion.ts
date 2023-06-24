import http from "../../utils/http-common";
import{IAdmissionConversionBody,IAdmissionConversionResult} from 'src/Interface/Admin/IAdmissionConversion'


const AddAdmissionConversion = (data: IAdmissionConversionBody) => {
    return http.post<IAdmissionConversionResult[]>('AdmissionConversion',data);
  };

  const AdmissionConversionApi ={
    AddAdmissionConversion
}

export default AdmissionConversionApi;
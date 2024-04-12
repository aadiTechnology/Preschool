import http from "../../utils/http-common";
import{IAdmissionConversionBody ,IGetAdmissionDetailsBody ,IGetAdmissionDetailsResult} from 'src/Interface/Admin/IAdmissionConversion'


const AddAdmissionConversion = (data: IAdmissionConversionBody) => {
    return http.post<String>('AdmissionConversion',data);
  };

  const AdmissionDetails = (data: IGetAdmissionDetailsBody) => {
    return http.post<IGetAdmissionDetailsResult[]>('GetAdmissionDetails',data);
  };

  const AdmissionConversionApi ={
    AddAdmissionConversion,
    AdmissionDetails
}

export default AdmissionConversionApi;
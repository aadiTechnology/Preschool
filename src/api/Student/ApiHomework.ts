import http from "../../utils/http-common";
import { IGetDateForLegendBody,IGetDateForLegendResult } from "src/Interface/Student/IHomework";

const GetDateForLegend =(data:IGetDateForLegendBody)=>{
    return http.post<IGetDateForLegendResult>('GetDateForLegend',data)
};

const GetDateForLegendApi ={
    GetDateForLegend

}

export default GetDateForLegendApi;
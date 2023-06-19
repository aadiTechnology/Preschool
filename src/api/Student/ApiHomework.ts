import http from "../../utils/http-common";
import { IGetDateForLegendBody, IGetDateForLegendResult,IGetViewHomeWorkListBody,IGetViewHomeWorkListResult} from "src/Interface/Student/IHomework";


const GetDateForLegend = (data: IGetDateForLegendBody) => {
    return http.post<IGetDateForLegendResult[]>('GetDateForLegend', data)
};

const GetViewHomeWorkList = (data: IGetViewHomeWorkListBody) => {
    return http.post<IGetViewHomeWorkListResult>('GetViewHomeWorkList', data)
};


const GetHomeworkApi = {
    GetDateForLegend,
    GetViewHomeWorkList

}

export default GetHomeworkApi
import http from "../../utils/http-common";
import { IGetDateForLegendBody, IGetDateForLegendResult,IGetViewHomeWorkListBody,IGetViewHomeWorkListResult ,IGetDatewiseHomeworkDetailsBody ,IGetDatewiseHomeworkDetailsResult} from "src/Interface/Student/IHomework";


const GetDateForLegend = (data: IGetDateForLegendBody) => {
    return http.post<IGetDateForLegendResult[]>('GetDateForLegend', data)
};

const GetHomeWorkDate = (data: IGetDatewiseHomeworkDetailsBody) => {
    return http.post<IGetDatewiseHomeworkDetailsResult>('GetDatewiseHomeworkDetails', data)
};

const GetViewHomeWorkList = (data: IGetViewHomeWorkListBody) => {
    return http.post<IGetViewHomeWorkListResult>('GetViewHomeWorkList', data)
};


const GetHomeworkApi = {
    GetDateForLegend,
    GetViewHomeWorkList,
    GetHomeWorkDate

}

export default GetHomeworkApi
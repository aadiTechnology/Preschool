import http from "../../utils/http-common";
import {IGetDateForLegendNoticeBody,IGetDateForLegendNoticeResult,IGetDatewiseSchoolNoticeBody,IGetDatewiseSchoolNoticeResult,IGetViewSchoolNoticeListBody,IGetViewSchoolNoticeListResult} 
from 'src/Interface/Student/ISchoolNotice'

const GetDateForLegendNotice = (data: IGetDateForLegendNoticeBody) => {
    return http.post<IGetDateForLegendNoticeResult[]>('GetDateForLegendNotice', data)
};

const GetNoticeDate = (data: IGetDatewiseSchoolNoticeBody) => {
    return http.post<IGetDatewiseSchoolNoticeResult>('GetDatewiseSchoolNotice', data)
};

const GetViewSchoolNoticeList = (data: IGetViewSchoolNoticeListBody) => {
    return http.post<IGetViewSchoolNoticeListResult[]>('GetViewSchoolNoticeList', data)
};


const GetSchoolNoiceApi = {
    GetDateForLegendNotice,
    GetNoticeDate,
    GetViewSchoolNoticeList

}

export default GetSchoolNoiceApi
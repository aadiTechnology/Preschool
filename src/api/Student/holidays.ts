
import http from "../../utils/http-common";
import IHolidays from "../../Interface/holidays"

  const GetHolidayList = (data: IHolidays) => {
    return http.post<IHolidays>('School/GetHolidayList',data);
  };
  
const HolidaysApi ={
    GetHolidayList
}

export default HolidaysApi;

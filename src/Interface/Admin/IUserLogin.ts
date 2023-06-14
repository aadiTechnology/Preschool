import { number } from "prop-types"

export interface IUserLoginBody{
    EmailIdOrPhone: string,
    LoginPassword:string
};

export interface IUserLoginResult{
    
    EmailId: string,
    PhoneNo: string,
    LoginPassword: string,
    BirthDate: string,
    EmailIdOrPhone: string

}
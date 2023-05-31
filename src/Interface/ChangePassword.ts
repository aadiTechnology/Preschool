export interface IChangePasswordBody {
    asUserName: string;
    asUserId: string;
    asSchoolId: string;
    asNewPassword: string;
    asOldPassword: string;
};

export interface IChangePasswordResult {
    ChangePasswordResult:string
}
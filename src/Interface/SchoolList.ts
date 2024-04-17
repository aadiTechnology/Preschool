export interface ISchoolListBody {
    asSchoolId: string;
};

export interface ISchoolListResult{
    GetAllSchoolsResult:[{
            FolderName: string,
            SchoolId: string,
            SchoolName: string,
            SiteURL: string,
            SmsSenderName: string,
            TermsSchoolName: string}]
};
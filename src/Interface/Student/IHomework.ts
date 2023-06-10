export interface IGetDateForLegendBody {
    AssignDate:string;
};

export interface IGetDateForLegendResult{
    Id: number,
    Class: string,
    SubjectName: string,
    SubjectDescription: string,
    AssignDate: string,
    Attachment: string,
    UserId: number
}


export interface IGetViewHomeWorkListBody {
    AssignDate:string;
};

export interface IGetViewHomeWorkListResult{
    Id: number,
    Class: string,
    SubjectName: string,
    SubjectDescription: string,
    AssignDate: string,
    Attachment: string,
    UserId: number

}
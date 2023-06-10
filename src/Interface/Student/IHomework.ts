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
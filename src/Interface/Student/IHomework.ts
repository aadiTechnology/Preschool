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
    UserId: number,
};

export interface IGetDatewiseHomeworkDetailsBody {
    StartDate:string;
    EndDate:string;
};

export interface IGetDatewiseHomeworkDetailsResult{
    Id: number,
    HomeworkDate:string[]
    AllowPrevious:boolean,
    AllowNext:boolean
};


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
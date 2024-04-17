export interface IGetDateForLegendBody {
    ClassDivisionId:number;
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
    ClassDivisionId:number;
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
    Id:number;
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
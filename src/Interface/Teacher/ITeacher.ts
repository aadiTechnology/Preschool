export interface IGetClassNameListBody {
    TeacherId:number
};

export interface IGetClassNameListResult {
    ClassId: number,
    ClassName: string,
    InsertBy: number,
   TeacherId: number
};

export interface IGetDescriptionBody {
    Class:string,
    SubjectName:string,
    SubjectDescription:string,
    AssignDate:string,
    Attachment:string,
    Camera:string
};

export interface IGetDescriptionResult{}


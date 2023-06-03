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

export interface IGetDescriptionResult{};

export interface IGetDetailsListBody {
    TeacherId:number
};

export interface IGetDetailsListResult {
   Id: number,
   Class: string,
   SubjectName: string,
   SubjectDescription: string,
   AssignDate: string,
   Attachment: string,
   Camera: string
};

export interface IDeleteHomeworkBody {
    TeacherId:number
}

export interface IDeleteHomeworkResult{};

export interface IHomeworkListForEditBody {
    HomeworkDetailsId:number
}

export interface IHomeworkListForEditResult{
    Id: number,
    Class: string,
    SubjectName: string,
    SubjectDescription: string,
    AssignDate: string,
    Attachment: string,
    Camera: string

};

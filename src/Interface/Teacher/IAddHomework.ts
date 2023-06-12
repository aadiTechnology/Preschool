export interface IGetClassNameListBody {
    Id:number
};

export interface IGetClassNameListResult {
    ClassId: number,
    ClassName: string,
    InsertBy: number,
   TeacherId: number
};

export interface IGetAddHomeworkBody {
    Class:string,
    SubjectName:string,
    SubjectDescription:string,
    AssignDate:string,
    Attachment:string,
    Camera:string
};

export interface IGetAddHomeworkResult{};

export interface IGetDetailsListBody {
    Id:number
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
    Id:number
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

export interface ISubmitHomeworkBody {
    TeacherId:number
}

export interface ISubmitHomeworkResult{};

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
    Id:number,
    ClassId:number,
    SubjectId:number,
    SubjectDescription:string,
    AssignDate:string,
    AcademicId:number,
    Attachment:string,
    Camera:string,
    UserId: number,
    UserRoleId: number
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
   IsSubmited: boolean,
   Attachment: string,
   Camera: string
};

export interface IDeleteHomeworkBody {
    Id:number
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
    Id:number
}

export interface ISubmitHomeworkResult{};

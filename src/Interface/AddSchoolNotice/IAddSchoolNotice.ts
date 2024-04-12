export interface IGetClassNameListBody {
    Id:number
};

export interface IGetClassNameListResult {
    ClassId: number,
    ClassName: string,
    InsertBy: number,
   TeacherId: number
};

export interface IAddSchoolNoticeBody {
    Id: number,
    ClassId: number,
    NoticeName: string,
    NoticeDescription: string,
    AssignDate: string,
    Attachment: string,
    BinaryData: File,
    AttachmentName: string,
    UserId: number,
};

export interface IAddSchoolNoticeResult {
string
};
export interface IGetSchoolNoticeListBody {
    ClassId: number
};

export interface IGetSchoolNoticeListResult {
    Id: number,
    ClassDivisionId: number,
    ClassId: number,
    SubjectId: number,
    NoticeDescription: string,
    AssignDate: string,
    BinaryData: File,
    Attachment: string,
    AttachmentName: string,
    UserId: number,
    UserRoleId: number,
    ClassName: null,
    DivisionName: string,
    NoticeName: string,
    IsSubmited: boolean,
    StartDate: null,
    EndDate: null,
    NoticeDate: null,
    AllowPrevious: boolean,
    AllowNext: boolean

}
export interface ISchoolNoticeListForEditBody {
    Id: number
}

export interface ISchoolNoticeListForEditResult {
    Id: number,
    ClassDivisionId: number,
    ClassId: number,
    SubjectId: number,
    NoticeDescription: string,
    AssignDate: string,
    BinaryData: File,
    Attachment: string,
    AttachmentName: string,
    UserId:number,
    UserRoleId: number,
    ClassName: string,
    DivisionName: null,
    NoticeName: string,
    IsSubmited: boolean,
    StartDate: null,
    EndDate: null,
    NoticeDate: null,
    AllowPrevious:boolean,
    AllowNext: boolean
}
export interface IDeleteSchoolNoticeBody {
    Id:number
}

export interface IDeleteSchoolNoticeResult{
    string
};

export interface ISendNoticeBody {
    Id:number
}

export interface ISendNoticeResult{
    string
};

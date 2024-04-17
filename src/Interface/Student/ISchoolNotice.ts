export interface IGetDateForLegendNoticeBody {
    ClassId:number;
    AssignDate:string;
};

export interface IGetDateForLegendNoticeResult{
    Id: number,
    ClassName: string,
    NoticeName: string,
    NoticeDescription: string,
    AssignDate: string,
    Attachment: string,
    UserId: number,
};

export interface IGetDatewiseSchoolNoticeBody {
    ClassId:number;
    StartDate:string;
    EndDate:string;
};

export interface IGetDatewiseSchoolNoticeResult{
    Id: number,
    NoticeDate:string[]
    AllowPrevious:boolean,
    AllowNext:boolean
};


export interface IGetViewSchoolNoticeListBody {
    Id:number;
};

export interface IGetViewSchoolNoticeListResult{
    Id: number,
    Class: string,
    NoticeName: string,
    NoticeDescription: string,
    AssignDate: string,
    Attachment: string,
    UserId: number

}
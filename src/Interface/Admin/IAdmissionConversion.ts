export interface IAdmissionConversionBody{

    Class: number,
    StudentName:string,
    FatherName:string,
    PhoneNo:string,
    MotherName :string,
    PhoneNo1:string,
    emailid:string,
    BirthDate:string,
    Address:string,
    Sms:boolean,
    Attachment:string,
    UserId:number
};


export interface IGetAdmissionDetailsBody{
    Id: number
}

export interface IGetAdmissionDetailsResult{
    Id: number,
    ClassId: number,
    StudentName: string,
    FatherName: string,
    PhoneNo: string,
    MotherName: string,
    PhoneNo1: string,
    Address: string,
    EmailId: string,
    Sms: true,
    Camera: null,
    Attachment: string,
    BirthDate: null,
    UserId: number
}

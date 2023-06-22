export interface IGetAddStudentDetailsBody{
    ClassId: number,
    StudentName:string,
    BirthDate:string,
    Age:number,
    FatherName:string,
    PhoneNo:string,
    MotherName:string,
    PhoneNo2:string,
    SocietyName:string,
    StudentAddress:string,
    emailid:string,
    SMS:string,
    UserId:number
};

export interface IGetAddStudentDetailsResult{}


export interface IGetAdmissionDetailsBody{
   Id:number
};

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
    UserId: 0
}
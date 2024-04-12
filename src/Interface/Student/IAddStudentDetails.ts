export interface IAddStudentEnquiryBody{
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

export interface IStudentEnquiryListResult{
        Id: number,
        Class: null,
        ClassId: 0,
        StudentName: string,
        BirthDate: null,
        Age: 0,
        FatherName: string,
        PhoneNo: string,
        MotherName: null,
        PhoneNo2: null,
        SocietyName: null,
        StudentAddress: null,
        EmailId: null,
        StudentDetailsId: number,
        SMS: false,
        UserId: number,
        InsertedDate: string,
        ClassName: string
}


export interface IStudentDetailFollowUpBody{
    Id:number
 };
 
 export interface IStudentDetailFollowUpResult{
     
    Id: number,
    StudentName: string,
    CallStatus: null,
    Reminder: null,
    Comment: null,
    EmailId: string,
    FatherName: string,
    PhoneNo: string,
    MotherName: string,
    PhoneNo2: null,
    ClassName: string
 }

export interface IAddUserLoginInfoBody{
    emailid:string,
    PhoneNo:string,
    BirthDate:string,
    UserId:number
}


export interface IEditStudentEnquiryBody{
    Id : number
}

export interface IEditStudentEnquiryResult{
    Id:number,
    StudentName: number,
    CallStatus: null,
    Reminder: null,
    Comment: null,
    EmailId: number,
    FatherName: number,
    PhoneNo: number,
    MotherName: number,
    PhoneNo2: number,
    ClassName: null,
    UserId: number,
    BirthDate: number,
    Age: number,
    SocietyName: number,
    StudentAddress: number
}

export interface IDeleteStudentBody{
    Id : number
}
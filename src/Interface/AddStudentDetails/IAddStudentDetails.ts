export interface IAddStudentDetailsBody{
    Id:number,
    ClassId: string,
    StudentName:string,
    BirthDate:string,
    Age:number,
    FatherName:string,
    PhoneNo:string,
    MotherName:string,
    PhoneNo2:string,
    SocietyName:string,
    StudentAddress:string,
    Emailid:string,
   
};

export interface IGetStudentDetailsBody{
    
        Id: number,
    
};
export interface IGetStudentDetailsResult{
        Id: number,
        Class: null,
        ClassId: number,
        StudentName: string,
        BirthDate: string,
        Age: number,
        FatherName: string,
        PhoneNo: string,
        MotherName: string,
        PhoneNo2: string,
        SocietyName: string,
        StudentAddress: string,
        EmailId: string,
        StudentDetailsId: number,
        SMS: boolean,
        UserId: number,
        InsertedDate: null,
        ClassName: null,
        EnquiryAdmissionDetails: number,
        AdmissionDate: null,
        ClassDivisionId: number,
        ClassDivision: null,
        DivisionName: null
    
}
export interface IGetStudentDetailsListBody{
    
    EnquiryAdmissionDetails:number,
    ClassId: number

};
export interface IGetStudentDetailsListResult{
    Id: number,
    Class: null,
    ClassId: number,
    StudentName: string,
    BirthDate: string,
    Age: number,
    FatherName: string,
    PhoneNo: string,
    MotherName: string,
    PhoneNo2: string,
    SocietyName: string,
    StudentAddress: string,
    EmailId: string,
    StudentDetailsId: number,
    SMS: boolean,
    UserId: number,
    InsertedDate: null,
    ClassName: null,
    EnquiryAdmissionDetails: number,
    AdmissionDate: null,
    ClassDivisionId: number,
    ClassDivision: null,
    DivisionName: null

}
export interface IDeleteStudentDetailsBody{
    
    Id: number,

};
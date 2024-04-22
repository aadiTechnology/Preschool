export interface IAddAdmissionBody {
    ID: number,
    StudentName: string,
    Birthdate: string,
    Gender: number,
    FatherName: string,
    MotherName: string,
    FatherPhoneNo: string,
    MotherPhoneNo: string,
    SocietyName: string,
    StudentAddress: string,
    EmailId: string,
    EnquiryDate?: string,
    ClassName?: string,
    ClassId: number,
    AdmissionDate? : string,
    PhotoFileName : string,
    PhotoFilePath : string,
    ReceiptFileName : string,
    ReceiptFilePath : string
}

export interface IGetAdmissionDetailsBody {
    ID : number
}
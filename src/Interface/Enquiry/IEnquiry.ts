export interface IAddEnquiryBody {
    ID: number,
    StudentName: string,
    Birthdate?: string,
    Gender?: number,
    FatherName: string,
    MotherName: string,
    FatherPhoneNo: string,
    MotherPhoneNo: string,
    SocietyName?: string,
    StudentAddress?: string,
    EmailId: string,
    EnquiryDate?: string,
    ClassName?: string,
    ClassId: number,
    PhotoFileName? : string,
    PhotoFilePath? : string,
    ReceiptFileName? : string,
    ReceiptFilePath? : string
}

export interface IGetEnquiryDetailsBody {
    ID: number
}

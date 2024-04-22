export interface IAddFollowUpBody {
    ID: number,
    ClassId: number,
    StudentName: string,
    Birthdate?: string,
    Gender?: number,
    FatherName: string,
    FatherPhoneNo: string,
    MotherName: string,
    MotherPhoneNo: string,
    StudentAddress?: string,
    SocietyName?: string,
    EmailId: string,
    EnquiryDate?: string,
    ClassName?: string,
    StudentId: number,
    FollowUpCount: number,
    StatusId: number,
    Reminder: string,
    Comment: string,
    FollowUpDate?: string,
    Status?: string,
    CID?: number
}
export interface IGetFollowUpDetailsBody {
    ID?: number,
    StudentId: number
}
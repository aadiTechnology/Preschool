export interface IAddStudentFollowUpBody{
    Id:number,
    CallStatus:string,
    Reminder:string,
    Comment:string
}

export interface IDeleteFollowUpListBody{
    Id:number,
  }

export interface IGetStudentFollowUpListResult{
         Id: number,
        StudentName: string,
        CallStatus: string,
        Reminder: string,
        Comment: string,
        EmailId: string,
        FatherName: string,
        PhoneNo: string,
        MotherName: string,
        PhoneNo2: string,
        ClassName: string,
        UserId: number,
        BirthDate: string,
        Age: string,
        SocietyName: string,
        StudentAddress: string
}
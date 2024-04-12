import { number,string } from "prop-types"
export  interface  IGetClassNameListBody{

}
export interface  IGetClassNameListResult
{
    ClassId: number,
    ClassName: string,
    DivisionName: null,
    InsertBy: null,
    TeacherId: null,
    UserId: number
}
//ClassDivisionList

export  interface  IGetClassDivisionListBody{
    ClassId:number
}
export interface  IGetClassDivisionListResult
{
    ClassId: number,
    ClassName: null,
    DivisionName: string,
    InsertBy: null,
    TeacherId: null,
    UserId: number
}
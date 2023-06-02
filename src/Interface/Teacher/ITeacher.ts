export interface IGetClassNameListBody {
    TeacherId:number
};

export interface IGetClassNameListResult {
    ClassId: number,
    ClassName: string,
    InsertBy: number,
   TeacherId: number
}
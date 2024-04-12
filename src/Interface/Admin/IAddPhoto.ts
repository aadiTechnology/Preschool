export interface IAddPhotoAlbumBody {
    Title:string,
    ClassId:string,
    AlbumDate:string,
    FacebookLink:string,
    UserId:number
};

export interface IGetClassNameListResult{
    Id:number
    ClassId: number,
    ClassName: string,
    InsertBy: string,
    TeacherId: string

};

export interface IGetAllAlbumNameListResult{
    Id: number,
    Title: string,
    FacebookLink: string,
    Class: string,
    AlbumDate: string,
    month: string,
    year: string,
    CreatedBy: number
};

export interface IDeletePhotoAlbumBody{
    Id:number
};





export interface IAddPhotoAlbumBody {
    Title:string,
    Class:string,
    AlbumDate:string,
    FacebookLink:string,
    CreatedBy:number
};

export interface IAddPhotoAlbumResult{};

export interface IGetClassNameListBody{};

export interface IGetClassNameListResult{
    ClassId: number,
    ClassName: string,
    InsertBy: string,
    TeacherId: string

}

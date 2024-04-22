export interface IGetYearDropDownForAlbumListBody{
    AlbumId:number
};

export interface IGetYearDropDownForAlbumListResult{
    
    AlbumId: number,
    Title: string,
    FacebookLink: string,
    Class: string,
    AlbumDate: string,
    month: string,
    year: string

}

export interface IGetAlbumNameListBody{
    month: string,
    year: string
};

export interface IGetAlbumNameListResult{
    AlbumId: number,
    Title: string,
    FacebookLink: string,
    Class: string,
    AlbumDate: string,
    month: string,
    year: string
    
}


export interface ICategory {
    name : string;
    description : string;
    artists : string;
};

export interface IArtist {
    name : string;
    description : string;
    categories : ICategory;
}
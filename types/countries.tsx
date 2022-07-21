export interface Icomments{
    _id: string;
    username: string;
    text:string;
}

export interface Itrack {
    _id:string;
    title:string;
    text:string;
    picture:string;
    comments: Icomments[]
    info: string;
}

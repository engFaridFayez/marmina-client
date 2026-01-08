export interface ILoginData {
    access_token:string;
    refresh_token:string;
    isAdmin:boolean;
    requiresReset:boolean;
    username:string;
    first_name:string;
    last_name:string;
    id:string;
}
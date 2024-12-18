export interface User{
    name: string,
    email:string,
    number:string,
    password:string,
    address:string,
    role: 'Admin' | 'User',
}
import { Role } from "./global.types";

export interface LoginForm {
    email: string;
    password: string;
}

export interface SignupForm {
    email: string;
    password: string;
    fullname: string;
    position: string;
    role: Role;
}
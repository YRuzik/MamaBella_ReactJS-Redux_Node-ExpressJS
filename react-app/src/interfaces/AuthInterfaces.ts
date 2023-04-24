import {date} from "yup";

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

export interface IUser {
    email: string;
    activated: boolean;
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    address: string;
    admin: boolean;
}

export interface IAnalytics {
    id: number;
    length: number;
    creation_date: string;
}

export interface IAddresses {
    id: string;
    address: string;
    user_id: string;
}

export interface ICart {
    id: number;
    user_id: number;
    thumbnail: string;
    dimension: string;
    weight: string;
    title: string;
    description: string;
    price: string;
}

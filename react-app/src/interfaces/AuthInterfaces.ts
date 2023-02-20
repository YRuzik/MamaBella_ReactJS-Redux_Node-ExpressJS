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

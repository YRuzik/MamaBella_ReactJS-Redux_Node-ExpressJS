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

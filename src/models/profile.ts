export type AccessToken = string;

export type ProfileType = {
    email: string;
    firstName: string;
    lastName: string;
    id: number;
};

export type ProfileResponseType = AccessToken & {
    user: ProfileType;
};

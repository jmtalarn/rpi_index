export type UserType = {
    email: string;
    picture: string;
    given_name: string;
    family_name: string;
    locale?: string;
};

export type AppState = { user: UserType | null };

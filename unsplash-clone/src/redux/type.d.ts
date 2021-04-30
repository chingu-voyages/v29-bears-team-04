interface IUser {
    email: string;
    password: string;
    name: string;
}
type UserState = {
    loggedIn: Boolean;
    error?: [];
};

type UserAction = {
    type: string;
    user: IUser;
};

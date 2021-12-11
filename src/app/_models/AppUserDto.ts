export class AppUserDto{
    firstName: string;
    lastName: string;
    mobile: string;
    dob: string;
    email: string;
    password: string;
    confirmpassword: string;
    agreeToTerms: boolean;
}

export class LoggedInUser{
    firstName: string;
    email: string;
    Token: string;
}
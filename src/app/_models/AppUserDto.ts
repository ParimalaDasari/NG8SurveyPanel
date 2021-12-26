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
    email: string;
    token: string;
}

export class LoginFormData{
    username: string;
    password: string;
}


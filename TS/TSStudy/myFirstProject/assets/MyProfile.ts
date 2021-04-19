// 对象
export class MyProfile {
    name: string;
    email: string;
    code: string;
    isInvited: boolean;

    constructor(
        name: string,
        email: string,
        code: string,
        isInvited: boolean,
    ){
        this.name = name;
        this.code = code;
        this.email = email;
        this.isInvited = isInvited;
    }
}
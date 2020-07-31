export const REQUEST_USER_SIGNIN = 'REQUEST_USER_SIGNIN';
export const SIGNIN_USER_SUCCESS_FAILURE = 'SIGNIN_USER_SUCCESS_FAILURE';

export interface requestUserSignin {
    type: string
}

export interface signinSuccessFailureObj {
    isSuccess: boolean,
    response: [],
    message: string
}

export interface actions {
    type: string,
    signinSuccessFailure: signinSuccessFailureObj
}

export type SigninActionType = requestUserSignin | actions 
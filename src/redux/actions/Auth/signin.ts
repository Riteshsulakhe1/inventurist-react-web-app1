import AxiosInstance from '../../../api/axios';
import { Dispatch } from 'redux';
export const REQUEST_USER_SIGNIN = 'REQUEST_USER_SIGNIN';
export const SIGNIN_USER_SUCCESS_FAILURE = 'SIGNIN_USER_SUCCESS_FAILURE';
import { SigninActionType, signinSuccessFailureObj } from '../../types/signin/types';

export function requestUserSignin(): SigninActionType {
    return {
        type: REQUEST_USER_SIGNIN
    };
}

export function signinSuccessFailure(signinSuccessFailureObj: signinSuccessFailureObj) {
    return {
        type: SIGNIN_USER_SUCCESS_FAILURE,
        signinSuccessFailure: signinSuccessFailureObj
    };
}

export function signin(body: object) {
    return async (dispatch: Dispatch) => {
        dispatch(requestUserSignin());
        return AxiosInstance.post('signin', body).then(res => {
            dispatch(signinSuccessFailure({ isSuccess: true, response: res.data, message: '' }));
        }).catch(error => {
            dispatch(signinSuccessFailure({ isSuccess: false, response: [], message: error.response.data.message }));
        });
    };
}

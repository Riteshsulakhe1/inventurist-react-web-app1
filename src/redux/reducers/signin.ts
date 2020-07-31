import {
    REQUEST_USER_SIGNIN,
    SIGNIN_USER_SUCCESS_FAILURE
} from '../actions/Auth/signin';

interface actions {
    type: string,
    signinSuccessFailure: object
};

const initialState = {
    isFetching: false,
    signinSuccessFailure: undefined
};

const signIn = (state = initialState, actions: actions) => {
    switch (actions.type) {
        case REQUEST_USER_SIGNIN:
            return {
                ...state,
                isFetching: true
            };
        case SIGNIN_USER_SUCCESS_FAILURE:
            return {
                ...state,
                isFetching: false,
                signinSuccessFailure: actions.signinSuccessFailure
            };
        default:
            return state;
    }
};
export default signIn;

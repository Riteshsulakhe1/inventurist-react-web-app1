import { combineReducers } from 'redux';
import signIn from './signin';

const rootReducer = combineReducers({
    signIn,
});
export default rootReducer;

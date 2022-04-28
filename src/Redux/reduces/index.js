import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { logReducer } from './logReducer';

export default combineReducers({
    app: appReducer,
    log: logReducer
})


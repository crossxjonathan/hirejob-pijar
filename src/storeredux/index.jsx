import { combineReducers } from 'redux';
import loading from './reducers/loading';
import global from './reducers/global';

const rootReducer = combineReducers({
    loading,
    global
});

export default rootReducer;
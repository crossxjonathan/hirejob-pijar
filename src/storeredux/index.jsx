import { combineReducers } from 'redux';
import loading from './reducers/loading';
import global from './reducers/global';
// import workersReducers from './reducers/workers.reducers';

const rootReducer = combineReducers({
    loading,
    global,
    // worker: workersReducers
});

export default rootReducer;
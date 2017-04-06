import { combineReducers } from 'redux';
import {counter, extra} from 'reducers/testReducer';


const reducers = combineReducers({
    counter,
    extra
});

export default reducers;

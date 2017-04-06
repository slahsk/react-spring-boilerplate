import { combineReducers } from 'redux';
import {counter} from 'reducers/testReducer';


const reducers = combineReducers({
    counter
});

export default reducers;

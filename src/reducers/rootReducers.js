import { combineReducers } from 'redux';
import machine1Reducer from './machine';
import machine2Reducer from './machine2';
import machine3Reducer from './machine3';
export const rootReducers = combineReducers({
    machine1Reducer,
    machine2Reducer,
    machine3Reducer,
})
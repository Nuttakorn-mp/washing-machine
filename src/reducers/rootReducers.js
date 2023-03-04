import { combineReducers } from 'redux';
import machine1Reducer from './machine';
import machine2Reducer from './machine2';
import machine3Reducer from './machine3';
import machine1TimeReducer from './machineTime'
import machine2TimeReducer from './machine2Time'
import machine3TimeReducer from './machine3Time'

export const rootReducers = combineReducers({
    machine1Reducer,
    machine2Reducer,
    machine3Reducer,
    machine1TimeReducer,
    machine2TimeReducer,
    machine3TimeReducer,
})
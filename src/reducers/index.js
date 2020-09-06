import { combineReducers } from 'redux'
import contactReducer from './contactReducer'
import conReduce from './conReduce';

export default combineReducers({
    contact: contactReducer,
    conRed: conReduce
});
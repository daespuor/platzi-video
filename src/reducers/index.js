import data from './data';
import modal from './modal';
import {combineReducers} from 'redux-immutable';

export default combineReducers({
    data,
    modal
});
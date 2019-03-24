import data from './data';
import modal from './modal';
import isLoading from './is-loading';
import player from './player';
import {combineReducers} from 'redux-immutable';

export default combineReducers({
    data,
    modal,
    isLoading,
    player
});
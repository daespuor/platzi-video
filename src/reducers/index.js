import data from './data';
import modal from './modal';
import isLoading from './is-loading';
import player from './player';
import myplaylist from './my-playlist';
import users from './users';
import form from './form';
import {combineReducers} from 'redux-immutable';

export default combineReducers({
    data,
    modal,
    isLoading,
    player,
    myplaylist,
    users,
    form
});
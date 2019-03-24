import {fromJS} from 'immutable';
import data from '../myplaylist.json';
const initialState=fromJS({
    data:data.categories[0].playlist
})

export default function myplaylist(state=initialState,action){
    switch(action.type){
        default:
            return state;
    }
} 
import {fromJS} from 'immutable';
import data from '../users.json';
const initialState=fromJS({
    data: data.users
})

export default function users(state=initialState,action){
    switch(action.type){
        default:
            return state;
    }
}
import {fromJS} from 'immutable';
import {IS_LOADING} from '../action-types';
const initialState=fromJS({
    active:false
})
export default function isLoading(state=initialState,action){
    switch(action.type){
        case IS_LOADING:
            return state.set('active',action.payload.value);
        default:
            return state;
    }
}
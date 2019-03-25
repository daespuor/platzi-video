import {fromJS} from 'immutable';
import {SHOW_FORM,IS_LOADING_FORM} from '../action-types';
const initialState=fromJS({
    active:false,
    isLoading:false
})

export default function form(state=initialState,action){
    switch(action.type){
        case SHOW_FORM:{
            const {value}=action.payload;
            return state.set('active',value?value:!state.get('active'));
        }
        case IS_LOADING_FORM:
            return state.set('isLoading',action.payload.value);
        default:
            return state;
    }
}
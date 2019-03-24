import normalizedData from '../schemas';
import {fromJS} from 'immutable';
import {FIND_VIDEO} from '../action-types';
const initialState=fromJS({
    entities:normalizedData.entities,
    categories:normalizedData.result.categories,
    search:''
})
export default function data(state=initialState,action){
    switch(action.type){
        case FIND_VIDEO:{
            return state.set('search',action.payload.query);
        }
        default:
            return state;
        break;
    }
}
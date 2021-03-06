import {fromJS} from 'immutable';
import {CLOSE_MODAL,OPEN_MODAL} from '../action-types';
const initialState=fromJS({
    visible:false,
    mediaId:null
})

export default function modal(state=initialState,action){
    switch(action.type){
        case OPEN_MODAL:{
            return state.merge({visible:true,
                                mediaId:action.payload.mediaId});
        }
        case CLOSE_MODAL:{
            return state.set('visible',false);
        }
        default:
            return state;
        break;
    }
}
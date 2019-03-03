import {fromJS} from 'immutable';
const initialState=fromJS({
    visible:false,
    modalId:null
})

export default function modal(state=initialState,action){
    switch(action.type){
        case 'OPEN_MODAL':{
            return state;
        }
        case 'CLOSE_MODAL':{
            return state;
        }
        default:
            return state;
        break;
    }
}
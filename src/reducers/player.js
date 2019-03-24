import { fromJS } from 'immutable';
import {
    PLAY_PAUSE,
    FULL_SCREEN,
    CHANGE_VOLUME,
    CHANGE_TIMER,
    CHANGE_PROGRESS_BAR,
    MANUAL_CHANGE_PROGRESS_BAR,
    IS_SEEKING
} from '../action-types';

const initialState = fromJS({
    pause: true,
    duration: 0,
    currentTime: 0,
    changedTime:0,
    loading: true,
    fullScreen:false,
    volume: 1,
    prevVolume:1
})
export default function player(state = initialState, action) {
    switch (action.type) {
        case PLAY_PAUSE: {
            const { value } = action.payload;
            return state.set('pause', value ? value : !state.get('pause'));
        }
        case CHANGE_VOLUME:
            const {prevVolume}=action.payload;
            return state.merge({
                volume: action.payload.value,
                prevVolume:prevVolume?prevVolume:state.get('prevVolume')
            });
        case CHANGE_TIMER:
            return state.set('duration', action.payload.value);
        case CHANGE_PROGRESS_BAR:
            return state.set('currentTime', action.payload.value);
        case MANUAL_CHANGE_PROGRESS_BAR:
            return state.set('changedTime', action.payload.value);
        case IS_SEEKING:
            return state.set('loading',action.payload.value);
        case FULL_SCREEN:{
            const { value } = action.payload;
            return state.set('fullScreen',value?value:!state.get('fullScreen'));
        }
        default:
            return state;
    }
}
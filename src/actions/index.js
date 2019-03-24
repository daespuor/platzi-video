import {
    OPEN_MODAL,
    CLOSE_MODAL,
    FIND_VIDEO,
    IS_LOADING,
    PLAY_PAUSE,
    CHANGE_VOLUME,
    CHANGE_TIMER,
    CHANGE_PROGRESS_BAR,
    MANUAL_CHANGE_PROGRESS_BAR,
    IS_SEEKING,
    FULL_SCREEN
}
from '../action-types';
export function openModal(mediaId) {
    return {
        type: OPEN_MODAL,
        payload: {
            mediaId
        }
    }
}
export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}
export function searchVideo(query) {
    return {
        type: FIND_VIDEO,
        payload: {
            query
        }
    }
}
export function isLoading(value) {
    return {
        type: IS_LOADING,
        payload: {
            value
        }
    }
}
export function searchAsyncVideo(query) {
    return dispatch => {
        dispatch(isLoading(true));
        setTimeout(() => {
            dispatch(searchVideo(query));
            dispatch(isLoading(false));
        }, 5000);
    }
}
export function togglePlayPause(value) {
    return {
        type: PLAY_PAUSE,
        payload: {
            value
        }
    }
}
export function changeVolume(value,prevVolume){
    return {
        type:CHANGE_VOLUME,
        payload:{
            value,
            prevVolume
        }
    }
}
export function changeTimer(value){
    return {
        type:CHANGE_TIMER,
        payload:{
            value
        }
    }
}
export function changeProgressBar(value){
    return {
        type:CHANGE_PROGRESS_BAR,
        payload:{
            value
        }
    }
}
export function manualChangeProgressBar(value){
    return {
        type:MANUAL_CHANGE_PROGRESS_BAR,
        payload:{
            value
        }
    }
}
export function isSeeking(value){
    return {
        type: IS_SEEKING,
        payload:{
            value
        }
    }
}
export function fullScreen(value){
    return {
        type:FULL_SCREEN,
        payload:{
            value
        }
    }
}
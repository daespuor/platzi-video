export function openModal(mediaId){
    return {
        type:'OPEN_MODAL',
        payload:{
            mediaId
        }
    }
}

export function closeModal(){
    return {
        type:'CLOSE_MODAL'
    }
}

export function searchVideo(query){
   return  {
        type:'FIND_VIDEO',
        payload:{
            query
        }
    }
}
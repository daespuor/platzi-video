import normalizedData from '../schemas';
import {fromJS,Map as map} from 'immutable';
import {FIND_VIDEO,ADD_MEDIA,UPDATE_ID} from '../action-types';
const initialState=fromJS({
    entities:normalizedData.entities,
    categories:normalizedData.result.categories,
    search:'',
    newMediaId:100
})
export default function data(state=initialState,action){
    switch(action.type){
        case FIND_VIDEO:{
            return state.set('search',action.payload.query);
        }
        case ADD_MEDIA:{
            let {newmedia}=action.payload;
            const newMediaId=state.get('newMediaId');
            newmedia.id=`${newMediaId}`;
            return state.update('entities',(entities)=>{
                const playlist=entities.get('categories').get(newmedia.category).get('playlist').push(`${newMediaId}`);
                const category=entities.get('categories').get(newmedia.category).set('playlist',playlist);
                const categories=entities.get('categories').set(newmedia.category,category);
                const media=entities.get('media').set(`${newMediaId}`,map(newmedia));
                return entities.merge({
                    categories,
                    media
                });
            })
        }
        case UPDATE_ID:
            return state.set('newMediaId',state.get('newMediaId')+1);   
        default:
            return state;
        break;
    }
}
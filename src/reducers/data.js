export default function data(state,action){
    switch(action.type){
        case 'FIND_VIDEO':{
            let results=[];
            const {query}=action.payload;
            if(query){
                //for(let category of state.data.categories){
                    const {length}=Object.getOwnPropertyNames(state.data.entities.media);
                    for(let i in state.data.entities.media){
                        const item = state.data.entities.media[i];
                        if(item.author.toLowerCase().includes(query.toLowerCase())
                         || item.title.toLowerCase().includes(query.toLowerCase())){
                             results.push(item);
                         }
                    }
                //}
            }
            return {
                ...state,
                search:results
            }
        }
        default:
            return state;
        break;
    }
}
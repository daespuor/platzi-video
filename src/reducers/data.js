export default function data(state,action){
    switch(action.type){
        case 'FIND_VIDEO':{
            let results=[];
            const {query}=action.payload;
            if(query){
                for(let category of state.data.categories){
                    category.playlist.filter((item)=>{
                        return (item.author.toLowerCase().includes(query.toLowerCase())
                        && results.push(item)) || (
                        item.title.toLowerCase().includes(query.toLowerCase()) && results.push(item));
                    });
                }
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
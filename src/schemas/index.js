'use strict';
import data from '../api.json'
import {normalize,schema} from 'normalizr';

const media= new schema.Entity('media',{},{
    idAttribute:'id',
    processStrategy:(value,parent,key)=>{
            return {
                ...value,
                "category":parent.id
            }
    }
});

const category= new schema.Entity('categories',{
    "playlist":new schema.Array(media)
});

const categories={categories:new schema.Array(category)};

export default normalize(data,categories);
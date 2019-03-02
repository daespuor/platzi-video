import React from 'react'
import {render} from 'react-dom'
import Home from '../pages/containers/home'
import normalizedData from '../schemas';
//import data from '../api.json';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from '../reducers/data';
console.log(normalizedData);
const home= document.getElementById('home-container')
const initialState={
    data:{
        entities:normalizedData.entities,
        categories:normalizedData.result.categories
    },
    search:[]
}
const store= createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(<Provider store={store}>
    <Home/>
</Provider>,home)
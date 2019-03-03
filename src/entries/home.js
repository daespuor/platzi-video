import React from 'react'
import {render} from 'react-dom'
import Home from '../pages/containers/home'
import reducer from '../reducers';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Map as map} from 'immutable';

const home= document.getElementById('home-container')

const store= createStore(
    reducer,
    map({}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(<Provider store={store}>
    <Home/>
</Provider>,home)
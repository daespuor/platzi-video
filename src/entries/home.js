import React from 'react'
import {render} from 'react-dom'
import Home from '../pages/containers/home'
import reducer from '../reducers';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {Map as map} from 'immutable';
import {composeWithDevTools} from 'redux-devtools-extension';
import Thunk from 'redux-thunk';

const home= document.getElementById('home-container')
function logger({getState,dispatch}){
    return (next)=>{
        return (action)=>{
            console.log('El estado inicial es',getState().toJS());
            console.log('Vamos a disparar la siguiente accion',action);
            const value=next(action);
            console.log('El estado despues de ejecutar la accion es',getState().toJS());
            return value;
        }
    }
}
const store= createStore(
    reducer,
    map({}),
    composeWithDevTools(
        applyMiddleware(logger,Thunk)
    )
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(<Provider store={store}>
    <Home/>
</Provider>,home)
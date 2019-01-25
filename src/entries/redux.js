'use strict';
import {createStore} from 'redux';
var $form = document.getElementById('form');
$form.addEventListener('submit',function handleEvent(event){
    event.preventDefault();
    var data= new FormData($form);
    var title= data.get('title');
    console.log(title); 
    store.dispatch({ //Envía una acción al Store
        type: 'ADD_SONG', //Type obligatorio
        payload: {
            title
        }
    })
})

var initialState=[
    {
        title:'Despacito'
    },
    {
        title:'One more time'
    },
    {
        title:'Echame la culpa'
    }
]

var reducer= function reducer(state,action){//Procesa la acción
    var type=action.type;
    switch(type){
        case "ADD_SONG":
            return [...state,action.payload];
            break;
        default:
            return state;
            break;
    }
}

function render(){
    var playlist= store.getState(); // Consultar el State en el Store
    var $template=document.getElementById('playlist');
    $template.innerHTML='';
    playlist.forEach((item)=>{ //Adicionar a la pantalla
        var $item= document.createElement('p');
        $item.textContent=item.title;
        $template.appendChild($item);
    });
    console.log(store.getState());
}

var store=createStore(
    reducer, //Reducer
    initialState, //InitialState
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//Enhance
)

store.subscribe(function handleUpdate(){
    render();
})

render();
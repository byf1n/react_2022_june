import {useReducer, useRef} from "react";

import './App.css';

const App = () => {

const init = (initValue) => {
    return {cats:initValue, dogs:initValue}
}

const reducer = (state, {type,payload}) => {
    switch (type){
        case 'addCat':
            return {...state, cats:[...state.cats, {name:payload, id: Date.now()}]}
        case 'deleteCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)}
        case 'addDog':
            return {...state, dogs:[...state.dogs, {name:payload, id: Date.now()}]}
        case 'deleteDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)}
    }
}

const [state, dispatch] = useReducer(reducer, [], init);

const inputCat = useRef();
const inputDog = useRef();

const saveCat = () =>{
    dispatch({type:'addCat',payload:inputCat.current.value});
    inputCat.current.value = '';
};
const saveDog = () =>{
    dispatch({type:'addDog',payload:inputDog.current.value});
    inputDog.current.value = '';
};

    return (
        <div className={'main'}>
            <div className={'cats'}>
                <label>Cat name <input type="text" placeholder={'name...'} ref={inputCat}/></label>
                <button onClick={saveCat}>save</button>
                {
                    state.cats.map(cat => (<div key={cat.id}>
                        {cat.name}
                        <button onClick={() => dispatch({type:'deleteCat',payload:cat.id})}>delete</button>
                    </div>))
                }
            </div>
            <div className={'dogs'}>
                <label>Dog name <input type="text" placeholder={'name...'} ref={inputDog}/></label>
                <button onClick={saveDog}>save</button>
                {
                    state.dogs.map(dog => (<div key={dog.id}>
                        {dog.name}
                        <button onClick={() => dispatch({type:'deleteDog',payload:dog.id})}>delete</button>
                    </div>))
                }
            </div>

        </div>
    )
}
export default App;

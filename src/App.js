import './App.css';
import {useReducer, useRef} from "react";

const init = (initValue) => {
    return {cats: initValue, dogs: initValue}
}

const reducer = (state, {type, payload}) => {
    switch (type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]};
        case 'deleteCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)};
        case 'addDog':
            return {...state, dogs:[...state.dogs, {name:payload, id: Date.now()}]};
        case 'deleteDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)}
        default:
            return state;
    }
}

function App() {

    const catInput = useRef();
    const dogInput = useRef();

    const createCat = () => {
        dispatch({type:'addCat', payload: catInput.current.value});
        catInput.current.value = '';
    }

    const createDog = () => {
        dispatch({type: 'addDog', payload: dogInput.current.value});
        dogInput.current.value = '';
    }

    const [state, dispatch] = useReducer(reducer, [], init);

    return (
        <div className={'main'}>
            <div className={'cats'}>
                <label>Cats name <input ref={catInput} placeholder={'name...'} type="text"/></label>
                <button onClick={createCat}>save cat</button>
                {
                    state.cats.map(cat => (<div key={cat.id}>
                        {cat.name}
                        <button onClick={() => dispatch({type: 'deleteCat', payload: cat.id})}>delete</button>
                    </div>))
                }
            </div>
            <div className={'dogs'}>
                <label>Dogs name <input placeholder={'name...'} type="text" ref={dogInput}/></label>
                <button onClick={createDog}>save dog</button>
                {
                    state.dogs.map(dog => (<div key={dog.id}>
                        {dog.name}
                        <button onClick={() => dispatch({type:'deleteDog',payload:dog.id})}>delete</button>
                    </div>))
                }
            </div>

        </div>
    );
}

export default App;

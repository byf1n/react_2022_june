import {useEffect, useState} from "react";

import {services} from "../../services";
import {Todo} from "../todo/Todo";

const Todos = () => {
    let [todos, setTodos] = useState([]);
    useEffect(() => {
        services.getTodos().then(value => setTodos(value.data))
    },[])
    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    )
}
export {Todos};
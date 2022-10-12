import './Todo.css'

const Todo = ({todo}) => {

    return (
        <div className={'todo'}>
            <div>id: {todo.id}</div>
            <div>title: {todo.title}</div>
            <div>completed: {todo.completed.toString()}</div>
        </div>
    )
}
export {Todo};
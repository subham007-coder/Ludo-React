import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sampale todo", id: uuidv4()}]);
    let [newTodos, NewSetTodos] = useState();

    let updateTodoValue = (e) => {
        NewSetTodos(e.target.value);
    }

    let addNewTask = () => {
        setTodos([...todos, {task: newTodos, id: uuidv4()}]);
        NewSetTodos("")
    }

    return (
        <>
            <div>
                <input type="text" value={newTodos} onChange={updateTodoValue} placeholder="add a task" />
                <br /><br />
                <button onClick={addNewTask}>Add Task</button>
                <br /><br />
                <h4>Todo List</h4>
                <ul>
                    {
                        todos.map((todo) => (
                            <li key={todo.id}>{todo.task}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
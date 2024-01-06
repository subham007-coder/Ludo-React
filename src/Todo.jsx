import { useState } from "react";

export default function TodoList() {
    let [todos, setTodos] = useState(["sampale todo"]);
    let [newTodos, NewSetTodos] = useState();

    let updateTodoValue = (e) => {
        NewSetTodos(e.target.value);
    }

    let addNewTask = () => {

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
                            <li>{todo}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
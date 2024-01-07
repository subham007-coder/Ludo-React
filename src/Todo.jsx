import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sampale todo", id: uuidv4() }]);
    let [newTodos, NewSetTodos] = useState();

    let updateTodoValue = (e) => {
        NewSetTodos(e.target.value);
    }

    let addNewTask = () => {
        setTodos((pervTodo) => {
            return [...pervTodo, { task: newTodos, id: uuidv4() }];
        });
        NewSetTodos("");
    }

    let deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
    }

    let upperCase = () => {
        setTodos((pervTodo) => 
            pervTodo.map((todo) => {
                return{
                    ...todo,
                     task: todo.task.toUpperCase()
                }
            })
        )
    }

    return (
        <>
            <div>
                <input name="myInput" type="text" value={newTodos} onChange={updateTodoValue} placeholder="add a task" />
                <br /><br />
                <button onClick={addNewTask}>Add Task</button>
                <br /><br />
                <h4>Todo List</h4>
                <ul>
                    {
                        todos.map((todo) => (
                            <li key={todo.id}>
                                <span>{todo.task}</span>
                                &nbsp;&nbsp;&nbsp;
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                                <br />
                                <br />
                            </li>
                        ))
                    }
                    <button onClick={upperCase}>Upper Case All</button>
                </ul>
            </div>
        </>
    )
}
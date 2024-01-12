import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sampale todo", id: uuidv4(), isDone: false }]);
    let [newTodos, NewSetTodos] = useState();

    let updateTodoValue = (e) => {
        NewSetTodos(e.target.value);
    }

    let addNewTask = () => {
        setTodos((pervTodo) => {
            return [...pervTodo, { task: newTodos, id: uuidv4(), isDone: false }];
        });
        NewSetTodos("");
    }

    let deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
    }

    let upperCaseAll = () => {
        setTodos((pervTodo) =>
            pervTodo.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                }
            })
        )
    }

    let upperCaseOne = (id) => {
        setTodos((pervTodo) =>
            pervTodo.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase()
                    }
                } else {
                    return todo;
                }
            })
        )
    }

    let doneOne = (id) => {
        setTodos((pervTodo) =>
            pervTodo.map((todo) => {
                console.log(todo.isDone);
                if (todo.id == id) {
                    return {
                        ...todo,
                        isDone: true
                    }
                } else {
                    return todo;
                }
            })
        )
    };
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
                                <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>{todo.task}</span>
                                &nbsp;&nbsp;&nbsp;
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                                &nbsp;
                                <button onClick={() => upperCaseOne(todo.id)}>UpperCaseOne</button>
                                &nbsp;
                                <button onClick={() => doneOne(todo.id)}>Mark As Done</button>
                                <br />
                                <br />
                            </li>
                        ))
                    }
                    <button onClick={upperCaseAll}>Upper Case All</button>
                </ul>
            </div>
        </>
    )
}
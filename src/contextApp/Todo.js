import React, { useRef, useState } from 'react';
import { useThemeValue } from './ThemeProvider';
import './Todo.css';

const Todo = () => {

    const [ task, setTask ] = useState('');

    const [ tasks, setTasks ] = useState([]);

    const addItem = () => {
        const newItems = [...tasks];
        newItems.push(task)
        setTasks(newItems);
        setTask('');
    }

    const removeTask = (index) => {
        const newItems = [...tasks];
        newItems.splice(index, 1);
        setTasks(newItems);
    }

    const [ { theme }, dispatch ] = useThemeValue();

    console.log(theme);

    return (
        <div className={theme ? "dark todo" : "todo"}>
            <div className="todo__header">
                <span onClick={() => dispatch({
                })}>Toggle theme</span>
                <h1>My tasks</h1>
            </div>
            <div className="todo__body">
                <div className="todo__addTask">
                    <input value={task} onChange={e => setTask(e.target.value)} placeholder="What do you need to do ??"></input>
                    <button onClick={addItem}>Add task</button>
                </div>
                <ul>
                    {
                        tasks.map((t, index) => { return (
                            <li>
                                {t}
                                <span onClick={() => removeTask(index)}>Done</span>
                            </li>
                        )})
                    }
                </ul>
            </div>
        </div>
    )
}

export default Todo;
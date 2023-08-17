import AddTask from './components/AddTask/AddTask';
import Nav from './components/Nav/Nav';
import ShowTasks from './components/ShowTasks/ShowTasks';

import './App.css';
import './assets/style/main.scss';
import { useState } from 'react';

const App = () => {

    // State
    const [tasks, setTasks] = useState(['Node', 'React']);

    // Handler
    const addTaskClickHandler = getAllTasks => {
        setTasks([...getAllTasks]);
    }

    return (
        <>
            <Nav />
            <AddTask onAddTask={addTaskClickHandler} />
            <ShowTasks  allTasks={tasks} />
        </>
    );
}

export default App;

import { collection, addDoc } from "firebase/firestore";
import {db} from './firebase';

import AddTask from './components/AddTask/AddTask';
import Nav from './components/Nav/Nav';
import ShowTasks from './components/ShowTasks/ShowTasks';

import './App.css';
import './assets/style/main.scss';
import { useState } from 'react';

const App = () => {

    // State
    const [tasks, setTasks] = useState([]);

    // Handler
    const addTaskClickHandler = getTask => {
        setTasks(current => [...current, getTask]);
    }

    // Firebase Add Data to the db
    const addTask = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "tasks"), {
                tasks,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    // Firebase read data from the db

    return (
        <>
            <Nav />
            <AddTask onAddTask={addTaskClickHandler} />
            <ShowTasks  allTasks={tasks} />
            <button onClick={addTask}>Add data to Firebase</button>
        </>
    );
}

export default App;

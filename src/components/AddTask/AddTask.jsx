import { useState } from 'react';
import './AddTask.scss';

const AddTask = props => {

    // State
    const [task, setTask] = useState();

    // Handler
    const formSubmitHandler = e => {
        e.preventDefault();
        if (task.length > 0) {
            props.onAddTask(task);
            setTask('');
        }
    }

    const taskInputChangeHandler = e => {
        setTask(e.target.value);
    }

    return (
        <div className="add-task">
            <div>
                <form className="add-task__form" onSubmit={formSubmitHandler}>
                    <div className="add-task__form-container-add-task">
                        <input className="add-task__input-text input-text" type="text" value={task} placeholder="Add Task" onChange={taskInputChangeHandler} />
                    </div>
                    <div className="add-task__form-container-submit">
                        <button className="button" type="submit">Add Task</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddTask;

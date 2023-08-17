import './AddTask.scss';

const AddTask = () => {
    return (
        <div className="add-task">
            <div>
                <form className="add-task__form">
                    <div className="add-task__form-container-add-task">
                        <input className="add-task__input-text input-text" type="text" placeholder="Add Task" />
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

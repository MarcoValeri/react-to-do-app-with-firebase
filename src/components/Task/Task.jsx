import './Task.scss';

const Task = props => {
    return (
        <div className="task">
            <h3 className="h3">{props.taskValue}</h3>
        </div>
    )
}

export default Task;

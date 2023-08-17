import Task from '../Task/Task';
import './ShowTasks.scss';

const ShowTasks = props => {

    return (
        <div className="show-tasks">
            <div className="show-tasks__container-title">
                <h2 className="h2">Task To Do</h2>
            </div>
            <div className="show-tasks__wrapper">
                {props.allTasks.length > 0 ? props.allTasks.map((task, index) => <Task key={index} taskValue={task} />) : <Task taskValue="No tasks at the moment" />}
            </div>
        </div>
    )
}

export default ShowTasks;

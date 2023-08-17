import './ShowTasks.scss';

const ShowTasks = props => {

    return (
        <div className="show-tasks">
            <div className="show-tasks__container-title">
                <h2 className="h2">Task To Do</h2>
            </div>
            <div className="show-tasks__wrapper">
                {
                    props.allTasks.map((task, index) =>
                        <div key={index} className="show-tasks__container-task">
                            <h3 className="h3">{task}</h3>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ShowTasks;

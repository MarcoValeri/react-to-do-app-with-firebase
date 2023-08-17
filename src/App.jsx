import AddTask from './components/AddTask/AddTask';
import Nav from './components/Nav/Nav';
import ShowTasks from './components/ShowTasks/ShowTasks';

import './App.css';
import './assets/style/main.scss';

const App = () => {

    const tasks = [
        'Create React App',
        'Cypress for testing',
        'Code email template'
    ];


    return (
        <>
            <Nav />
            <AddTask />
            <ShowTasks  allTasks={tasks} />
        </>
    );
}

export default App;

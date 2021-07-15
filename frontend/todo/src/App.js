import './App.css';

import Task from './components/Task';
import TaskForm from './components/TaskForm';

/* styles */
import './styles/taskform.css';
import './styles/task.css';
function App() {
  return (
    <div className="App">
      <TaskForm/>
      <Task/>
     
    </div>
  );
}

export default App;

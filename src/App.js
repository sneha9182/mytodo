
import 'bootstrap/dist/css/bootstrap.min.css';
import {AddTaskComponent} from './addtask.jsx'


import './App.css';

function App() {
  
  return (
    <div className='app'>
      <h2 className='display-3 Appheader'>ToDo List App</h2>
      
      <AddTaskComponent/>
      
     
    </div>
  )
}

export default App;
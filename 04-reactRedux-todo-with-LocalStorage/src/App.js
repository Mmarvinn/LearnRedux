import './App.css';
import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';
import Filters from './components/Filters';

function App() {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <NewTodo />
      <Filters />
      <TodoList />
    </div>
  );
}

export default App;

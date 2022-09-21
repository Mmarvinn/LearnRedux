import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from './store/actions/todos-actions';
import { allTodos } from './store/selectors/todos-selectors';

function App() {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <NewTodo />
      <TodoList />
    </div>
  );
}

const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="new todo" />
      <input type="submit" value="Add todo" />
    </form>
  );
};

const TodoList = () => {
  const todos = useSelector(allTodos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.title}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />{' '}
          {todo.title}
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default App;

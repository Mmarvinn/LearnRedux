import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  selectVisibleTodos,
  toggleTodo,
  removeTodo,
  loadTodos,
  todosSelectors,
} from './todos-slice';

export const TodoList = () => {
  const activeFilter = useSelector((state) => state.filter);
  const todos = useSelector(todosSelectors.selectAll);
  const visibleTodos = selectVisibleTodos(todos, activeFilter);
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.todos);

  // useEffect(() => {
  //   dispatch(loadTodos())
  //     .unwrap() // this method using when we want use .then and .catch, if we dont use .unwrap we receive response of only first .then
  //     .then(() => {
  //       toast('All todos were fetch');
  //     })
  //     .catch((err) => {
  //       toast(err);
  //     });
  // }, [dispatch]);

  useEffect(() => {
    const promise = dispatch(loadTodos());

    return () => {
      promise.abort(); // if we want to stop fetching data
    };
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <ul>
        {error && <h2>{error}</h2>}
        {loading === 'loading' && <h2>Loading ....</h2>}
        {loading === 'idle' &&
          !error &&
          visibleTodos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />{' '}
              {todo.title}{' '}
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

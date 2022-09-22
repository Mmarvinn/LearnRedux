import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './store';

function App() {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <Counter />
    </div>
  );
}

const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement)}>-</button>
      <button onClick={() => dispatch(increment)}>+</button>
      <button onClick={() => dispatch(reset)}>reset</button>
    </div>
  );
};

export default App;

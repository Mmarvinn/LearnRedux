import './App.css';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { increment, decrement, reset } from './store';

function App() {
  return (
    <div className="App">
      <h1>Hello Redux</h1>
      <Counter />
    </div>
  );
}

class _Counter extends Component {
  render() {
    // const dispatch = this.props.dispatch;
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button onClick={this.props.dec}>-</button>
        <button onClick={this.props.inc}>+</button>
        <button onClick={this.props.res}>reset</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

// const dispatchStateToProps = (dispatch) => ({
//   inc: () => dispatch(increment),
//   dec: () => dispatch(decrement),
//   res: () => dispatch(reset),
// });

// const dispatchStateToProps = (dispatch) => ({
//   inc: bindActionCreators(increment, dispatch),
//   dec: bindActionCreators(decrement, dispatch),
//   res: bindActionCreators(reset, dispatch),
// });

const dispatchStateToProps = {
  inc: increment,
  dec: decrement,
  res: reset,
};

const Counter = connect(mapStateToProps, dispatchStateToProps)(_Counter);

export default App;

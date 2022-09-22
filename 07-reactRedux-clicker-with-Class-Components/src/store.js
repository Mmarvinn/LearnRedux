import { createStore, combineReducers } from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1;
    }
    case 'DECREMENT': {
      return state - 1;
    }
    case 'RESET': {
      return 0;
    }
    default: {
      return state;
    }
  }
};

export const store = createStore(
  combineReducers({
    count: counter,
  })
);

// // actions
// export const increment = {
//   type: 'INCREMENT',
// };

// export const decrement = {
//   type: 'DECREMENT',
// };

// export const reset = {
//   type: 'RESET',
// };

// actions for bindActionCreators and 3-rd method
export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});

export const reset = () => ({
  type: 'RESET',
});

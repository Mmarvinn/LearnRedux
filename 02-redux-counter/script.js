import { createStore } from 'redux';

let nextTodoId = 0;

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return [
        ...state,
        {
          id: ++nextTodoId,
          title: action.title,
          completed: false,
        },
      ];
    }
    case 'TOGGLE_TODO': {
      return state.map((todo) =>
        todo.id === action.todoId
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    }
    default: {
      return state;
    }
  }
};

// persist
const defaultValues = [
  { id: 0, title: 'hello', completed: false },
  { id: 1, title: 'hi', completed: false },
];

const store = createStore(todosReducer, defaultValues);

// actions creators

const addTodo = (title) => ({
  type: 'ADD_TODO',
  title,
});

const toggleTodo = (todoId) => ({
  type: 'TOGGLE_TODO',
  todoId,
});

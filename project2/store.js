let total = 2;
const initialState = {
  todos: [
    {
      id: 0,
      isDone: false,
      content: '자바스크립트 공부하기',
      date: new Date('2021-12-1'),
    },
    {
      id: 1,
      isDone: false,
      content: '요가하기',
      date: new Date('2021-11-30'),
    },
  ],
  total,
};

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: {
    todo, // { content, date }
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const toggleTodoStatus = (id) => ({
  type: TOGGLE_TODO_STATUS,
  payload: { id },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        todos: [
          ...state.todos,
          {
            id: state.total + 1,
            checked: false,
            content: action.payload.todo.content,
            date: action.payload.todo.date,
          },
        ],
        total: state.total + 1,
      };
    }
    case DELETE_TODO: {
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }
    case TOGGLE_TODO_STATUS: {
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                isDone: !todo.isDone,
              }
            : todo
        ),
      };
    }
    default: {
      return state;
    }
  }
};

const store = Redux.createStore(reducer);

export default store;

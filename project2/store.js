let acc = 0; // 누적수
const initialState = {
  todos: [],
  acc,
};

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO_STATUS = 'TOGGLE_TODO_STATUS';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: {
    todo, // { content, date } 형태로 데이터를 가져온다.
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
            id: state.acc + 1,
            isDone: false,
            content: action.payload.todo.content,
            date: action.payload.todo.date,
          },
        ],
        acc: state.acc + 1,
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }
    case TOGGLE_TODO_STATUS: {
      return {
        ...state,
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

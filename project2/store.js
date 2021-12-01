const initialState = {
  todos: [
    {
      id: 1,
      checked: false,
      todo: '자바스크립트 공부하기',
      date: new Date('2021-12-1'),
    },
    {
      id: 2,
      checked: false,
      todo: '요가하기',
      date: new Date('2021-11-30'),
    },
  ],
};

const ADD_TODO = 'todo/ADD_TODO';
const DELETE_TODO = 'todo/DELETE_TODO';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case addTodo: {
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            checked: false,
            todo: action.payload,
            date: new Date(),
          },
        ],
      };
    }
    case deleteTodo: {
      return {
        todos: todos.filter((todo) => todo.id !== action.payload),
      };
    }
    default: {
      return state;
    }
  }
};

const store = Redux.createStore(reducer);

export default store;

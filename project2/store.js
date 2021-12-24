const initialState = {
  todos: [
    {
      id: 1,
      checked: false,
      content: '자바스크립트 공부하기',
      date: new Date('2021-12-1'),
    },
    {
      id: 2,
      checked: false,
      content: '요가하기',
      date: new Date('2021-11-30'),
    },
  ],
};

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: { todo },
});

const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: { id },
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
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
    case DELETE_TODO: {
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

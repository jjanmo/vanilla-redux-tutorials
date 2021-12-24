import store, { deleteTodo, toggleTodoStatus } from '../store.js';
import { findItem } from '../utils/functions.js';

const $listContainer = document.querySelector('ul');

function makeTodo() {
  const { todos } = store.getState();

  return todos
    .map((todo) => {
      return `
      <li class="item" id=${todo.id}>
        <div class="item-body">
          <input type="checkbox" ${todo.isDone ? 'checked' : ''}/>
          ${
            todo.isDone
              ? `<div class="content line-through">${todo.content}</div>`
              : `<div class="content">${todo.content}</div>`
          }
        </div>
        <button class="delete-button">
          <img src="/project2/assets/icon_delete.png" type="png/image" alt="delete" />
        </button>
      </li>
    `;
    })
    .join('');
}

function listenEvent() {
  $listContainer.addEventListener('click', function (e) {
    const target = e.target;
    if (target.tagName === 'BUTTON' || target.tagName === 'IMG') {
      const itemId = Number(findItem(target).id);
      store.dispatch(deleteTodo(itemId));
    } else if (target.tagName === 'INPUT') {
      const itemId = Number(findItem(target).id);
      store.dispatch(toggleTodoStatus(itemId));
    }
  });
}

function render() {
  const listString = makeTodo();
  $listContainer.innerHTML = listString;
}

const List = {
  render,
  listenEvent,
};

store.subscribe(render);

export default List;

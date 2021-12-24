import store from '../store.js';

const $listContainer = document.querySelector('ul');

function makeTodo() {
  const { todos } = store.getState();

  return todos
    .map((todo) => {
      return `
      <li class="item">
        <div class="item-body">
          <input type="checkbox" />
          <div class="content">${todo.content}</div>
        </div>
      <button class="delete-button">
        <img src="/project2/assets/icon_delete.png" type="png/image" alt="delete" />
      </button>
      </li>
    `;
    })
    .join('');
}

function render() {
  const listString = makeTodo();
  $listContainer.innerHTML = listString;
}

const List = {
  render,
};

export default List;

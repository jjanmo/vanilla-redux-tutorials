import store from '../store.js';
import { getDateStr, getDay } from '../utils/functions.js';

const $header = document.querySelector('.header');
const $date = $header.querySelector('.date');
const $day = $header.querySelector('.day');
const $status = $header.querySelector('.status');

function getStatus() {
  const { todos } = store.getState();

  const todoCount = todos.filter((todo) => !todo.isDone).length;

  return `해야 할 일 ${todoCount}개`;
}

function render() {
  const now = new Date();
  const date = getDateStr(now);
  const day = getDay(now);
  const status = getStatus();

  $date.textContent = date;
  $day.textContent = day;
  $status.textContent = status;
}

store.subscribe(render);

const Header = {
  render,
};

export default Header;

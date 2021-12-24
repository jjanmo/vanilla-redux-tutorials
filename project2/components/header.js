import store from '../store.js';
import { getDateStr, getDay } from '../utils/date.js';

const $header = document.querySelector('.header');
const $date = $header.querySelector('.date');
const $day = $header.querySelector('.day');
const $status = $header.querySelector('.status');

function getStatus() {
  const { todos } = store.getState();

  return `해야 할 일 ${todos.length}개`;
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

const Header = {
  render,
};

export default Header;

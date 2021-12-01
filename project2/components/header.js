import store from '../store.js';

const $header = document.querySelector('.header');
const $date = $header.querySelector('.date');
const $day = $header.querySelector('.day');
const $status = $header.querySelector('.status');
const now = new Date();

function getDate() {
  const year = now.getFullYear();
  const month = now.getMonth();
  const date = now.getDate();

  return `${year}년 ${month}월 ${date}일`;
}

function getDay() {
  const day = now.getDay();
  switch (day) {
    case 0: {
      return '일요일';
    }
    case 1: {
      return '월요일';
    }
    case 2: {
      return '화요일';
    }
    case 3: {
      return '수요일';
    }
    case 4: {
      return '목요일';
    }
    case 5: {
      return '금요일';
    }
    case 6: {
      return '토요일';
    }
  }
}

function getStatus() {
  const { todos } = store.getState();

  return `해야 할 일 ${todos.length}개`;
}

function render() {
  const date = getDate();
  const day = getDay();
  const status = getStatus();

  $date.textContent = date;
  $day.textContent = day;
  $status.textContent = status;
}

const Header = {
  render,
};

export default Header;

import store, { addTodo } from '../store.js';

const $formContainer = document.querySelector('.form-container');
const $addButton = document.querySelector('.add-button');
const $form = document.querySelector('form');
const $input = document.querySelector('form > input');
let inputText = '';

function handleSubmit(e) {
  e.preventDefault();
  const todo = {
    content: inputText,
    date: Date.now(),
  };

  store.dispatch(addTodo(todo));
}

function handleChange(e) {
  inputText = e.target.value;
}

function handleClick(e) {
  const target = e.target;
  if ($formContainer.className.includes('hidden')) {
    $formContainer.classList.remove('hidden');
    target.classList.add('clicked');
    $input.focus();
  } else {
    $formContainer.classList.add('hidden');
    target.classList.remove('clicked');
  }
}

function listenEvent() {
  $form.addEventListener('submit', handleSubmit);
  $input.addEventListener('input', handleChange);
  $addButton.addEventListener('click', handleClick);
}

function resetForm() {
  const $addButton = document.querySelector('.add-button');
  $addButton.classList.remove('clicked');
  $formContainer.classList.add('hidden');
  $input.value = '';
}

store.subscribe(resetForm);

const Form = {
  listenEvent,
};

export default Form;

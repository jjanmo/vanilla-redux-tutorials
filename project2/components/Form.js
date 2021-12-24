const $formContainer = document.querySelector('.form-container');
const $addButton = document.querySelector('.add-button');

$addButton.addEventListener('click', (e) => {
  const target = e.target;
  if ($formContainer.className.includes('hidden')) {
    $formContainer.classList.remove('hidden');
    target.classList.add('clicked');
  } else {
    $formContainer.classList.add('hidden');
    target.classList.remove('clicked');
  }
});

function render() {}

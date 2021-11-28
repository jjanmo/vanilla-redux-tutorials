const App = () => {
  const $main = document.querySelector('#main');
  List();

  const $wrapper = document.createElement('div');
  $wrapper.className = 'wrapper';
  $main.append($wrapper);
  Form();
  Detail();

  const closeForm = () => {
    const $formContainer = document.querySelector('.form-container');
    const $detailContainer = document.querySelector('.detail-container');
    const $title = document.querySelector('#title');
    const $description = document.querySelector('#description');
    $formContainer.classList.add('hidden');
    $detailContainer.classList.remove('hidden');
    $title.value = '';
    $description.value = '';
  };

  const onSubmit = () => {
    const $title = document.querySelector('#title');
    const $description = document.querySelector('#description');
    const $id = document.querySelector('#id');
    const title = $title.value;
    const description = $description.value;
    const id = parseInt($id.value, 10);
    if (id) {
      store.dispatch({
        type: 'UPDATE',
        title,
        description,
        id,
      });
    } else {
      store.dispatch({
        type: 'ADD',
        title,
        description,
      });
    }

    closeForm();
  };

  $main.addEventListener('click', (e) => {
    switch (e.target.className) {
      case 'list-title': {
        const $formContainer = document.querySelector('.form-container');
        if (!$formContainer.className.includes('hidden')) return;

        store.dispatch({
          type: 'SELECT',
          id: parseInt(e.target.parentNode.id),
        });
        break;
      }
      case 'add-button': {
        const $formContainer = document.querySelector('.form-container');
        const $detailContainer = document.querySelector('.detail-container');
        $formContainer.classList.remove('hidden');
        $detailContainer.classList.add('hidden');
        break;
      }
      case 'submit-button': {
        e.preventDefault();
        onSubmit();
        break;
      }
      case 'close-button': {
        closeForm();
        break;
      }
      case 'delete-button': {
        store.dispatch({
          type: 'DELETE',
          id: parseInt(e.target.parentNode.id),
        });
        break;
      }
      case 'update-button': {
        const selectedId = parseInt(e.target.parentNode.id, 10);
        const $formContainer = document.querySelector('.form-container');
        const $detailContainer = document.querySelector('.detail-container');
        $formContainer.classList.remove('hidden');
        $detailContainer.classList.add('hidden');

        const { list } = store.getState();
        const { title, description } = list.filter((item) => item.id === selectedId)[0];
        const $title = document.querySelector('#title');
        const $description = document.querySelector('#description');
        const $id = document.querySelector('#id');
        $title.value = title;
        $description.value = description;
        $id.value = selectedId;
        break;
      }
    }
  });
};

App();

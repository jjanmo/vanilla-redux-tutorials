(function () {
  const { createStore } = Redux;
  const $colorButtonContainer = document.querySelector('.color-button-container');
  const $buttonContainers = document.querySelectorAll('.color-button-container div');
  const $resetButton = document.querySelector('.reset');

  // initial state
  const initialState = {
    color: null,
    initialColors: null,
  };

  // action
  const CHANGE_COLOR = 'app/CHANGE_COLOR';
  const RESET_COLOR = 'app/RESET_COLOR';

  // action creator
  const changeColor = (color) => ({
    type: CHANGE_COLOR,
    payload: color,
  });
  const resetColors = () => ({
    type: RESET_COLOR,
    payload: ['tomato', 'pink', 'dodgerblue', 'limegreen'],
  });

  // reducer
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_COLOR: {
        return {
          color: action.payload,
          initialColors: null,
        };
      }
      case RESET_COLOR: {
        return {
          color: null,
          initialColors: action.payload,
        };
      }
      default: {
        return state;
      }
    }
  };

  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  const renderColor = () => {
    const { color } = store.getState();
    color && $buttonContainers.forEach((elem) => (elem.style.backgroundColor = color));
  };

  const renderInitialColors = () => {
    const { initialColors } = store.getState();
    initialColors && $buttonContainers.forEach((elem, index) => (elem.style.backgroundColor = initialColors[index]));
  };

  const handleChangeColor = (e) => {
    const { target } = e;
    if (target.tagName === 'BUTTON') {
      const color = target.className;
      store.dispatch(changeColor(color));
    }
  };

  const handleReset = (e) => {
    store.dispatch(resetColors());
  };

  store.subscribe(renderColor);
  store.subscribe(renderInitialColors);

  $colorButtonContainer.addEventListener('click', handleChangeColor);
  $resetButton.addEventListener('click', handleReset);
})();

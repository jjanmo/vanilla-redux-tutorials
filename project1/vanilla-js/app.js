(function () {
  const $colorButtonContainer = document.querySelector('.color-button-container');
  const $buttonContainers = document.querySelectorAll('.color-button-container div');
  const $resetButton = document.querySelector('.reset');
  const COLORS = ['tomato', 'pink', 'dodgerblue', 'limegreen'];

  const handleChangeColor = (e) => {
    const { target } = e;
    if (target.tagName === 'BUTTON') {
      const color = target.className;
      $buttonContainers.forEach((elem) => (elem.style.backgroundColor = color));
    }
  };

  const handleReset = (e) => {
    $buttonContainers.forEach((elem, index) => (elem.style.backgroundColor = COLORS[index]));
  };

  $colorButtonContainer.addEventListener('click', handleChangeColor);
  $resetButton.addEventListener('click', handleReset);
})();

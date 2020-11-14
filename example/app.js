(function () {
    const $tomatoButton = document.querySelector('.tomato-button');
    const $pinkButton = document.querySelector('.pink-button');
    const $dodgerblueButton = document.querySelector('.dodgerblue-button');
    const $limegreenButton = document.querySelector('.limegreen-button');
    const $resetButton = document.querySelector('.reset');

    const $tomatoContainer = document.querySelector('.tomato');
    const $pinkContainer = document.querySelector('.pink');
    const $dodgerblueContainer = document.querySelector('.dodgerblue');
    const $limegreenContainer = document.querySelector('.limegreen');

    $tomatoButton.addEventListener('click', function () {
        $tomatoContainer.style.backgroundColor = 'tomato';
        $pinkContainer.style.backgroundColor = 'tomato';
        $dodgerblueContainer.style.backgroundColor = 'tomato';
        $limegreenContainer.style.backgroundColor = 'tomato';
    });

    $pinkButton.addEventListener('click', function () {
        $tomatoContainer.style.backgroundColor = 'pink';
        $pinkContainer.style.backgroundColor = 'pink';
        $dodgerblueContainer.style.backgroundColor = 'pink';
        $limegreenContainer.style.backgroundColor = 'pink';
    });

    $dodgerblueButton.addEventListener('click', function () {
        $tomatoContainer.style.backgroundColor = 'dodgerblue';
        $pinkContainer.style.backgroundColor = 'dodgerblue';
        $dodgerblueContainer.style.backgroundColor = 'dodgerblue';
        $limegreenContainer.style.backgroundColor = 'dodgerblue';
    });

    $limegreenButton.addEventListener('click', function () {
        $tomatoContainer.style.backgroundColor = 'limegreen';
        $pinkContainer.style.backgroundColor = 'limegreen';
        $dodgerblueContainer.style.backgroundColor = 'limegreen';
        $limegreenContainer.style.backgroundColor = 'limegreen';
    });

    $resetButton.addEventListener('click', function () {
        $tomatoContainer.style.backgroundColor = 'tomato';
        $pinkContainer.style.backgroundColor = 'pink';
        $dodgerblueContainer.style.backgroundColor = 'dodgerblue';
        $limegreenContainer.style.backgroundColor = 'limegreen';
    });
})();

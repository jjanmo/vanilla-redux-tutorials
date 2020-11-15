const { createStore } = Redux;

const $tomatoButton = document.querySelector('.tomato-button');
const $pinkButton = document.querySelector('.pink-button');
const $dodgerblueButton = document.querySelector('.dodgerblue-button');
const $limegreenButton = document.querySelector('.limegreen-button');
const $resetButton = document.querySelector('.reset');
const $tomatoContainer = document.querySelector('.tomato');
const $pinkContainer = document.querySelector('.pink');
const $dodgerblueContainer = document.querySelector('.dodgerblue');
const $limegreenContainer = document.querySelector('.limegreen');

const reducer = (state, action) => {
    if (action.type === 'change_color') {
        state = action.color;
        return state;
    }
};
const store = createStore(reducer);
/*
store = {
    dispatch: ƒ y(e)
    getState: ƒ p()
    replaceReducer: ƒ (e)
    subscribe: ƒ h(e)
}
*/

function handleClickTomato() {
    store.dispatch({ type: 'change_color', color: 'tomato' });
}
function handleClickPink() {
    store.dispatch({ type: 'change_color', color: 'pink' });
}
function handleClickDodgerblue() {
    store.dispatch({ type: 'change_color', color: 'dodgerblue' });
}
function handleClickLimegreen() {
    store.dispatch({ type: 'change_color', color: 'limegreen' });
}
function handleClickReset() {
    $tomatoContainer.style.backgroundColor = 'tomato';
    $pinkContainer.style.backgroundColor = 'pink';
    $dodgerblueContainer.style.backgroundColor = 'dodgerblue';
    $limegreenContainer.style.backgroundColor = 'limegreen';
}

function render() {
    $tomatoContainer.style.backgroundColor = store.getState();
    $pinkContainer.style.backgroundColor = store.getState();
    $dodgerblueContainer.style.backgroundColor = store.getState();
    $limegreenContainer.style.backgroundColor = store.getState();
}

store.subscribe(render);

$tomatoButton.addEventListener('click', handleClickTomato);
$pinkButton.addEventListener('click', handleClickPink);
$dodgerblueButton.addEventListener('click', handleClickDodgerblue);
$limegreenButton.addEventListener('click', handleClickLimegreen);
$resetButton.addEventListener('click', handleClickReset);

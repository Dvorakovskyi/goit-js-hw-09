const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
let timerId = null;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const handleStartClick = ((event) => {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)

    event.target.disabled = true;
    stopBtnEl.disabled = false;

    event.target.style.boxShadow = '';
});

const handleStopClick = (event) => {
    clearInterval(timerId);

    event.target.disabled = true;
    startBtnEl.disabled = false;

    event.target.style.boxShadow = '';
}

startBtnEl.addEventListener('click', handleStartClick);
stopBtnEl.addEventListener('click', handleStopClick);

// Styles
const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.style.cssText = 'width: 90px; padding: 15px; font-size: 14px; font-weight: bold; background-color: rgba(224, 220, 220, 0.3); cursor: pointer; border: none; border-radius: 10px;'

    button.addEventListener('mouseover', (event) => {
        event.target.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
    });

    button.addEventListener('mouseout', (event) => {
        event.target.style.boxShadow = '';
    })
}



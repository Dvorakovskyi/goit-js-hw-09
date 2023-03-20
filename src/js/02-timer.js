import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputEl = document.querySelector('#datetime-picker');
const btnEl = document.querySelector('[data-start]');

const data = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

btnEl.disabled = true;

let timeDiff = 0;
let timerId = null;
let selectedDate = null;

// flatpickr library
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      btnEl.disabled = false;
    }
  },
};

flatpickr(inputEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const handleBtnClick = () => {
  timerId = setInterval(() => {
    timeDiff = selectedDate - new Date();

    const convertedTime = convertMs(timeDiff);

    data.days.textContent = addLeadingZero(convertedTime.days);
    data.hours.textContent = addLeadingZero(convertedTime.hours);
    data.minutes.textContent = addLeadingZero(convertedTime.minutes);
    data.seconds.textContent = addLeadingZero(convertedTime.seconds);

    if (timeDiff <= 1000) {
      clearInterval(timerId);
    }
  }, 1000);
};

btnEl.addEventListener('click', handleBtnClick);

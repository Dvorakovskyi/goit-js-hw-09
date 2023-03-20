import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

let firstDelay = 0;
let delayStep = 0;
let amount = 0;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function handleFormInput(event) {
  if (event.target.name === 'delay') {
    firstDelay = Number(event.target.value);
  }
  if (event.target.name === 'step') {
    delayStep = Number(event.target.value);
  }
  if (event.target.name === 'amount') {
    amount = Number(event.target.value);
  }
}

function makePromises(initialDelay, delayStep, totalPromises) {
  let delay = initialDelay;
  for (let i = 1; i <= totalPromises; i += 1) {
    createPromise(i, delay)
      .then(value => {
        Notify.success(
          `✅ Fulfilled promise ${value.position} in ${value.delay}ms`,
          {
            useIcon: false,
          }
        );
      })
      .catch(value => {
        Notify.failure(
          `❌ Rejected promise ${value.position} in ${value.delay}ms`,
          {
            useIcon: false,
          }
        );
      });
    delay += delayStep;
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  makePromises(firstDelay, delayStep, amount);
}

formEl.addEventListener('input', handleFormInput);
formEl.addEventListener('submit', handleFormSubmit);

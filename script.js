'use strict';

// Regular Expressions

const isValidEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Get all the necessary elements

const form = document.querySelector('form');
const thankYou = document.querySelector('.thank-you');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const inputs = [nameInput, emailInput, messageInput];

let isFormValid = false;
let isValidationOn = false;

// if something is not valid add hidden elm

const resetElm = (elm) => {
    elm.classList.remove('invalid');
    elm.nextElementSibling.classList.add('hidden');
  };
 
  // if something is valid remove the ERROR message

const invalidateElm = (elm) => {
    elm.classList.add('invalid');
    elm.nextElementSibling.classList.remove('hidden');
  };

  // if function...

const validateInputs = () => {
    if (!isValidationOn) return;
  
    isFormValid = true;
    inputs.forEach(resetElm);
  
    if (!nameInput.value) {
      isFormValid = false;
      invalidateElm(nameInput);
    }
    if (!isValidEmail(emailInput.value)) {
      isFormValid = false;
      invalidateElm(emailInput);
    }
  
    if (!messageInput.value) {
      isFormValid = false;
      invalidateElm(messageInput);
    }
  };
  
  // add submit event to the Form

form.addEventListener('submit', (e) => {
    e.preventDefault();
    isValidationOn = true;
    validateInputs();
    if (isFormValid) {
      form.remove();
      thankYou.classList.remove('hidden');
    }
  });

  //add input event listener

inputs.forEach((input) => {
    input.addEventListener('input', () => {
      validateInputs();
    });
  });


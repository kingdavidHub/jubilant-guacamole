const email = document.getElementById('email');
const submit = document.getElementById('submit');
const formTag = document.querySelector('form');
const errorLabel = document.querySelector('.error-label');

const success = document.querySelector('.success');
const signUpForm = document.querySelector('#form');



submit.addEventListener('click', (e) => {
  e.preventDefault();

  const emailValue = email.value;

  // remove whitespace
  emailValue.trim();

  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/


  if(!pattern.test(emailValue) || emailValue === ''){
    
      formTag.classList.add('error');
      errorLabel.style.display = 'block';
      setTimeout(() => {
        formTag.classList.remove('error');
        errorLabel.style.display = 'none';

      }, 1500); 

  }else {
    window.location.href = 'success.html';
  }
});

const passwordInput = document.querySelector('#password');
const confirmInput = document.querySelector('#confirm_password');
const passwordWarning = document.querySelector('.password-warning');

passwordInput.addEventListener('change', validatePasswords);
confirmInput.addEventListener('change', validatePasswords)

function validatePasswords(){
  console.log('yes')
  if(passwordInput.value != confirmInput.value){
    passwordInput.classList.add('invalid');
    confirmInput.classList.add('invalid');
    passwordWarning.classList.remove('invisible')
  } else{
    passwordInput.classList.remove('invalid');
    confirmInput.classList.remove('invalid');
    passwordWarning.classList.add('invisible')
  }
}
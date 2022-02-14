const container = document.querySelector('.container');
const pwShowHide = document.querySelectorAll('.showHidePw');
const pwFields = document.querySelectorAll('.password');


pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener('click', ()=> {
    pwFields.forEach(pwField => {
      if(pwField.type === 'text') {
        pwField.type = 'password'

        pwShowHide.forEach(icon => {
          icon.classList.replace("uil-eye", "uil-eye-slash")
        })
      } else {
        pwField.type = 'text'

        pwShowHide.forEach(icon => {
          icon.classList.replace("uil-eye-slash", "uil-eye")
        })

      }
    })
  })
})



const signUp = document.querySelector('.signup-link');
const login = document.querySelector('.login-link');

signUp.addEventListener("click", () => {
  container.classList.add('active')
})

login.addEventListener("click", () => {
  container.classList.remove('active')
})
const submitButton = document.querySelector("button")

submitButton.addEventListener("click", () => {
  const password = document.querySelector('#password')
  const passwordCorrect = document.querySelector('#passwordCorrect')

  if(password.value !== passwordCorrect.value) {
    password.classList.add("shake")
    password.addEventListener("animationend", () => password.classList.remove("shake"), {once: true})
  }
})
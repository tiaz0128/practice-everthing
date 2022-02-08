const alertContainer = document.querySelector(".alert-container")

document.addEventListener("keypress", async (e) => {
  if(e.key === "Enter") {
    const alert = document.createElement("div")
    alert.classList.add("alert")

    const res = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await res.json();
    alert.textContent = data.value

    alertContainer.prepend(alert)

    setTimeout(() => {
      alert.classList.add('hide')
      alert.addEventListener("transitionend", () => alert.remove())
    }, 500);
  }
})
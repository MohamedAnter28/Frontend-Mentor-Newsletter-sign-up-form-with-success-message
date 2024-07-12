const btn = document.querySelector(".check");
const emailInput = document.querySelector(".email");
const card = document.querySelector("#card");
const message = document.querySelector(".success-message")
const error = document.querySelector(".error");
const btn_message = document.querySelector(".end")
const emailUser = document.querySelector(".user-email")

var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ig;

btn.addEventListener("click", (e) => {
    const email = emailInput.value;
    if (!emailPattern.test(email)) {
      emailInput.classList.add("error");
      error.classList.add("active")
    } else {
        emailUser.textContent = email
        emailInput.innerHTML = "";
        card.remove()
        message.classList.add("active")
    }
});


btn_message.addEventListener("click",(e) => {
  window.location.reload();
})



function updateImageSource() {
  var img = document.querySelector(".show-img")
  var width = window.innerWidth;

  if (width <= 350) {
      img.src = 'illustration-sign-up-mobile.svg';
  } else {
      img.src = 'illustration-sign-up-desktop.svg';
  }
}

// Call function on page load
updateImageSource();

// Call function on window resize
window.addEventListener('resize', updateImageSource);


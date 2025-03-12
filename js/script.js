document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");
  const confirmationMessage = document.getElementById("confirmation-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    confirmationMessage.textContent = "Thank you for signing up for our Qur'an class!";
    confirmationMessage.style.display = "block";

    form.reset();
  });
});

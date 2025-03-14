document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");
  const confirmationMessage = document.getElementById("confirmation-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    confirmationMessage.textContent = "Thank you for signing up for our Qur'an class!";
    confirmationMessage.style.display = "block";

    form.reset();
  });
const images = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg"
];

let currentIndex = 0;

function showSlide(index) {
    const sliderWrapper = document.getElementById("slider-wrapper");
    const totalImages = images.length;
    const newTransformValue = -(index * 100) + '%';
    sliderWrapper.style.transform = `translateX(${newTransformValue})`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentIndex);
    setInterval(nextSlide, 3000);
});

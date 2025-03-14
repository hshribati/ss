document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");
  const confirmationMessage = document.getElementById("confirmation-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    confirmationMessage.textContent = "Thank you for signing up for our Qur'an class!";
    confirmationMessage.style.display = "block";

    form.reset();
  });

  // Image Slider Logic
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slider .slide");
  const dots = document.querySelectorAll(".slider .dot");
  const totalSlides = slides.length;

  function showSlide(index) {
    // Hide all slides and reset dots
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
      dots[i].classList.remove("active");
    });

    // Show the active slide and active dot
    slides[index].style.display = "block";
    dots[index].classList.add("active");
  }

  // Next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  // Previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  // Click event for next/previous buttons
  document.querySelector(".next-btn").addEventListener("click", nextSlide);
  document.querySelector(".prev-btn").addEventListener("click", prevSlide);

  // Click event for dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  // Initialize slider
  showSlide(currentIndex);

  // Optionally, set up automatic slide transition
  setInterval(nextSlide, 5000); // Change slide every 5 seconds
});

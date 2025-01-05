// Making pictures black and white on hover
import { inView, animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";
// import { animate, scroll } from "motion"

const burgerButton = document.querySelector("#burger_menu button");
const burgerOverlay = document.querySelector("#burger_overlay");
const openIcon = document.querySelector(".burger-icon.open");
const closeIcon = document.querySelector(".burger-icon.close");
burgerButton.addEventListener("click", () => {
  burger_ul.classList.toggle("burgerState");
});

// Toggle the overlay on burger button click
burgerButton.addEventListener("click", () => {
  burgerOverlay.classList.toggle("active");
  openIcon.classList.toggle("hidden"); // Toggle burger icon
  closeIcon.classList.toggle("hidden"); // Toggle close icon // Prevent scrolling when menu is open
});

// Close the menu when clicking outside (optional)
burgerOverlay.addEventListener("click", (e) => {
  if (e.target === burgerOverlay) {
    burgerOverlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
});

// ? arrow thing 
const arrow = document.querySelector(".arrow_hover");

// Ensure the arrow is selected and animate its opacity on scroll
if (arrow) {
  scroll(animate(arrow, { opacity: [1, 0] }, { ease: "linear" }), {
    target: document.body, // Scrolling the whole page
    offset: ["0px", "200px"], // Starts fading out at 0px and ends at 100px of scroll
  });
}
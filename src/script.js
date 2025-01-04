// Making pictures black and white on hover
import { inView, animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";

const work_1 = document.querySelectorAll(".work_image");

work_1.forEach((el) =>
  el.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("blackWhite");
  })
);
work_1.forEach((el) =>
  el.addEventListener("mouseleave", (event) => {
    event.target.classList.toggle("blackWhite");
  })
);

//  animation that opens and closes burger menu

const burger = document.querySelector("#burger_menu");
const popup = document.querySelector("#popup");

burger.addEventListener("click", animateBurger);
function animateBurger() {
  // popup.classList.toggle("animation_popIN");
  // popup.classList.toggle("animation_popOUT");
  // popup.classList.remove("hidden");
  burger.classList.toggle('burgerOpened')
}
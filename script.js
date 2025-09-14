const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  direction: "horizontal",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 6,
      grid: { rows: 2 },
    },
    1120: {
      slidesPerView: 8,
      grid: { rows: 2 },
    },
  },
});

const btn = document.getElementById("toggleBtn");
const icon = document.getElementById("toggleIcon"); 
const hiddenSlides = document.querySelectorAll(".swiper-slide.hidden");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  hiddenSlides.forEach(slide => slide.classList.toggle("hidden"));

  if (btn.textContent === "Показать все") {
    btn.textContent = "Скрыть";
    icon.src = "./assets/images/expand.png"; 
  } else {
    btn.textContent = "Показать все";
    icon.src = "./assets/images/icon.png";  
  }

  swiper.update();
});

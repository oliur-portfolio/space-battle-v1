// Animated Hamburger Icon
const navToggleBtn = document.querySelector(".navbar-toggler");
const header = document.querySelector(".header");

navToggleBtn.addEventListener("click", () => {
  navToggleBtn.classList.toggle("change");
  header.classList.toggle("navbar--show");
});

// Slider
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 30,
  loop: true,
  speed: 700,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Video Play
const journeyPlayBtn = document.querySelector(".journey__play-button");
const journeyVideoThumb = document.querySelector(".journey__video-thumb");

const playJourneyVideo = () => {
  console.log("play video");
  const videoJourney = document.getElementById("videoJourney");
  journeyVideoThumb.classList.add("hidden");
  journeyPlayBtn.classList.add("hidden");
  videoJourney.play();
};

journeyPlayBtn.addEventListener("click", playJourneyVideo);

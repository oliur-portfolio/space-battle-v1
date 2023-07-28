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

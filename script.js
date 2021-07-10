const CarousalBtn = document.querySelectorAll(".carousel-btn");
const track = document.querySelector(".carousel-track");
const leftCarBtn = document.querySelector(".btn-left");
const rightCarBtn = document.querySelector(".btn-right");
const causlides = document.querySelectorAll(".carousel-slides");
const projectTotalEl = document.querySelector(".projects-list");
const projectEl = document.querySelectorAll(".project");
const detailsBtn = document.querySelectorAll(".details-arrow");

// ------------------------------------------------------------
// ----for projects details displaying
// ------------------------------------------------------------
let currentWidth;
document.querySelector(".project-details").style.display = "none";
detailsBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const sibling = e.target.parentElement.nextElementSibling;
    // const nextParent = sibling.parentElement.nextElementSibling;
    // console.log(nextParent);

    if (sibling.style.display == "grid") {
      sibling.style.display = "none";
    } else {
      sibling.style.display = "grid";
    }
    currentWidth = causlides[0].getBoundingClientRect().width;
    console.log(currentWidth);
    causlides.forEach((slide, index) => {
      slide.style.left = currentWidth * index + `px`;
    });
  });
});

// ------------------------------------------------------------
// ----ffor carousal slides
// ------------------------------------------------------------

// console.log(currentWidth2);

function movetoSlide(track, currentSlide, targetSlide) {
  if (!targetSlide) return;
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
}

leftCarBtn.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");

  let nextSlide = currentSlide.nextElementSibling;
  if (!nextSlide) nextSlide = currentSlide.previousElementSibling;

  //   const amounttoMove = nextSlide.style.left;

  movetoSlide(track, currentSlide, nextSlide);
});
rightCarBtn.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current-slide");
  let previousSlide = currentSlide.previousElementSibling;
  if (!previousSlide) previousSlide = currentSlide.nextElementSibling;

  //   console.log(previousSlide);
  movetoSlide(track, currentSlide, previousSlide);
});
// CarousalBtn.addEventListener("click");

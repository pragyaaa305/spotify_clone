// add event listner for hamburgur
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  });
});

// event listner for close button

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-100%";
  });
});
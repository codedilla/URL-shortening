const showHide = document.querySelector(".ham-btn");
const nav = document.querySelector(".mobile-nav");
let isOpen = false;

function showOrHide() {
  if (!isOpen) {
    nav.style.display = "block";
    isOpen = true;
  } else {
    nav.style.display = "none";
    isOpen = false;
  }
}

showHide.addEventListener("click", () => {
  showOrHide();
});

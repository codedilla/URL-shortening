const showHide = document.querySelector(".ham-btn");
const nav = document.querySelector(".mobile-nav");
let isOpen = false;

// Mobile Nav show and hide script
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

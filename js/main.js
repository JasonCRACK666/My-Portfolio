const linkHome = document.getElementById("linkHome");
const linkWork = document.getElementById("linkWork");

const path = window.location.pathname;

window.addEventListener("DOMContentLoaded", () => {
  if (path === "/pages/index.html") {
    linkHome.classList.add("navbar__link-active");
  } else {
    linkWork.classList.add("navbar__link-active");
  }
});

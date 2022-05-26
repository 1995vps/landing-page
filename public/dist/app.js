const menu = document.querySelector("#menu");
const navMenu = document.querySelector("#navMenu");

menu.addEventListener("click", () => {
  if (navMenu.classList.contains("active")) navMenu.classList.remove("active");
  else navMenu.classList.add("active");
});

function toggleMenu() {
  const navbarMobile = document.getElementById("navbar-mobile");
  navbarMobile.classList.toggle("hidden");
}

function setActiveLink(event) {
  const links = document.querySelectorAll("#navbar a, #navbar-mobile a");

  links.forEach((link) => {
    link.classList.remove("active-link");
    link.classList.add("text-[#787878]");
  });

  event.currentTarget.classList.add("active-link");
}

// Attach event listener to each link
document.querySelectorAll("#navbar a, #navbar-mobile a").forEach((link) => {
  link.addEventListener("click", setActiveLink);
});

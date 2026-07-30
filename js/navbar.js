var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
var currentPath = location.pathname.split("/").pop();

navLinks.forEach(function (link) {
  var linkPath = link.getAttribute("href");
  if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
    link.classList.add("active");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

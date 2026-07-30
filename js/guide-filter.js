var filterButtons = document.querySelectorAll(".filter-btn");
var guideItems = document.querySelectorAll("#guidesAccordion .accordion-item");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    button.classList.add("active");

    var category = button.getAttribute("data-category");

    guideItems.forEach(function (item) {
      if (category === "all" || item.getAttribute("data-category") === category) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
    });
  });
});

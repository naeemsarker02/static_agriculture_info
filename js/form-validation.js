var contactForm = document.getElementById("contactForm");
var nameField = document.getElementById("name");
var emailField = document.getElementById("email");
var messageField = document.getElementById("message");
var formSuccess = document.getElementById("formSuccess");
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  formSuccess.classList.add("d-none");

  var isValid = true;

  if (nameField.value.trim() === "") {
    nameField.classList.add("is-invalid");
    isValid = false;
  } else {
    nameField.classList.remove("is-invalid");
  }

  if (!emailPattern.test(emailField.value.trim())) {
    emailField.classList.add("is-invalid");
    isValid = false;
  } else {
    emailField.classList.remove("is-invalid");
  }

  if (messageField.value.trim() === "") {
    messageField.classList.add("is-invalid");
    isValid = false;
  } else {
    messageField.classList.remove("is-invalid");
  }

  if (isValid) {
    formSuccess.classList.remove("d-none");
    contactForm.reset();
  }
});

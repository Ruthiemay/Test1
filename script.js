const form = document.getElementById("contact-form");
const status = document.getElementById("status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstName = form.elements["first-name"].value.trim();
  const lastName = form.elements["last-name"].value.trim();
  const email = form.elements["email"].value.trim();
  const password = form.elements["password"].value.trim();
  const confirmPassword = form.elements["confirm-password"].value.trim();
  const selectBox = form.elements["select-box"].value;

  // Check if all fields are filled
  if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "" || selectBox === "") {
    status.innerHTML = "<p class='error'>All fields are required.</p>";
    return;
  }

  // Check if First Name and Last Name are not blank
  if (firstName === "" || lastName === "") {
    status.innerHTML = "<p class='error'>First Name and Last Name cannot be blank.</p>";
    return;
  }

  // Check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    status.innerHTML = "<p class='error'>Please enter a valid email address.</p>";
    return;
  }

  // Check if password is at least 8 characters long and meets requirements
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  if (!passwordRegex.test(password)) {
    status.innerHTML = "<p class='error'>Password should have at least eight characters or longer. It must contain 1 lowercase character, 1 uppercase character, 1 number, and at least one special character in this set (!@#$%^&amp;*).</p>";
    return;
  }

  // Check if confirm password matches password
  if (confirmPassword !== password) {
    status.innerHTML = "<p class='error'>Confirm password must match password.</p>";
    return;
  }

  // If all validations pass, submit the form
  status.innerHTML = "<p class='success'>Form submitted successfully!</p>";
  form.reset();
});

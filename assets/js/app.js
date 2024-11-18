const intro = document.querySelector('.intro');
const logo = document.querySelector('.logo-header');
const logoSpans = document.querySelectorAll('.logo1');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpans.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        setTimeout(() => {
            logoSpans.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 3000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 3500);
    });
});

/*contact*/

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const submitBtn = document.getElementById("submit-btn");

// Validate phone number on input
function liveValidatePhone() {
  const phoneValue = phoneInput.value.trim();
  if (phoneValue.length !== 10 || !/^\d+$/.test(phoneValue)) {
    phoneError.textContent = "Phone number must be exactly 10 digits.";
    phoneError.style.display = "block";
  } else {
    phoneError.style.display = "none";
  }
}

// Validate phone number on blur
function validatePhone() {
  const phoneValue = phoneInput.value.trim();
  if (!/^\d{10}$/.test(phoneValue)) {
    phoneError.textContent = "Please enter a valid 10-digit phone number.";
    phoneError.style.display = "block";
    return false;
  }
  phoneError.style.display = "none";
  return true;
}

// Validate email address
function validateEmail() {
  const emailValue = emailInput.value.trim();
  if (!/^[a-zA-Z0-9._-]+@gmail\.com$/.test(emailValue)) {
    emailError.textContent = "Please enter a valid email (e.g., example@gmail.com).";
    emailError.style.display = "block";
    return false;
  }
  emailError.style.display = "none";
  return true;
}

// Live validation for phone number
phoneInput.addEventListener("input", liveValidatePhone);

// Validate on blur
phoneInput.addEventListener("blur", validatePhone);
emailInput.addEventListener("blur", validateEmail);

// Prevent form submission if validation fails
submitBtn.addEventListener("click", (event) => {
  const isPhoneValid = validatePhone();
  const isEmailValid = validateEmail();

  if (!isPhoneValid || !isEmailValid) {
    event.preventDefault(); // Stop form submission
  }
});
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    // Change moon icon to sun for dark mode
    if (body.classList.contains("dark-theme")) {
        darkModeToggle.classList.replace("fa-moon", "fa-sun");
    } else {
        darkModeToggle.classList.replace("fa-sun", "fa-moon");
    }
});
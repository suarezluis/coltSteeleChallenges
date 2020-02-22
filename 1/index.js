// Create a class
class Step {
  constructor(element) {
    this.element = element;
  }
  openStep = () => {
    this.element.style.height = "220px";
  };

  closeStep = () => {
    this.element.style.height = "20px";
  };
}

// Create instances of Step for each step
let step1 = new Step(document.getElementById("step1"));
let step2 = new Step(document.getElementById("step2"));
let step3 = new Step(document.getElementById("step3"));
let step4 = new Step(document.getElementById("step4"));

// Create array with indexes matching step numbers
let steps = [0, step1, step2, step3, step4];

// Create validation array with index matching booleans

let validation = [true, false, false, false, false];

// Create random 4 digit code for verification
const randomCode = Math.floor(1000 + Math.random() * 8999);

// Insert code to dom
document.getElementById("code").innerHTML = randomCode;

// Function that shows a step and close all others
showStep = step => {
  if (validation[step - 1]) {
    // Close all steps
    steps.forEach((step, index) => {
      index > 0 ? step.closeStep() : null;
    });
    // Open selected step
    steps[step].openStep();
  }
};

// Show first step by default
step1.openStep();

// Validation

emailValidationMessage = document.getElementById("emailValidationMessage");
passwordValidationMessage = document.getElementById(
  "passwordValidationMessage"
);
verifyValidationMessage = document.getElementById("verifyValidationMessage");
shootValidationMessage = document.getElementById("shootValidationMessage");

// Validate email
document.getElementById("email").addEventListener("input", element => {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regex.test(element.target.value)) {
    emailValidationMessage.innerHTML = "";
    validation[1] = true;
  } else {
    emailValidationMessage.innerHTML = "Invalid email";
    validation[1] = false;
  }
  validateAll();
});

// Validate password
document.getElementById("password").addEventListener("input", element => {
  if (element.target.value.length > 7) {
    passwordValidationMessage.innerHTML = "";
    validation[2] = true;
  } else {
    passwordValidationMessage.innerHTML =
      "Password must have at least 8 characters";
    validation[2] = false;
  }
  validateAll();
});

// Validate verify
document.getElementById("verify").addEventListener("input", element => {
  console.log(typeof randomCode, randomCode);
  if (element.target.value == randomCode) {
    verifyValidationMessage.innerHTML = "";
    validation[3] = true;
  } else {
    verifyValidationMessage.innerHTML = "4 digit code does not match";
    validation[3] = false;
  }
  validateAll();
});

// Check for all validators

let validateAll = () => {
  let message = document.getElementById("allDone");
  if (validation.includes(false)) {
    message.innerHTML = "Please complete all steps";
  } else {
    message.innerHTML = "All steps completed, Thank you!";
  }
};

// Validate messenger
document.getElementById("messenger").addEventListener("click", () => {
  validation[4] = true;
  validateAll();
});

// Disable tab button
document.querySelector("html").addEventListener("keydown", function(e) {
  if (e.which == 9) {
    e.preventDefault();
  }
});

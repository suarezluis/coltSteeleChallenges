// Create a class
class Step {
  constructor(element) {
    this.element = element;
    this.validated = false;
  }
  openStep = () => {
    this.element.style.height = "200px";
  };

  closeStep = () => {
    this.element.style.height = "20px";
  };
  validate = () => {
    this.validated = true;
  };
  invalidate = () => {
    this.validated = false;
  };
}

// Create instances of Step for each step
let step1 = new Step(document.getElementById("step1"));
let step2 = new Step(document.getElementById("step2"));
let step3 = new Step(document.getElementById("step3"));
let step4 = new Step(document.getElementById("step4"));

// Create array with indexes matching step numbers
let steps = [0, step1, step2, step3, step4];

// Create random 4 digit code for verification
const randomCode = Math.floor(1000 + Math.random() * 8999);

// Insert code to dom
document.getElementById("code").innerHTML = randomCode;

// Function that shows a step and close all others
showStep = step => {
  // Close all steps
  steps.forEach((step, index) => {
    index > 0 ? step.closeStep() : null;
  });
  // Open selected step
  steps[step].openStep();
};

// Show first step by default
step1.openStep();

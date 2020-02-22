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
  unvalidate = () => {
    this.validated = false;
  };
}

let step1 = new Step(document.getElementById("step1"));
let step2 = new Step(document.getElementById("step2"));
let step3 = new Step(document.getElementById("step3"));
let step4 = new Step(document.getElementById("step4"));

let steps = [0, step1, step2, step3, step4];

const randomCode = Math.floor(1000 + Math.random() * 8999);

let code = (document.getElementById("code").innerHTML = randomCode);

showStep = step => {
  steps.forEach((step, index) => {
    index > 0 ? step.closeStep() : null;
  });

  steps[step].openStep();
};

step1.openStep();

const inputs = document.querySelectorAll(".controls input");
let root = document.documentElement.style;

function handleUpdate() {
  const suffix = this.dataset || "";
  root.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach((i) => {
  i.addEventListener("change", handleUpdate);
  i.addEventListener("mousemove", handleUpdate);
});

handleUpdate();

const myFunction = () => {
  console.log(this);
};

function myFunc() {
  console.log(this);
}

const myF = function () {
  console.log(this);
};

myFunction();
myFunc();
myF();

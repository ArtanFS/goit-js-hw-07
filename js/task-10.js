function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amountInput = document.querySelector("#controls")
  .firstElementChild;
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
// const 

function createBoxes(amount) {
  let size = 30;
  const boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    boxesArr.push("<div></div>");
  }
  boxes.innerHTML = boxesArr.join("");

  [...boxes.children].map(box => {
  box.style.backgroundColor = getRandomHexColor();
  box.style.height = size + "px";
  box.style.width = size + "px";
  size += 10;
})

  return
}

const clickCreate = () => {
  createBoxes(amountInput.value);
}

const clickDestroy = () => {
  boxes.innerHTML = "";
}

createBtn.addEventListener("click", clickCreate);
destroyBtn.addEventListener("click", clickDestroy);

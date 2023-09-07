function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const background = document.querySelector("body");
const textColor = document.querySelector(".color");
const btn = document.querySelector(".change-color");

const handleClick = () => {
  const bgColor = getRandomHexColor();
  background.style.backgroundColor = bgColor;
  textColor.textContent = bgColor;
}

btn.addEventListener("click", handleClick);
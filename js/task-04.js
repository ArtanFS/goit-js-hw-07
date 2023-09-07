let counterValue = 0;
const value = document.querySelector("#value");
const incBtn = document.querySelector('button[data-action="increment"]');
const decBtn = document.querySelector('button[data-action="decrement"]');

const handleClickInc = () => {
    value.textContent = counterValue += 1;
}
const handleClickDec = () => {
    value.textContent = counterValue -= 1;
}

incBtn.addEventListener("click", handleClickInc);
decBtn.addEventListener("click", handleClickDec);
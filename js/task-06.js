const textInput = document.querySelector("#validation-input");
const dataLength = document.querySelector('[data-length]')
    .dataset.length;

textInput.addEventListener("blur", (event) => {
    let length = event.currentTarget.value.trim().length;
    if (length == dataLength) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    } else textInput.classList.add("invalid");
});
const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const name = event.currentTarget.value.trim();
    textOutput.textContent = name === "" ? "Anonymous" : name;
});
const fontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSize.addEventListener("input", (event) => {
    const value = event.currentTarget.value;
    text.style.fontSize = value + "px"; 
});


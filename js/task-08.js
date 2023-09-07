const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
    return alert("Please fill in all the fields of the form!");
    }

    const user = {};
    user.email = email;
    user.password = password;

    console.log(user);
    form.reset();
}

document.getElementById("changeColorBtn").addEventListener("click", function () {
    const paragraph = document.getElementById("text");
    paragraph.style.color = RandomColor();
    document.body.style.backgroundColor = RandomColor();
});

function RandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

updateCount();

function login(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const messageElement = document.getElementById('message');
    let message = "";

    if (username === "admin" && password === "1234") {
        message = "Admin login successful!";
    }
    else if (username === "" || password === "") {
        message = "Please fill in all fields";
    }
    else {
        message = `Welcome, ${username}!`;
    }

    messageElement.textContent = message;

    passwordInput.value = '';
}
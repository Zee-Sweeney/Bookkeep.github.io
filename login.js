function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === 'user1' && password === 'password123') {
        alert("Login successful!");
        window.location.href = "budget.html";
        return false;
    } else {
        alert("Invalid username or password.");
        return false;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup');
    const loginForm = document.getElementById('login');
    const messageDiv = document.getElementById('message');

    signupForm.addEventListener('submit' , function (e) {
        e.preventDefault();

        const username = document.getElementById('signup-user').value;
        const password = document.getElementById('signup-pass').value;

        if (username && password){
            localStorage.setItem('userName', username);
            localStorage.setItem('userPassword', password);
            messageDiv.textContent = 'Signup successful! You can now login.';
            messageDiv.style.color = 'green';
        } else{
            messageDiv.textContent = 'Please fill in both fields.';
            messageDiv.style.color = 'red';
        }
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('login-user').value;
        const password = document.getElementById('login-pass').value;
        
        const storeUser = localStorage.getItem('userName');
        const storePassword = localStorage.getItem('userPassword');

        if (username === storeUser && password === storePassword){
            messageDiv.textContent = 'Login successful!';
            messageDiv.style.color = 'green';
        } else {
            messageDiv.textContent = 'Invalid username or password.';
            messageDiv.style.color = 'red';
        }
    });
});


















/*function login(){
    var email = document.getElementById("username").value;//just some js on top
    var password = document.getElementById("password").value;

    if(email === 'user1' && password === 'password123'){//hard coded for now
        alert("Success!");
        window.location.href = "budget.html"; // Redirects to budget.html
        return false; // Prevents form from actually submitting
    }
    else{
        alert("Invalid username or password");
        return false; // Prevents form from actually submitting
    }
}*/
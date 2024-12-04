


















function login(){
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
}
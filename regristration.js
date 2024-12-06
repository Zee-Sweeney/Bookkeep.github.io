function func(){
        var email = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if(email === 'user1' && password === 'password123'){
            alert("Success!");
            window.location.href = "budget.html";
            return false;
        }
        else{
            alert("Invalid username or password");
            return false;
        }
    }

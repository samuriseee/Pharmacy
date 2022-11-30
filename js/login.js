var button = document.getElementById("login");
button.addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email == "admin" && password == "admin") {
        window.location.href = "http://127.0.0.1:5500/pages/dashboard/stat.html";
    } else {
        alert("Invalid username or password");
    }
});

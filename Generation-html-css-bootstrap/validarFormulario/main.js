function validateForm() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    if (email.length == 0) {
        document.getElementById("alert-email").innerHTML = "Campo de entrada inválido. O email deve ter pelo menos 1 caractere!";
        document.getElementById("alert-email").style.visibility = "visible";
    } else {
        document.getElementById("alert-email").innerHTML = "";
        document.getElementById("alert-email").style.visibility = "hidden";
        emailValid = true;
    }


    if (password.length == 0) {
        document.getElementById("alert-password").innerHTML = "Campo de entrada inválido. A senha deve ter pelo menos 1 caractere!";
        document.getElementById("alert-password").style.visibility = "visible";
    } else {
        document.getElementById("alert-password").innerHTML = "";
        document.getElementById("alert-password").style.visibility = "hidden";
        senhaValid = true;
    }

    var emailAdmin = "carool.limabr@gmail.com"
    var passwordAdmin = "11111111"

    if (email == emailAdmin && password == passwordAdmin) {
        window.location.href = "blog.html";
    } else {
        window.location.href = "https://www.google.com.br/"
    }

}


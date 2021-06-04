function validate() {
    var username = document.getElementById("brugernavn").value;
    var password = document.getElementById("kodeord").value;
    if (username == "forældre" && password == "1234") {
        window.location = "foraeldre.html";
        return false;
    }
    if (username == "bestyrelse" && password == "1234") {
        window.location = "bestyrelse.html";
        return false;
    }
}

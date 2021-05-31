function validate() {
    var username = document.getElementById("brugernavn").value;
    var password = document.getElementById("kodeord").value;
    if (username == "1" && password == "1") {
        window.location = "foraeldre.html";
        return false;
    }
    if (username == "2" && password == "2") {
        window.location = "bestyrelse.html";
        return false;
    }
}

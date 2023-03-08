function login() {
    var User1 = document.getElementById("User1").value;
    localStorage.setItem("User1", User1)
    var User2 = document.getElementById("User2").value;
    localStorage.setItem("User2" , User2)
    window.location= "gamepage.html";
}
var User1 = localStorage.getItem("User1");
var User2 = localStorage.getItem("User2");
document.getElementById("User1").innerHTML= User1+" : ";
document.getElementById("User2").innerHTML= User2+ " : ";
var User1score = 0; 
document.getElementById("User1score").innerHTML = User1score;
var User2score = 0;
document.getElementById("User2score").innerHTML = User2score;
 
function send(){

    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 +  "X" + number2 + "</h4>";
    input_box = "<br> Answer: <input type = 'Text' id ='input_check_box'>";
    check_button = <button class="btn btn-primary" id="button_check">Check</button>
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("User1").value = "";
    document.getElementById("User2").value = "";
}
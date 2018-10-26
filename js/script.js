/*global $*/
$(document).ready(function(){
    let solOne1 = Math.floor(Math.random() * 10);
    let solOne2 = Math.floor(Math.random() * 10);
    let solOne3 = Math.floor(Math.random() * 10);
    let solOne4 = Math.floor(Math.random() * 10);
    let solOne1s = false;
    let solOne2s = false;
    let solOne3s = false;
    let solOne4s = false;
    let oneSolved = false;
    $("#verify").click(function(){
        let one1 = $("#number1").val();
        let one2 = $("#number2").val();
        let one3 = $("#number3").val();
        let one4 = $("#number4").val();
        $("#userChoice").text(one1 + " " + one2 + " " + one3 + " " + one4);
    if (one1.toString() === solOne1.toString()){
        $("#number1").css("background-color", "green");
        solOne1s = true;
    } 
    else if (one1.toString() === solOne2.toString()){
        $("#number1").css("background-color", "yellow");
    }
    else if (one1.toString() === solOne3.toString()){
        $("#number1").css("background-color", "yellow");
    }
    else if (one1.toString() === solOne4.toString()){
        $("#number1").css("background-color", "yellow");
    }
    else {
        $("#number1").css("background-color", "red");
    }
    if (one2.toString() === solOne2.toString()){
        $("#number2").css("background-color", "green");
        solOne2s = true;
    }
    else if (one2.toString() === solOne1.toString()){
        $("#number2").css("background-color", "yellow");
    }
    else if (one2.toString() === solOne3.toString()){
        $("#number2").css("background-color", "yellow");
    }
    else if (one2.toString() === solOne4.toString()){
        $("#number2").css("background-color", "yellow");
    }
    else {
        $("#number2").css("background-color", "red");
    }
    if (one3.toString() === solOne3.toString()){
        $("#number3").css("background-color", "green");
        solOne3s = true;
    }
    else if (one3.toString() === solOne1.toString()){
        $("#number3").css("background-color", "yellow");
    }
    else if (one3.toString() === solOne2.toString()){
        $("#number3").css("background-color", "yellow");
    }
    else if (one3.toString() === solOne4.toString()){
        $("#number3").css("background-color", "yellow");
    }
    else {
        $("#number3").css("background-color", "red");
    }
    if (one4.toString() === solOne4.toString()){
        $("#number4").css("background-color", "green");
        solOne4s = true;
    }
    else if (one4.toString() === solOne1.toString()){
        $("#number4").css("background-color", "yellow");
    }
    else if (one4.toString() === solOne2.toString()){
        $("#number4").css("background-color", "yellow");
    }
    else if (one4.toString() === solOne3.toString()){
        $("#number4").css("background-color", "yellow");
    }
    else {
        $("#number4").css("background-color", "red");
    }
    if (solOne1s === true, solOne2s === true, solOne3s === true, solOne4s === true){
        oneSolved === true;
        $("#results").html("You got the first one! Now for number 2!");
    }
    });
});
function compare (i, x){
}
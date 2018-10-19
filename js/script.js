/*global $*/
$(document).ready(function(){
    $("#verify").click(function(){
        var one1 = $("#number1").val();
        var one2 = $("#number2").val();
        var one3 = $("#number3").val();
        var one4 = $("#number4").val();
        $("#userChoice").text(one1 + " " + one2 + " " + one3 + " " + one4);
    });
    var solOne1 = Math.floor(Math.random() * 10);
    var solOne2 = Math.floor(Math.random() * 10);
    var solOne3 = Math.floor(Math.random() * 10);
    var solOne4 = Math.floor(Math.random() * 10);
    if (one1 === solOne1){
        $("#number1").css("background-color, green");
    }
});
/*global $*/
$(document).ready(function(){
    $("#two").hide();
    $("#open").hide();
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
    if (solOne1s === true && solOne2s === true && solOne3s === true && solOne4s === true){
        oneSolved === true;
        $("#results").html("You got the first one! Now for number 2!");
        $("#closed").hide();
        $("#open").show();
        $("#two").show();
        $("#open2").hide();
    }
    });
    $("#open").hide();
    let solTwo1 = Math.floor(Math.random() * 10);
    let solTwo2 = Math.floor(Math.random() * 10);
    let solTwo3 = Math.floor(Math.random() * 10);
    let solTwo4 = Math.floor(Math.random() * 10);
    let solTwo1s = false;
    let solTwo2s = false;
    let solTwo3s = false;
    let solTwo4s = false;
    let twoSolved = false;
    $("#verify2").click(function(){
        let two1 = $("#numberTwo1").val();
        let two2 = $("#numberTwo2").val();
        let two3 = $("#numberTwo3").val();
        let two4 = $("#numberTwo4").val();
    if (two1.toString() === solTwo1.toString()){
        $("#numberTwo1").css("background-color", "green");
        solTwo1s = true;
    } 
    else if (two1.toString() === solTwo2.toString()){
        $("#numberTwo1").css("background-color", "yellow");
    }
    else if (two1.toString() === solTwo3.toString()){
        $("#numberTwo1").css("background-color", "yellow");
    }
    else if (two1.toString() === solTwo4.toString()){
        $("#numberTwo1").css("background-color", "yellow");
    }
    else {
        $("#numberTwo1").css("background-color", "red");
    }
    if (two2.toString() === solTwo2.toString()){
        $("#numberTwo2").css("background-color", "green");
        solTwo2s = true;
    }
    else if (two2.toString() === solTwo1.toString()){
        $("#numberTwo2").css("background-color", "yellow");
    }
    else if (two2.toString() === solTwo3.toString()){
        $("#numberTwo2").css("background-color", "yellow");
    }
    else if (two2.toString() === solTwo4.toString()){
        $("#numberTwo2").css("background-color", "yellow");
    }
    else {
        $("#numberTwo2").css("background-color", "red");
    }
    if (two3.toString() === solTwo3.toString()){
        $("#numberTwo3").css("background-color", "green");
        solTwo3s = true;
    }
    else if (two3.toString() === solTwo1.toString()){
        $("#numberTwo3").css("background-color", "yellow");
    }
    else if (two3.toString() === solTwo2.toString()){
        $("#numberTwo3").css("background-color", "yellow");
    }
    else if (two3.toString() === solTwo4.toString()){
        $("#numberTwo3").css("background-color", "yellow");
    }
    else {
        $("#numberTwo3").css("background-color", "red");
    }
    if (two4.toString() === solTwo4.toString()){
        $("#numberTwo4").css("background-color", "green");
        solTwo4s = true;
    }
    else if (two4.toString() === solTwo1.toString()){
        $("#numberTwo4").css("background-color", "yellow");
    }
    else if (two4.toString() === solTwo2.toString()){
        $("#numberTwo4").css("background-color", "yellow");
    }
    else if (two4.toString() === solTwo3.toString()){
        $("#numberTwo4").css("background-color", "yellow");
    }
    else {
        $("#numberTwo4").css("background-color", "red");
    }
    if (solTwo1s === true && solTwo2s === true && solTwo3s === true && solTwo4s === true){
        twoSolved === true;
        $("#results2").html("yay u did it again lol");
        $("#closed2").hide();
        $("#open2").show();
    }
    });
});

$(document).ready(function() {

var myArray = new Array(3);
for(var i = 0; i < 3; i++) {
    myArray[i] = new Array(3);
}

//input
for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
        myArray[i][j] = '<div class="tic-tac">&nbsp;</div>';
    }
}
//output
var table = "<div class='center'>";
for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
        table += myArray[i][j];
        myArray[i][j] = ""; //wipe
    }
}
table += "</div>";
$("#tic-tac-toe").html(table);

var count = 0;
var vectorRecords = [];
//cross
$(".tic-tac").click(function() {
    table += "<br />";

    if(count % 2 == 0) {
        if(($(this).text() == "X") || ($(this).text() == "O")){
            alert("You can't click here! " + $(this).text());
        }
        else{

        $(this).text(X);
        $("#playerField").html("<b>Player 2 Turn</b>");
        count++;
        fillArray(vectorRecords);
        console.log(vectorRecords);
        }
    }

    else if(count % 2 != 0) {
        if(($(this).text() != "pig") && ($(this).text() != "O")){

        $(this).text(O);

        count++;
        fillArray(vectorRecords);
        console.log(vectorRecords);
        $("#playerField").html("<b>Player 1 Turn</b>");
        }
        else{
            alert("You can't click here! " + $(this).text());
        }
    }
});

function fillArray(array){
    $(".tic-tac").each(function(i){
        array[i] = $(this).text();
    });
    checkForWinner(array);
}

function checkForWinner(array) {
//check horizontal
    if (array[0] + array[1] + array[2] == "XXX") alert("winner"); if (array[0] + array[1] + array[2] == "OOO") alert("winner");
    if (array[3] + array[4] + array[5] == "XXX") alert("winner"); if (array[3] + array[4] + array[5] == "OOO") alert("winner");
    if (array[6] + array[7] + array[8] == "XXX") alert("winner"); if (array[6] + array[7] + array[8] == "OOO") alert("winner");
//check vertical
    if (array[0] + array[3] + array[6] == "XXX") alert("winner"); if (array[0] + array[3] + array[6] == "OOO") alert("winner");
    if (array[1] + array[4] + array[7] == "XXX") alert("winner"); if (array[1] + array[4] + array[7] == "OOO") alert("winner");
    if (array[2] + array[5] + array[8] == "XXX") alert("winner"); if (array[2] + array[5] + array[8] == "OOO") alert("winner");
//check diagonals
    if (array[0] + array[4] + array[8] == "XXX") alert("winner"); if (array[0] + array[4] + array[8] == "OOO") alert("winner");
    if (array[2] + array[4] + array[6] == "XXX") alert("winner"); if (array[2] + array[4] + array[6] == "OOO") alert("winner");
//check if Draw
}
});

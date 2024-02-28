player1name = localStorage.getItem("player1name");
player2name = localStorage.getItem("player2name");
player1score = 0;
player2score = 0;
document.getElementById("player1name").innerHTML = player1name + ":";
document.getElementById("player2name").innerHTML = player2name + ":";
document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name;

function send()
{
    number_1 = document.getElementById("number_1").value;
    number_2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number_1) * parseInt(number_2);
    question_number = "<h4>" + number_1 + "X" + number_2 + "</h4>";
    input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br> <button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row1 = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row1;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}


question_turn = "player1";
answer_turn = "player2";
function check()
{
    answer = document.getElementById("input_check_box").value;
    if(answer==actual_answer)
    {
        if(answer_turn=="player1")
        {
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = player1score;
        }
        else
        {
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = player2score;
        }
    }
    if(question_turn=="player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2name;

    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
    }
    if(answer_turn=="player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1name;
    }
    document.getElementById("output").innerHTML = "";
}

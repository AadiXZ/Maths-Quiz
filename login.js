function login()
{
    player1name = document.getElementById("player_1_name").value;
    player2name = document.getElementById("player_2_name").value;
    localStorage.setItem("player1name", player1name);
    localStorage.setItem("player2name", player2name);
    window.location = "game_page.html";
}
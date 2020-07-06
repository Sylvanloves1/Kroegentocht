<!DOCTYPE html>
<html lang="NL">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="stylesheet.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <title>Kroegentocht</title>
</head>
<body>
    <div id="gameover">
        <div class="gameover_text">
            <h1>Verloren!</h1>
            <h3>Helaas, Je hebt teveel alcohol genuttigd!</h3>
            <button onClick="window.location.reload();">Opnieuw proberen</button>
        </div> 
    </div>
    <div id="win">
        <div class="win_text">
            <h1>Gewonnen!</h1>
            <h3>Je bent veilig in bed beland!</h3>
            <button onClick="window.location.reload();">Opnieuw proberen</button>
        </div> 
    </div>
    <div class="header"> 
        <div class="alcohol">
            Genuttigde alcoholische versnaperingen: 
            <p id="alcohol"></p>
        </div>
        <div class="notification_section">
            <div class="notification">
                <p id="notification"></p>
            </div>   
        </div>
        <div class="dice">
            <p id="dice1"><img src="image/dice/1.png"></p>
            <p id="dice2"><img src="image/dice/1.png"></p>
            <p id="throwButton"></p>
        </div>
    </div>
    <div class="board">
        <p id="board"></p>
        <script>
            //Speelveld word ingeladen
            for(i = 0; i <= 63; i++){
                document.getElementById("board").innerHTML += "<div class='field'><img src='image/board/"+ i +".png'><img src='image/pawn.png' class='pawn' id='"+ i +"' style='margin-left: -75px'></div>";
            }
            
        </script>
    </div>
</body>
<script type="text/javascript" src="js/Player.js"></script>
<script type="text/javascript" src="js/Dice.js"></script>
<script type="text/javascript" src="js/ScoreBoard.js"></script>
<script type="text/javascript" src="js/Game.js"></script>
</html>
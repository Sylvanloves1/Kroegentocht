function play(){
    if(scoreboard.getAlcohol() >= 5){
        document.getElementById("gameover").style.display = "block";
    }else{
        document.getElementById("throwButton").innerHTML = "<button onclick='dice.throwDice()'>Gooi!</button>";
        document.getElementById("alcohol").innerHTML = scoreboard.getAlcohol();

        console.log(scoreboard.getAlcohol());
        this.player.move(dice.getScore());

        checkField(player.getCurrentPosition());
    }

}

function checkField(pos){
    switch(pos){
        case 5:
            document.getElementById("notification").innerHTML = "Shotje!";
            this.scoreboard.addAlcohol(1);
            break;
        case 6:
            document.getElementById("notification").innerHTML = "Je kameraden trakteren je op een pilsje! Ga door naar 12 <button onclick='specialField(6)'>Oke</button>";
            this.scoreboard.addAlcohol(1);
            break;
        case 9:
            document.getElementById("notification").innerHTML = "Je tikt even een meter bier weg! Ga 3 plaatsen vooruit <button onclick='specialField(9)'>Oke</button>";
            this.scoreboard.addAlcohol(5);
            break;
        case 14:
            document.getElementById("notification").innerHTML = "Shotje!";
            this.scoreboard.addAlcohol(1);
            break;
        case 18:
            document.getElementById("notification").innerHTML = "Shotje!";
            this.scoreboard.addAlcohol(1);
            break;
        case 19:
            document.getElementById("notification").innerHTML = "Je hebt een Jägerbomb gehad en gooit alles eruit! Ga 3 plaatsen terug <button onclick='specialField(19)'>Oke</button>";
            this.scoreboard.addAlcohol(3);
            break;
        case 23:
            document.getElementById("notification").innerHTML = "Shotje!";
            this.scoreboard.addAlcohol(1);
            break;
        case 26:
            document.getElementById("notification").innerHTML = "Shotje!";
            this.scoreboard.addAlcohol(1);
            break;
        case 27:
            document.getElementById("notification").innerHTML = "Shotje!";
            this.scoreboard.addAlcohol(1);
            break;
        case 31:
            document.getElementById("notification").innerHTML = "In je favoriete kroeg treed Dries Roelvink op! Je geniet nog even en drinkt 3 pilsjes";
            this.scoreboard.addAlcohol(3);
            break;
        case 32:
            document.getElementById("notification").innerHTML = "Shotje!";
            this.scoreboard.addAlcohol(1);
            break;
        case 36:
            document.getElementById("notification").innerHTML = "Shotje!";
            this.scoreboard.addAlcohol(1);
            break;
        case 41:
            document.getElementById("notification").innerHTML = "Shotje!";
            this.scoreboard.addAlcohol(1);
            break;
        case 42:
            document.getElementById("notification").innerHTML = "Je bent de kroeg uit gezet! Ga terug naar 37 <button onclick='specialField(42)'>Oke</button>";
            break;
        case 45:
            document.getElementById("notification").innerHTML = "Shotje!";
            this.scoreboard.addAlcohol(1);
            break;
        case 50:
            document.getElementById("notification").innerHTML = "Shotje!";
            this.scoreboard.addAlcohol(1);
            break;
        case 52:
            document.getElementById("notification").innerHTML = "Je hebt een bekeuring voor wildplassen! Ga 5 plaatsen terug <button onclick='specialField(52)'>Oke</button>";
            break;
        case 53:
            document.getElementById("notification").innerHTML = "Shotje!";
            this.scoreboard.addAlcohol(1);
            break;
        case 54:
            document.getElementById("notification").innerHTML = "Shotje!";
            this.scoreboard.addAlcohol(1);
            break;
        case 58:
            document.getElementById("notification").innerHTML = "Je bent gesneuveld in de kroeg! Ga terug naar het begin <button onclick='specialField(58)'>Oke</button>";
            break;
        case 59:
            document.getElementById("notification").innerHTML = "Het is Happy Hour en dan betekend gratis shots! Ga 2 stappen vooruit <button onclick='specialField(59)'>Oke</button>";
            this.scoreboard.addAlcohol(3);
            break;    
        default:
            document.getElementById("notification").innerHTML = "";                                                                                                                                                                                                                                                                                                                                                                                                               
    }
}

function specialField(num){
    document.getElementById("notification").innerHTML = "";  
    switch(num){
        case 6:
            this.player.setCurrentPosition(12);
            break;
        case 9:
            this.player.move(3);
            break;
        case 19:
            this.player.setCurrentPosition(16);
            break;
        case 42:
            this.player.setCurrentPosition(37);
            break;
        case 52:
            this.player.setCurrentPosition(48);
            break;
        case 58:
            this.player.setCurrentPosition(0);
            break;
        case 59:
            this.player.move(2);
            break;
    }
}

//Creating a player
var player = new Player(0);
//Creating a dice
var dice = new Dice();
//Creating scoreboard
var scoreboard = new ScoreBoard();

play();

class Dice{
    constructor(){
        this.dice1;
        this.dice2;
        this.score = 0;
    }

    throwDice(){
        this.dice1 = Math.floor(Math.random()* 6) + 1;
        this.dice2 = Math.floor(Math.random()* 6) + 1;

        this.score = this.dice1 + this.dice2;

        document.getElementById("dice1").innerHTML = "<img src='image/dice/"+ this.dice1 +".png'>";
        document.getElementById("dice2").innerHTML = "<img src='image/dice/"+ this.dice2 +".png'>";
        play();
    }

    getScore(){
        return this.score;
    }
}
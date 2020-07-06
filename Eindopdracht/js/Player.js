class Player{
    constructor(){
        this.currentPosition = 0;
    }

    move(steps){
        //Reset last position
        document.getElementById(this.currentPosition).style.display = "none";

        //Check every step
        while(steps > 0){
            //if you get to the finish and you have steps left, you go back
            if(this.currentPosition == 63 && steps > 0){
                while(steps > 1){
                    this.currentPosition--;
                    steps--;
                }
                this.currentPosition--;
            }else if(this.currentPosition != 63 && steps > 0){
                this.currentPosition++;
            }
            steps--;

            //if you are at the finish and you have 0 steps left, you win
            if(this.currentPosition == 63 && steps == 0){
                document.getElementById("win").style.display = "block";
            }
        }

        $("#" + this.currentPosition).toggle();
    }

    getCurrentPosition(){
        return this.currentPosition;
    }

    setCurrentPosition(newPosition){
        $("#" + this.currentPosition).toggle();
        this.currentPosition = newPosition;
        $("#" + this.currentPosition).toggle();
    }
}
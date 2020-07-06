class ScoreBoard{
    constructor(){
        this.alcohol = 0;
    }

    getAlcohol(){
        return this.alcohol;
    }

    addAlcohol(num){
        this.alcohol += num;
    }
}
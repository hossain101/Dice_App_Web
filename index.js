function rollFunction(){
    document.getElementById("diceImg1").src = "images/dice" + Math.floor((Math.random()*6)+1)    +".png";
    document.getElementById("diceImg2").src = "images/dice"+Math.floor((Math.random()*6)+1)  +".png";

}
function rollFunction(){

    
    var diceImg1Value = Math.floor((Math.random()*6)+1);
    var diceImg2Value = Math.floor((Math.random()*6)+1);
    document.getElementById("diceImg1").src = "images/dice" +  diceImg1Value   +".png";
    document.getElementById("diceImg2").src = "images/dice"+diceImg2Value +".png";

if(diceImg1Value==diceImg2Value){
    document.getElementById("winnerDeclaration").innerHTML = "Draw 🤝";
}

   else if(diceImg1Value > diceImg2Value){
    document.getElementById("winnerDeclaration").innerHTML = "Player 1 Wins!! ✨";
}
else{  document.getElementById("winnerDeclaration").innerHTML = "Player 2 Wins!! ⚡";
}



}
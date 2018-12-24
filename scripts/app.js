var score,dice,dice_one,activePlayer,gamePlaying=true,prevScore,prevScore_dice_one,limit=20;
activePlayer = 0 ;
score=[0,0];
var randomScore=0;
dice =1;
dice_one=1;
//dice = Math.floor(Math.random()*6)+1;
console.log(dice);
//document.querySelector('#current-'+activePlayer).textContent=dice;
newGame();
//document.querySelector(".dice").style.display="none";
document.querySelector(".btn-roll").addEventListener('click', function(){
    if(gamePlaying)
    {
        dice = Math.floor(Math.random()*6)+1;
        dice_one = Math.floor(Math.random()*6)+1;
        console.log("Score :"+dice);
        var diceDOM = document.querySelector("#dice-one");
        var dice_two_DOM = document.querySelector("#dice-two");
        diceDOM.style.display="block";
        dice_two_DOM.style.display="block";
        diceDOM.src = "dice-"+dice+".png";
        dice_two_DOM.src="dice-"+dice_one+".png";
        if(dice!==1||dice_one!==1)
        {
            
             randomScore +=(dice+dice_one);
             document.querySelector("#current-"+activePlayer).textContent=randomScore;
        }else{
           
            alert("Got One!");
             nextPlayer();
        }
        if(prevScore===6||prevScore==dice_one)
        { 
          
            alert("Double Six");
           
            score[activePlayer]=0;
            document.querySelector("#score-"+activePlayer).textContent=score[activePlayer];
            nextPlayer();
            
        }else{
            prevScore=dice;
            prevScore_dice_one = dice_one;
        }
        if(score[activePlayer]>=limit)
        {
            console.log(activePlayer+" wins!");
            gamePlaying = false;
            document.querySelector("#name-"+activePlayer).textContent= "Winner!";
            document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
            document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
          
        }
    }
           



});

document.querySelector(".btn-hold").addEventListener('click',function(){
    if(gamePlaying){
        score[activePlayer]+=randomScore;
    
        document.querySelector("#score-"+activePlayer).textContent=score[activePlayer];
        nextPlayer();
    }
   
});

function nextPlayer () 

{
   
    prevScore=0;
    prevScore_dice_one=0
    randomScore=0;
    activePlayer===0?activePlayer=1:activePlayer=0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector("#current-1").textContent=0;
    document.querySelector("#current-0").textContent=0;
    document.querySelector(".dice").style.display="none";
    document.querySelector("#dice-two").style.display="none";

}
document.querySelector(".btn-new").addEventListener('click',newGame);

document.querySelector(".btn-change-score").addEventListener('click', function(){



        limit = document.querySelector(".new-score").value;





});
function newGame(){
    gamePlaying = true;
    activePlayer = 0 ;
    score=[0,0];
    randomScore=0;
    document.querySelector("#current-1").textContent=0;
    document.querySelector("#current-0").textContent=0;
    document.querySelector("#score-1").textContent=0;
    document.querySelector("#score-0").textContent=0;
    document.querySelector(".dice").style.display="none";
     document.querySelector("#dice-two").style.display="none";
    document.querySelector("#name-0").textContent= "Player 1";
    document.querySelector("#name-1").textContent= "Player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    
}
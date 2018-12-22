var score,dice,activePlayer;
activePlayer = 0 ;
score=[0,0];
var randomScore=0;
dice =1;
//dice = Math.floor(Math.random()*6)+1;
console.log(dice);
//document.querySelector('#current-'+activePlayer).textContent=dice;
newGame();
//document.querySelector(".dice").style.display="none";
document.querySelector(".btn-roll").addEventListener('click', function(){
           dice = Math.floor(Math.random()*6)+1;
           var diceDOM = document.querySelector(".dice");
           diceDOM.style.display="block";
           diceDOM.src = "dice-"+dice+".png";
           
           //document.querySelector("#current-"+activePlayer).textContent=dice;
           if(dice!==1)
           {
                randomScore +=dice;
                document.querySelector("#current-"+activePlayer).textContent=randomScore;
           }else{
                
                nextPlayer();
           }
           



});

document.querySelector(".btn-hold").addEventListener('click',function(){
    score[activePlayer]+=randomScore;
    
    document.querySelector("#score-"+activePlayer).textContent=score[activePlayer];
    nextPlayer();
});

function nextPlayer () 

{
    randomScore=0;
    activePlayer===0?activePlayer=1:activePlayer=0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector("#current-1").textContent=0;
    document.querySelector("#current-0").textContent=0;
    document.querySelector(".dice").style.display="none";

}
document.querySelector(".btn-new").addEventListener('click',newGame);

function newGame(){
    document.querySelector("#current-1").textContent=0;
    document.querySelector("#current-0").textContent=0;
    document.querySelector("#score-1").textContent=0;
    document.querySelector("#score-0").textContent=0;
    document.querySelector(".dice").style.display="none";
    
}
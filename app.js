let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","purple"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game is started");
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    let rdmidx=Math.floor(Math.random()*3);
    let rdmcolor=btns[rdmidx];
    let rdmbtn=document.querySelector(`.${rdmcolor}`);
    gameSeq.push(rdmcolor);
    console.log(gameSeq);
    btnFlash(rdmbtn);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
         setTimeout(levelUp,1000);
         
        }
    }
    else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
           document.querySelector("body").style.backgroundColor="white";    
        },150);
        reset();
    }
}

function btnpress(){
   
    let btn=this;
    userflash(btn);

    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

let btn2=document.querySelector('#btn2');
let para = null; 

btn2.addEventListener('mouseenter', () => {
    if (!para) {
      para = document.createElement('p');
      para.innerText = "Simon Game is a simple game whose goal is for user to repeat the pattern showed by the program. With each round a new step is added to the pattern, making the game much more difficult with every round. Additionally, the program should display a different colour for each round. Players need to pay attention to the sequence of colors produced by the game.Start a new game by pressing any key.Players must repeat the sequence by pressing the corresponding colour button.The game adds a new colour for each successful repetition which can be observed as white flash in buttons.The button pressed by players will show green flash.If a player makes a mistake, the game flashes background color to red and displays the score which will be equal to the levels you played correctly.The player continues to repeat longer sequences until they make a mistake. ";
      document.body.appendChild(para);
    }
  });

btn2.addEventListener('mouseleave', () => {
    if (para) {
      para.remove();
      para = null;
    }
  });
let userseq=[];
let gameseq=[];
let isstart=false;
let level=0;


let h2=document.querySelector("h2");
let btns=["red","green","yellow","gray"];

document.addEventListener("keypress" , function(){
  if(!isstart){
    isstart=true;
    console.log("game started");

    levelup();
  }
})


function btnflash(btn){
  btn.classList.add("flash")
  setTimeout(function(){
    btn.classList.remove("flash")
  },300);
}

function levelup(){
  level++;
  userseq=[];
  h2.innerText=`level ${level}`;

  let randomindex=Math.floor(Math.random()*4);
  let randomcolor=btns[randomindex];
  gameseq.push(randomcolor);
  let randombtn=document.querySelector(`.${randomcolor}`);
  btnflash(randombtn);
}

function checkbtn(index){
  
  if(userseq[index]===gameseq[index]){
    if(userseq.length==gameseq.length){
      setTimeout(levelup,1000);
    }
  }else{
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },300);
    h2.innerHTML=`Game Over ! <b>your score is ${level}</b> <br>press any key to start`;
    gamereset();
  }
}

function buttonpress(){
  
  let btn=this;
  btnflash(btn);

  let usercolor=btn.getAttribute("id");
  userseq.push(usercolor);
  checkbtn(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
  btn.addEventListener("click",buttonpress);
}

function gamereset(){
  gameseq=[];
  isstart=false;
  level=0;
  userseq=[];
}
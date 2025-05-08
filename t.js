let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#Reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg_Container");
let msg=document.querySelector("#msg");
let turnO=true;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
 }
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turnO){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
    box.disabled=true;
    checkWinner();
  })
})
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;

    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();

}
const checkDraw=()=>{
    boxes.forEach((box)=>{
        if(box.innerText!=""){
            msg.innerText="It is a draw";
    msgContainer.classList.remove("hide");
        }
    })
}
const checkWinner=()=>{
    for(let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1==pos2&&pos2==pos3){
                console.log("WINNER!!",pos1);
                showWinner(pos1);
            }
        }
    }
}

newGamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

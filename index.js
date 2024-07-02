let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".btn");
let newGameBtn = document.querySelector(".btn1");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;//player1
let count=0;    //track draw
const winPattern = [
   [0, 1, 2],
   [0, 3, 6],
   [0, 4, 8],
   [1, 4, 7],
   [2, 5, 8],
   [2, 4, 6],
   [3, 4, 5],
   [6, 7, 8],
];
const resetGame = () => {
   turnO= true;
   count=0;
   enableBoxes();
   msgContainer.classList.add("hide")
}
boxes.forEach((box) => {
   box.addEventListener("click", () => {
      console.log('box  was clicked');
      if (turnO) {
         //PlayerO
         box.innerText = "O"
         turnO = false
      }
      else {
         //Player X
         box.innerText = "X";
         turnO = true
      }
      box.disabled = true;
      count++;

     let isWinner = checkWinner();

     if(count === 9 && !isWinner){
        drawGame();
     }
   })
})
const drawGame=()=>{
   console.log("Game Draw");
   msg.innerText="Game was Draw"
   msgContainer.classList.remove("hide")
   disableBoxes();
}
const disableBoxes = () => {
   for (let box of boxes) {
      box.disabled = true
   }
}
const enableBoxes = () => {
   for (let box of boxes) {
      box.disabled = false
      box.innerText=""
   }
}

const showWinner = (winner) => {
   msg.innerText = `Congratulation, Winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableBoxes();
}

const checkWinner = () => {
   for (let pattern of winPattern) {
      //                pattern is vaue of winPattern
      //  console.log(pattern[0],pattern[1],pattern[2]);
      //   console.log(boxes[pattern[0]].innerText,
      // boxes[pattern[1]].innerText,
      // boxes[pattern[2]].innerText);
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;

      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
         if (pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("winner", pos1Val)
            showWinner(pos1Val);
            return true
         
         }

      }
   }
}
newGameBtn.addEventListener("click",resetGame );
resetBtn.addEventListener("click",resetGame )
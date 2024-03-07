let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let msg = document.querySelector('.msg');

let clicked = new Audio('./audio/click.wav');
let winner = new Audio('./audio/win.mp3');
let newGame = new Audio('./audio/reset.wav');

let turn = true; //player turn x or o

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const enableBox = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}

const disableBox = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const reset = () => {
    turn = true;
    enableBox();
    msg.innerText = '';
}

const checkWin = () => {
    for(let win of winPattern) 
    {
        let positon1 = boxes[win[0]].innerHTML;
        let positon2 = boxes[win[1]].innerHTML;
        let positon3 = boxes[win[2]].innerHTML;

        if(positon1 != '' && positon2 != '' && positon3 != '') 
        {
            if(positon1 === positon2 && positon2 === positon3) 
            {
                msg.innerHTML = `${positon1} Won the Game`;
                disableBox();
                winner.play();
            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        clicked.play();
        if(turn) {
            box.innerHTML = 'X'
            turn = false; 
        }
        else {
            box.innerHTML = 'O';
            turn = true;
        }
        box.disabled = true;
        checkWin();
    });
})

resetBtn.addEventListener('click', () => {
    newGame.play();
    reset();
})
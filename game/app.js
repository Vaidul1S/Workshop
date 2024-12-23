const cell = document.querySelectorAll('.cell');
const isNaujo = document.getElementById('new');
const whoGoes = document.getElementById('whoGoes');
const whoWon = document.getElementById('whoWon');
const board = document.getElementById('board');
const info = document.getElementById('info');

let step = '';
let winner = '';
let counter = '';
const winCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const who = _ => {
    if(step == 'cross') {
        step = 'circle';
        whoGoes.innerText = 'O';
    } else {
        step = 'cross';
        whoGoes.innerText = 'X';
    }
    counter++;
};
who();

const endGame = _ => {
    board.style.pointerEvents = 'none';
    info.style.visibility = 'hidden';
};

const winCondion = _ => {
    for (let i = 0; i < winCombo.length; i++) {
        if (cell[winCombo[i][0]].classList.contains('cross') && cell[winCombo[i][1]].classList.contains('cross') && cell[winCombo[i][2]].classList.contains('cross')) {
            cell[winCombo[i][0]].classList.add('winColor');
            cell[winCombo[i][1]].classList.add('winColor');
            cell[winCombo[i][2]].classList.add('winColor');
            whoWon.innerText = ' Kryžiukai!';
            whoWon.style.visibility = 'visible';
            endGame();
            return true;
        }
        if (cell[winCombo[i][0]].classList.contains('circle') && cell[winCombo[i][1]].classList.contains('circle') && cell[winCombo[i][2]].classList.contains('circle')) {
            cell[winCombo[i][0]].classList.add('winColor');
            cell[winCombo[i][1]].classList.add('winColor');
            cell[winCombo[i][2]].classList.add('winColor');
            whoWon.innerText = ' Nuliukai!';
            whoWon.style.visibility = 'visible';
            endGame();
            return true;
        }
    }
    return false;
};

const noWinner = _ => {
    if (!winCondion() && counter > 9) {
        whoWon.innerText = ' Lygiosios';
        whoWon.style.visibility = 'visible';
        info.style.visibility = 'hidden';
    }
};

cell.forEach(item => {
    item.addEventListener('click', _ => {
        if (!item.classList.contains('circle') && !item.classList.contains('cross')) {
            item.classList.add(step);
            if (step == 'cross') {
                item.innerText = 'X';
            } else if (step == 'circle') {
                item.innerText = 'O';
            }
            who();            
            winCondion();
            noWinner();            
        }
    })
});

isNaujo.addEventListener('click', _ => {
    cell.forEach(item => {
        document.location.reload();        
    })
}); 

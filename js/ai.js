const board = document.getElementById('gameBoard');
let currentPlayer = 'X';  // Player starts first
const cells = Array(9).fill(null);

function createBoard() {
    board.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', makeMove);
        board.appendChild(cell);
    }
}

function makeMove(e) {
    const index = e.target.dataset.index;
    if (cells[index] === null && currentPlayer === 'X') {  // Player's move
        cells[index] = 'X';
        e.target.innerText = 'X';
        if (checkWin('X')) {
            alert('Player wins!');
            resetGame();
        } else if (cells.every(cell => cell)) {
            alert('Draw!');
            resetGame();
        } else {
            currentPlayer = 'O';
            setTimeout(makeAIMove, 500);  // AI makes a move after 500ms
        }
    }
}

function makeAIMove() {
    const index = findBestMove();
    if (index !== -1) {
        cells[index] = 'O';
        const cell = board.querySelector(`[data-index='${index}']`);
        cell.innerText = 'O';
        if (checkWin('O')) {
            alert('AI wins!');
            resetGame();
        } else if (cells.every(cell => cell)) {
            alert('Draw!');
            resetGame();
        } else {
            currentPlayer = 'X';
        }
    }
}

function findBestMove() {
    // Block or win if possible, otherwise pick a random empty cell
    for (let i = 0; i < 9; i++) {
        if (cells[i] === null) {
            // Test AI's win move
            cells[i] = 'O';
            if (checkWin('O')) {
                return i;
            }
            cells[i] = null;

            // Test player's win move and block it
            cells[i] = 'X';
            if (checkWin('X')) {
                cells[i] = null;
                return i;
            }
            cells[i] = null;
        }
    }

    // Pick a random empty cell
    let emptyCells = cells.map((cell, index) => cell === null ? index : null).filter(index => index !== null);
    return emptyCells.length > 0 ? emptyCells[Math.floor(Math.random() * emptyCells.length)] : -1;
}

function checkWin(player) {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winConditions.some(combination =>
        combination.every(index => cells[index] === player)
    );
}

function resetGame() {
    currentPlayer = 'X';
    cells.fill(null);
    createBoard();
}

createBoard();

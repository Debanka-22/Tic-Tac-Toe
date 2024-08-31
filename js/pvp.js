const board = document.getElementById('gameBoard');
let currentPlayer = 'X';
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
    if (cells[index] === null) {
        cells[index] = currentPlayer;
        e.target.innerText = currentPlayer;
        if (checkWin()) {
            alert(`${currentPlayer} wins!`);
            resetGame();
        } else if (cells.every(cell => cell)) {
            alert('Draw!');
            resetGame();
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winConditions.some(combination =>
        combination.every(index => cells[index] === currentPlayer)
    );
}

function resetGame() {
    currentPlayer = 'X';
    cells.fill(null);
    createBoard();
}

createBoard();
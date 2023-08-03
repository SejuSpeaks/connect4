
class Gamboard {
    constructor() {
        this.board = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ];

        this.playerTurn = 'player1';
    }

    changePlayer(player = this.playerTurn) {
        if (player === 'player1') {
            console.log('player1')
            boxscore.style.backgroundColor = '#FD6687'; //change picture instead
        }
        else {
            console.log('player2');
        }
    }

    dropChip(chosenColumn = undefined) {
        this.changePlayer();
        //if (chosenColumn === 0){
        for (let i = this.board.length - 1; i >= 0; i--) {
            if (this.board[i][chosenColumn] === 0) {

                if (this.playerTurn === 'player1') {
                    this.board[i][chosenColumn] = 1;
                    this.makeChip(i, chosenColumn, "red");
                    //console.log(this.board[i]);
                    this.checkWin(this.board, [i, chosenColumn], 1);
                    this.playerTurn = 'player2';
                    break;
                }
                else {
                    this.board[i][chosenColumn] = 2;
                    this.makeChip(i, chosenColumn, "red");
                    this.checkWin(this.board, [i, chosenColumn], 2);
                    this.playerTurn = 'player1';
                    break;
                }
            }

        }
        //}
    }
    //i can do if column is more than 0
    //subtract 44 * column from top
    makeChip(row, column, player) {
        const redChip = document.createElement('img')
        const yellowChip = document.createElement('img')
        redChip.src = "./images/counter-red-small.svg";
        yellowChip.src = './images/counter-yellow-small.svg';


        if (column === 0) {
            if (this.playerTurn === 'player1') {
                chip0.appendChild(redChip);
            }
            else {
                chip0.appendChild(yellowChip)

            }
        }

        if (column === 1) {
            if (this.playerTurn === 'player1') {
                chip1.appendChild(redChip);

            }
            else {
                chip1.appendChild(yellowChip)

            }
        }

        if (column === 2) {
            if (this.playerTurn === 'player1') {
                chip2.appendChild(redChip);

            }
            else {
                chip2.appendChild(yellowChip)
            }
        }

        if (column === 3) {
            if (this.playerTurn === 'player1') {
                chip3.appendChild(redChip);
            }
            else {
                chip3.appendChild(yellowChip)

            }
        }

        if (column === 4) {
            if (this.playerTurn === 'player1') {
                chip4.appendChild(redChip);

            }
            else {
                chip4.appendChild(yellowChip)

            }
        }

        if (column === 5) {
            if (this.playerTurn === 'player1') {
                chip5.appendChild(redChip);

            }
            else {
                chip5.appendChild(yellowChip)

            }
        }

        if (column === 6) {
            if (this.playerTurn === 'player1') {
                chip6.appendChild(redChip);

            }
            else {
                chip6.appendChild(yellowChip)

            }
        }

    }

    //matrix traversal check if there is a win
    //from the node thats provided('the chip coor')
    //check if there is a win 'four in a row'
    checkWin(gameBoard, node, currentPlayer) {
        const directions = [
            [0, 1],     // horizontal
            [1, 0],     // vertical
            [1, 1],     // diagonal /
            [-1, 1],    // diagonal \
        ];

        const [row, col] = node;

        for (const direction of directions) {
            const [deltaRow, deltaCol] = direction;
            let count = 1; // Initialize count to 1 (since the current node is included)

            // Check for winning condition in one direction
            for (let i = 1; i <= 3; i++) {
                const newRow = row + i * deltaRow;
                const newCol = col + i * deltaCol;

                if (
                    newRow >= 0 &&
                    newRow < gameBoard.length &&
                    newCol >= 0 &&
                    newCol < gameBoard[newRow].length &&
                    gameBoard[newRow][newCol] === currentPlayer
                ) {
                    count++;
                } else {
                    break; // Stop counting if the consecutive chips in the direction end
                }
            }

            // Check for winning condition in the opposite direction
            for (let i = 1; i <= 3; i++) {
                const newRow = row - i * deltaRow;
                const newCol = col - i * deltaCol;

                if (
                    newRow >= 0 &&
                    newRow < gameBoard.length &&
                    newCol >= 0 &&
                    newCol < gameBoard[newRow].length &&
                    gameBoard[newRow][newCol] === currentPlayer
                ) {
                    count++;
                } else {
                    break; // Stop counting if the consecutive chips in the direction end
                }
            }

            if (count >= 4) {
                console.log('YOU WON!!');
                this.win();
                return; // Exit the function if a win is found
            }
        }
    }


    //if its player 1 then we check for ones in the matrix
    //if player 2 then we check for 2's in the matrix
    neighbors(board, node, currentPlayer) {
        let row = node[0];
        let col = node[1];
        const path = [];

        const directions = [
            [row - 1, col], // up
            [row + 1, col], //down
            [row, col + 1], //right
            [row, col - 1], //left
            [row - 1, col + 1], // up right
            [row - 1, col - 1], //up left
            [row + 1, col + 1], //down right
            [row + 1, col - 1] // down left
        ];

        for (let direction of directions) {
            let dRow = direction[0];
            let dCol = direction[1];
            if (
                dRow >= 0 &&
                dRow < board.length &&
                dCol >= 0 &&
                dCol < board[dRow].length &&
                board[dRow][dCol] === currentPlayer
            ) {
                path.push(direction);
            };
        }

        return path;

    }


    win(player = this.playerTurn) {
        console.log(`${player} won`)

        if (player === 'player1') {
            background.style.backgroundColor = '#FD6687';
        }
        else {
            background.style.backgroundColor = '#FFCE67';
        }
        playerWin.style.visibility = 'visible';
        boxscore.style.visibility = 'hidden';
    }


    reset() {
        while (chip0.firstChild) {
            chip0.removeChild(chip0.firstChild);
        }

        while (chip1.firstChild) {
            chip1.removeChild(chip1.firstChild);
        }

        while (chip2.firstChild) {
            chip2.removeChild(chip2.firstChild);
        }

        while (chip3.firstChild) {
            chip3.removeChild(chip3.firstChild);
        }

        while (chip4.firstChild) {
            chip4.removeChild(chip4.firstChild);
        }

        while (chip5.firstChild) {
            chip5.removeChild(chip5.firstChild);
        }

        while (chip6.firstChild) {
            chip6.removeChild(chip6.firstChild);
        }


        this.board = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ];

        playerWin.style.visibility = 'hidden';
        boxscore.style.visibility = 'visible';
        background.style.backgroundColor = '#5C2DD5'


    }


    lose() {

    }



}






const board = document.querySelectorAll("[data-board]");
const background = document.querySelector('[data-background]');
const playerWin = document.querySelector('[data-playerWin]');
const boxscore = document.querySelector('[data-boxScore]');
const playAgain = document.querySelector('[data-playAgain]');
const chip0 = document.querySelector("[data-chip]");
const chip1 = document.querySelector("[data-chip2]");
const chip2 = document.querySelector("[data-chip3]");
const chip3 = document.querySelector("[data-chip4]");
const chip4 = document.querySelector("[data-chip5]");
const chip5 = document.querySelector("[data-chip6]");
const chip6 = document.querySelector('[data-chip7]');

const column1 = document.querySelector('[data-column1]');
const column2 = document.querySelector('[data-column2]');
const column3 = document.querySelector('[data-column3]');
const column4 = document.querySelector('[data-column4]');
const column5 = document.querySelector('[data-column5]');
const column6 = document.querySelector('[data-column6]');
const column7 = document.querySelector('[data-column7]');

const newGame = new Gamboard()

column1.addEventListener("click", () => {
    console.log('you pressed column 1');
    newGame.dropChip(0);

})

column2.addEventListener("click", () => {
    console.log('you pressed column 2');
    newGame.dropChip(1);
})

column3.addEventListener("click", () => {
    console.log('you pressed column 3');
    newGame.dropChip(2);
})

column4.addEventListener("click", () => {
    console.log('you pressed column 4');
    newGame.dropChip(3);

})

column5.addEventListener("click", () => {
    console.log('you pressed column 5');
    newGame.dropChip(4);
})

column6.addEventListener("click", () => {
    console.log('you pressed column 6');
    newGame.dropChip(5);
})

column7.addEventListener("click", () => {
    console.log('you pressed column 7');
    newGame.dropChip(6);
})


board.forEach(hole => {
    hole.addEventListener("click", () => {
        console.log('you clicked my board hooray!')
    })
});

playAgain.addEventListener('click', () => {
    //reset board
    console.log('reset worked');
    newGame.reset();

})



/* [] */

/*make a class called Gameboard
 this class has an attribute of i dont know yet

 the game board could be a 2d array
 [0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0]

 *one represent player one chip
 *two represents player two chip

 and when the player clicks/touches
 a coulumn. a chip will fall until
 there is a one/two beneath it,
 otherwise it falls straight through
 to the bottomn of board


 *next task could be console.log()
 what column i click on in the game

 */

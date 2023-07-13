
class Gamboard {
    constructor() {
        this.board = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0]
        ];

        this.playerTurn = 'player1';
    }

    dropChip(chosenColumn = undefined) {
        //if (chosenColumn === 0){
        for (let i = this.board.length - 1; i >= 0; i--) {
            if (this.board[i][chosenColumn] === 0) {
                //append chip to row before so i -1
                // console.log('no go');
                // console.log(this.board[i][chosenColumn])
                this.board[i][chosenColumn] = 1;
                this.makeChip(i, chosenColumn, "red");
                console.log('chip dropped');
                break;

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


        if(column === 0){
            if(this.playerTurn === 'player1'){
                chip0.appendChild(redChip);
                this.playerTurn = 'player2';
            }
            else{
                chip0.appendChild(yellowChip)
                this.playerTurn = 'player1'
            }
        }

        if (column === 1) {
            if(this.playerTurn === 'player1'){
                chip1.appendChild(redChip);
                this.playerTurn = 'player2';
            }
            else{
                chip1.appendChild(yellowChip)
                this.playerTurn = 'player1'
            }
        }

        if(column === 2){
            if(this.playerTurn === 'player1'){
                chip2.appendChild(redChip);
                this.playerTurn = 'player2';
            }
            else{
                chip2.appendChild(yellowChip)
                this.playerTurn = 'player1'
            }
        }

        if (column === 3) {
            if(this.playerTurn === 'player1'){
                chip3.appendChild(redChip);
                this.playerTurn = 'player2';
            }
            else{
                chip3.appendChild(yellowChip)
                this.playerTurn = 'player1'
            }
        }

        if (column === 4) {
            if(this.playerTurn === 'player1'){
                chip4.appendChild(redChip);
                this.playerTurn = 'player2';
            }
            else{
                chip4.appendChild(yellowChip)
                this.playerTurn = 'player1'
            }
        }

        if (column === 5) {
            if(this.playerTurn === 'player1'){
                chip5.appendChild(redChip);
                this.playerTurn = 'player2';
            }
            else{
                chip5.appendChild(yellowChip)
                this.playerTurn = 'player1'
            }
        }

        if (column === 6) {
            if(this.playerTurn === 'player1'){
                chip6.appendChild(redChip);
                this.playerTurn = 'player2';
            }
            else{
                chip6.appendChild(yellowChip)
                this.playerTurn = 'player1'
            }
        }

        // const positionTop = (5 - row) * 44; // Adjust the top position based on the row
        // const positionLeft = column * 37; // Adjust the left position based on the column
        // chipEl.style.top = `${positionTop}px`;
        // chipEl.style.left = `${positionLeft}px`;

        // // Get the column element based on the column index
        // const columnElement = document.querySelector(`[data-column${column + 1}]`);
        // columnElement.appendChild(chipEl); // Append the chip to the column

    }


    switchPlayer() {

    }

    win() {

    }

    lose() {

    }



}






const board = document.querySelectorAll("[data-board]");
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

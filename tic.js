function makeGameboard () {

    let gameboard = [[null,null, null],["O","O","O"],["X","X", "O"]]

    return {
        makeMove(row,col, symbol) {
            if (gameboard[row][col] === null) {
                gameboard[row][col] = symbol;
                console.log("Move was successful")
                return true
            }
            else {
                console.log("Can't make move")
                return false
            }
        },
        printBoard() {
        console.log(gameboard)
        },
        getGameboard () {
            return gameboard;
        }
    }
 
};

function gameState () {

    return {
        checkWinner (board) {
            for (const row of board) {
                let countZeroes = 0;
                let countXs = 0;
                if (row == ["O", "O", "O"]) {
                    
                }
                for (const square of row) {
                    if (square == "O") {
                        countZeroes += 1;
                    }
                    else if (square == "X") {
                        countXs += 1;
                    }
                    if (countXs == 3) {
                        return "X";
                    }
                    else if (countZeroes == 3) {
                        return "O";
                    }
                }
            }
        },
    }

};

const board = makeGameboard();
board.printBoard()
board.makeMove(1, 1, "0");
const game = gameState();
console.log(game.checkWinner(board.getGameboard()))
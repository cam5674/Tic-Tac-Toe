function makeGameboard () {

    let gameboard = [[null,null, null],[null,null, null],[null,null, null]]

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
            /* Check rows for a winner */
            for (const row of board) {
                if (row[0] !== null) {
                    if (row[0] === row[1] && row[1] === row[2]) {
                        return row[0];
                    }
                }
                
            }
             /* check columns for a winner */
            for (let i = 0; i < 3; i++) {
                if (board[0][i] !== null) {
                    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
                        return board[0][i];
                    }
                }    
            }
            /* check diagonals for a winner */
            if (board[1][1] !== null) {
                if ((board[0][0] === board[1][1] && board[1][1] === board[2][2]) || 
                    (board[0][2] === board[1][1] && board[1][1] === board[2][0]) 
                ) {
                    return board[1][1];
                  }
             }
            return null;
        },
    }

};

const board = makeGameboard();
board.printBoard()
board.makeMove(0, 0, "O");
const game = gameState();
console.log(game.checkWinner(board.getGameboard()))
board.makeMove(1, 0, "O");
board.makeMove(2, 0, "O");
board.printBoard()
console.log(game.checkWinner(board.getGameboard()))
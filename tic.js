function makeGameboard () {

    let gameboard = [[null,null, null],[null,null,null],[null,null,null]]

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
        }
    }
 
};


const board = makeGameboard();
board.printBoard()
board.makeMove(1, 1, "0");
board.printBoard()
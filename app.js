let board = [];
let data = "";
for (let i = 0; i < 5; i++) {
    board[i] = ["<strong>.</strong> &nbsp;", "<strong>.</strong> &nbsp;", "<strong>.</strong> &nbsp;", "<strong>.</strong> &nbsp;", "<strong>.</strong> &nbsp;"];
}

for (let i = 0; i < 5; i++) {
    data += "<br>";
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + "   ";
    }
}
document.getElementById("carogame").innerHTML = data;


function changeValue() {
    let positionX = prompt("X: ");
    let positionY = prompt("Y: ");
    board[positionX][positionY] = " x ";
    data = "";
    for (let i = 0; i < 5; i++) {
        data += "<br>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "   ";
        }
    }
    document.getElementById("carogame").innerHTML = data;
    checkRow();
    checkCol();
    checkDiagonal1();
    checkDiagonal2()
}

function checkRow() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j - 1] === " x " && board[i][j] === " x " && board[i][j + 1] === " x ") {
                alert("You Win!");
                break;
            }
        }
    }
}

function checkCol() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i-1][j] === " x " && board[i][j] === " x " && board[i+1][j] === " x ") {
                alert("You Win!");
                break;
            }
        }
    }
}

function checkDiagonal1() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i-1][j - 1] === " x " && board[i][j] === " x " && board[i+1][j + 1] === " x ") {
                alert("You Win!");
                break;
            }
        }
    }
}

function checkDiagonal2() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i-1][j+1] === " x " && board[i][j] === " x " && board[i+1][j -1 ] === " x ") {
                alert("You Win!");
                break;
            }
        }
    }
}
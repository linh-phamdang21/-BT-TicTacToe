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
    alert(board[positionX][positionY]);
    checkRow();
}

function checkRow() {
    let check1 = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            check1.push(board[i][j]);
        }
        if ((check1[0] === check1[1] && check1[1] === check1[2]) || (check1[1] === check1[2] && check1[2] === check1[3]) || (check1[2] === check1[3] && check1[3] === check1[4]){
            alert("You Win!");
            break;
        } else {
            check1 = [];
        }
    }
}

function checkCol() {

}

function checkDiagonal1() {

}

function checkDiagonal2() {

}
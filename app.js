let board = ["", "", "", "", "", "", "", "", ""];
const winnerText = document.getElementById('currentPlayer')

const resetButton = document.getElementById('reset').addEventListener('click', () => {
    const container2 = document.getElementById('container');
    const containerChildren2 = container.children;

    for(let i=0; i<containerChildren2.length; i++){
        containerChildren2[i].textContent = "";
        board = ["", "", "", "", "", "", "", "", ""];
        winnerText.textContent = "";
    }
})


const gameBoard = (() => {
    const container = document.getElementById('container');
    const containerChildren = container.children

    
    
    for(let i=0; i<containerChildren.length; i++){

        let current = containerChildren[i];

        current.addEventListener('click', () => {
            if(current.textContent == "") {
                current.textContent = player.getTurn()
                board[current.classList[1]] = player.getTurn();
                checkWinner(board)
                player.changeTurn()
                console.log(board);
            }
        });
    }
})();


const player =  {
    turn: "X",

    getTurn: () => {
        return this.turn;
    },

    changeTurn: () => {
        if(this.turn == "X") {
            this.turn = "O";
        } else {
            this.turn = "X";
        }
    },

}

function checkWinner(board) {
    const winners = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for(let i=0; i< winners.length; i++){
        if(board[winners[i][0]] === board[winners[i][1]] && board[winners[i][0]] === board[winners[i][2]] && board[winners[i][0]] != ""){
            console.log(`${player.getTurn()} wins!`)
            winnerText.textContent = player.getTurn() + " wins!";

        }
    }
}

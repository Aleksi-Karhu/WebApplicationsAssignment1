let array;
let player;

const wins = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20]
];

let tiles = Array.from(document.querySelectorAll("#board td"));
document.getElementById("board").addEventListener("click", makeMove);

function init() {
  array = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ];
  player = "X";
  load();
}

function checkWin() {
  wins.forEach(function(check, i) {
    if (
      array[check[0]] &&
      array[check[0]] === array[check[1]] &&
      array[check[0]] === array[check[2]] &&
      array[check[0]] === array[check[4]] &&
      array[check[0]] === array[check[4]]
    ) {
      if (array[check[0]] !== "") {
        if (array[check[0]] === "X") {
          alert("Player 1 won!");
        } else {
          alert("Player 2 won!");
        }
      }
    }
  });
}

function load() {
  array.forEach(function(mark, i) {
    tiles[i].textContent = mark;
  });
  checkWin();
}

function makeMove() {
  let index = tiles.findIndex(function(tile) {
    return tile === event.target;
  });
  array[index] = player;
  player = changeTurn();
  load();
}

function changeTurn() {
  if (player === "X") {
    player = "O";
  } else if (player === "O") {
    player = "X";
  }
  return player;
}

init();

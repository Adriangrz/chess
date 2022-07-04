const { format } = require("path");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let chessBoard = [
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];

function getIndexOf(arr, k) {
  for (var i = 0; i < arr.length; i++) {
    var index = arr[i].indexOf(k);
    if (index > -1) {
      return [i, index];
    }
  }
}

rl.question("Wpisz nazwę figury szachowej: ", function (chessman) {
  rl.question("Wpisz pozycję: ", function (positon) {
    let index = getIndexOf(chessBoard, positon);
    switch (chessman) {
      case "king":
        for (let a = -1; a < 2; a++)
          for (let b = -1; b < 2; b++)
            if (
              index[0] + b > -1 &&
              index[1] + a > -1 &&
              chessBoard[index[0] + b][index[1] + a] != positon
            )
              console.log(`${chessBoard[index[0] + b][index[1] + a]}`);
        rl.close();
      case "rook":
        for (let a = 0; a < 8; a++)
          if (chessBoard[a][index[1]] != positon)
            console.log(`${chessBoard[a][index[1]]}`);
        for (let a = 0; a < 8; a++)
          if (chessBoard[index[0]][a] != positon)
            console.log(`${chessBoard[index[0]][a]}`);
        rl.close();
    }
  });
});

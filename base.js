let canvas, ctx, gameEnd = false, score = {o: 0, x: 0};
// variables for all TicTacToe squares
let squares = [];
// let player = "x";
// variables forEach tictac row
let r1 = [], r2 = [], r3 = [], r4 = [], r5 = [], r6 = [], r7 = [], r8 = [];

class Game {
  init(num1, num2, players) {
    r1 = [], r2 = [], r3 = [], r4 = [], r5 = [], r6 = [], r7 = [], r8 = [], canvas, ctx, squares = [], gameEnd = false;
    if (document.getElementsByTagName("canvas")[0]) document.getElementsByTagName("canvas")[0].remove();

    canvas = Object.assign(document.createElement('canvas'), {
      // NOTE: all values below is dynamic so changing the canvas size will not break anything
      width: num1, height: num2, id: "canvas"
    })
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
    // canvas outside border
    ctx.fillRect(0 ,canvas.height - 1, canvas.width, 1);
    ctx.fillRect(0 ,0, canvas.width, 1);
    ctx.fillRect(0, 0, 1, canvas.height);
    ctx.fillRect(canvas.width-1, 0, 1, canvas.height);
    // canvas inside border
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    ctx.fillRect(0 ,canvas.height / 3, canvas.width, 1);
    ctx.fillRect(0, (canvas.height / 3) * 2, canvas.width, 1);
    ctx.fillRect(canvas.width / 3, 0, 1, canvas.height);
    ctx.fillRect((canvas.width / 3) * 2, 0, 1, canvas.height);

  }

  text(txt) {
    ctx.fillStyle = "white";
    ctx.font = "bold 30px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = 'middle';
    ctx.fillText(txt, canvas.width / 2, canvas.height / 2);
  }

  color() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  }

  play(evt) {

    let c = { h: evt.pageX - canvas.offsetLeft, v: evt.pageY - canvas.offsetTop };

    if (c.h < canvas.width / 3 && c.v < canvas.height / 3 && !isThere(1)) {
      new Draw().x(1);
      tictac()
    } else if (c.h > canvas.width / 3 && c.h < canvas.width / 3 * 2 && c.v < canvas.height / 3 && !isThere(2)) {
      new Draw().x(2);
      tictac()
    } else if (c.h > canvas.width / 3 * 2 && c.h < canvas.width && c.v < canvas.height / 3 && !isThere(3)) {
      new Draw().x(3);
      tictac()
    } else if (c.h < canvas.width / 3 && c.v > canvas.height / 3 && c.h < canvas.width / 3 * 2 && c.v < canvas.height / 3 * 2 && !isThere(4)) {
      new Draw().x(4);
      tictac()
    } else if (c.h < canvas.width / 3 * 2 && c.h > canvas.width / 3 && c.v < canvas.height / 3 * 2 && c.v > canvas.height / 3 && !isThere(5)) {
      new Draw().x(5);
      tictac()
    } else if (c.h < canvas.width && c.h > canvas.width / 3 * 2 && c.v > canvas.height / 3 && c.v < canvas.height / 3 * 2 && !isThere(6)) {
      new Draw().x(6);
      tictac()
    } else if (c.h < canvas.width / 3 && c.v < canvas.height && c.v > canvas.height / 3 * 2 && !isThere(7)) {
      new Draw().x(7);
      tictac()
    } else if (c.h < canvas.width / 3 * 2 && c.h > canvas.width / 3 && c.v < canvas.height && c.v > canvas.height / 3 * 2 && !isThere(8)) {
      new Draw().x(8);
      tictac()
    } else if (c.h > canvas.width / 3 * 2 && c.h < canvas.width && c.v > canvas.height / 3 * 2 && c.v < canvas.height && !isThere(9)) {
      new Draw().x(9);
      tictac()
    }

  }

}

class Painter {
  drawX(i, r) {
    ctx.strokeStyle = new Game().color();
    ctx.moveTo(i+ canvas.width / 15, r + canvas.height / 15);
    ctx.lineTo(i+ canvas.width / 3.7, r + canvas.height / 3.7);
    ctx.moveTo(i+ canvas.width / 3.7, r + canvas.height / 15);
    ctx.lineTo(i+ canvas.width / 15, r + canvas.height / 3.7);
    ctx.stroke();
  }
  drawO(i, r, s) {
    ctx.strokeStyle = new Game().color();
    ctx.beginPath();
    ctx.arc(i, r, smaller(canvas.height, canvas.width) / 8, 0, Math.PI*2, true);
    ctx.stroke();
    ctx.closePath();
    function smaller(height, width) {
      if (height < width) return height;
      return width;
    }
  }
}

class Draw {
  o(squareNum) {
    switch (squareNum) {
      case 1:
      new Painter().drawO(canvas.width / 6, canvas.height / 6);
      squares.push({num: squareNum, con: 'o'});
      break;
      case 2:
      new Painter().drawO(canvas.width / 2, canvas.height / 6);
      squares.push({num: squareNum, con: 'o'});
      break;
      case 3:
      new Painter().drawO(canvas.width - canvas.width / 6, canvas.height / 6);
      squares.push({num: squareNum, con: 'o'});
      break;
      case 4:
      new Painter().drawO(canvas.width / 6, canvas.height / 2);
      squares.push({num: squareNum, con: 'o'});
      break;
      case 5:
      new Painter().drawO(canvas.width / 2, canvas.height / 2);
      squares.push({num: squareNum, con: 'o'});
      break;
      case 6:
      new Painter().drawO(canvas.width - canvas.width / 6, canvas.height / 2);
      squares.push({num: squareNum, con: 'o'});
      break;
      case 7:
      new Painter().drawO(canvas.width / 6, canvas.height - canvas.height / 6);
      squares.push({num: squareNum, con: 'o'});
      break;
      case 8:
      new Painter().drawO(canvas.width / 2, canvas.height - canvas.height / 6);
      squares.push({num: squareNum, con: 'o'});
      break;
      case 9:
      new Painter().drawO(canvas.width - canvas.width / 6, canvas.height - canvas.height / 6);
      squares.push({num: squareNum, con: 'o'});
      break;
    }
    new collector().get();

  }
  x(squareNum) {
    switch (squareNum) {
      case 1:
      new Painter().drawX(0, 0);
      squares.push({num: squareNum, con: 'x'});
      break;
      case 2:
      new Painter().drawX(canvas.width / 3, 0);
      squares.push({num: squareNum, con: 'x'});
      break;
      case 3:
      new Painter().drawX(canvas.width / 3 * 2, 0);
      squares.push({num: squareNum, con: 'x'});
      break;
      case 4:
      new Painter().drawX(0, canvas.height / 3);
      squares.push({num: squareNum, con: 'x'});
      break;
      case 5:
      new Painter().drawX(canvas.width / 3, canvas.height / 3);
      squares.push({num: squareNum, con: 'x'});
      break;
      case 6:
      new Painter().drawX(canvas.width / 3 * 2, canvas.height / 3);
      squares.push({num: squareNum, con: 'x'});
      break;
      case 7:
      new Painter().drawX(0, canvas.height / 3 * 2);
      squares.push({num: squareNum, con: 'x'});
      break;
      case 8:
      new Painter().drawX(canvas.width / 3, canvas.height / 3 * 2);
      squares.push({num: squareNum, con: 'x'});
      break;
      case 9:
      new Painter().drawX(canvas.width / 3 * 2, canvas.height / 3 * 2);
      squares.push({num: squareNum, con: 'x'});
      break;
    }
    new collector().get();
  }
}

class collector {
  get() {
    r1 = [], r2 = [], r3 = [], r4 = [], r5 = [], r6 = [], r7 = [], r8 = [];
    for (var i = 0; i < squares.length; i++) {
      if (squares[i].num === 1 || squares[i].num === 2 || squares[i].num === 3) r1.push(squares[i]);
      if (squares[i].num === 4 || squares[i].num === 5 || squares[i].num === 6) r2.push(squares[i]);
      if (squares[i].num === 7 || squares[i].num === 8 || squares[i].num === 9) r3.push(squares[i]);

      if (squares[i].num === 1 || squares[i].num === 4 || squares[i].num === 7) r4.push(squares[i]);
      if (squares[i].num === 2 || squares[i].num === 5 || squares[i].num === 8) r5.push(squares[i]);
      if (squares[i].num === 3 || squares[i].num === 6 || squares[i].num === 9) r6.push(squares[i]);

      if (squares[i].num === 1 || squares[i].num === 5 || squares[i].num === 9) r7.push(squares[i]);
      if (squares[i].num === 3 || squares[i].num === 5 || squares[i].num === 7) r8.push(squares[i]);
    }
  }
}

function isThere(param) {
  for (var i = 0; i < squares.length; i++) {
    if (squares[i].num === param) {
      return true;
    }
  }
}

function clicker() {
  document.getElementById('canvas').addEventListener('mousedown', (evt) => {
    if (!gameEnd) {
      new Game().play(evt);
    }
  });
}


// to determine which square must be filled
function tacIt(arr) { // tictac row as array
  if (arr[0] && arr[1] && arr[0].con === arr[1].con && typeof arr[2] === "undefined") {
    return {n1: 0, n2: 1};
  } else if (arr[0] && arr[2] && arr[0].con === arr[2].con && typeof arr[1] === "undefined") {
    return {n1: 0, n2: 2};
  } else if (arr[2] && arr[1] && arr[2].con === arr[1].con && typeof arr[0] === "undefined") {
    return {n1: 1, n2: 2};
  }
  return false;
}

function ticIt(arr, obj, num1, num2) {
  if ( arr[obj.n1].num === num1 && arr[obj.n2].num === num2 || arr[obj.n1].num === num2 && arr[obj.n2].num === num1 ) return true;
  return false;
}

function tictac() {
  if (tacIt(r1)) {

    let o = tacIt(r1);
    if (ticIt(r1, o, 1, 2)) new Draw().o(3);
    else if (ticIt(r1, o, 1, 3)) new Draw().o(2);
    else if (ticIt(r1, o, 2, 3)) new Draw().o(1);

  } else if (tacIt(r2)) {

    let o = tacIt(r2);
    if (ticIt(r2, o, 4, 5)) new Draw().o(6);
    else if (ticIt(r2, o, 4, 6)) new Draw().o(5);
    else if (ticIt(r2, o, 5, 6)) new Draw().o(4);

  } else if (tacIt(r3)) {

    let o = tacIt(r3);
    if (ticIt(r3, o, 7, 8)) new Draw().o(9);
    else if (ticIt(r3, o, 7, 9)) new Draw().o(8);
    else if (ticIt(r3, o, 8, 9)) new Draw().o(7);

  } else if (tacIt(r4)) {

    let o = tacIt(r4);
    if (ticIt(r4, o, 1, 4)) new Draw().o(7);
    else if (ticIt(r4, o, 1, 7)) new Draw().o(4);
    else if (ticIt(r4, o, 4, 7)) new Draw().o(1);

  } else if (tacIt(r5)) {

    let o = tacIt(r5);
    if (ticIt(r5, o, 2, 5)) new Draw().o(8);
    else if (ticIt(r5, o, 2, 8)) new Draw().o(5);
    else if (ticIt(r5, o, 5, 8)) new Draw().o(2);

  } else if (tacIt(r6)) {

    let o = tacIt(r6);
    if (ticIt(r6, o, 3, 6)) new Draw().o(9);
    else if (ticIt(r6, o, 3, 9)) new Draw().o(6);
    else if (ticIt(r6, o, 6, 9)) new Draw().o(3);

  } else if (tacIt(r7)) {

    let o = tacIt(r7);
    if (ticIt(r7, o, 1, 5)) new Draw().o(9);
    else if (ticIt(r7, o, 1, 9)) new Draw().o(5);
    else if (ticIt(r7, o, 5, 9)) new Draw().o(1);

  } else if (tacIt(r8)) {

    let o = tacIt(r8);
    if (ticIt(r8, o, 3, 5)) new Draw().o(7);
    else if (ticIt(r8, o, 3, 7)) new Draw().o(5);
    else if (ticIt(r8, o, 5, 7)) new Draw().o(3);

  } else {
    if (!isThere(5)) new Draw().o(5);
    else {
      let i = Math.floor((Math.random() * 8) + 1);
      if (!isThere(i) && squares.length !== 9 && squares.length < 10) new Draw().o(i);
      else {

        if (squares.length !== 9 && squares.length < 10) {
          let temp = setInterval(function () {
            i = Math.floor((Math.random() * 8) + 1);
            if (!isThere(i)) {
              new Draw().o(i);
              clearInterval(temp);
            }
          }, 10);
        } else gameEnd = true;
      }
    }

  }

  whoWon();

}

function checkIt(arr) {
  if (typeof arr[0] !== "undefined" && typeof arr[1] !== "undefined" && typeof arr[2] !== "undefined" && arr[0].con === arr[1].con && arr[2].con === arr[1].con) return true;
  return false
}

function whoWon() {

  if ( checkIt(r1)) winner(r1[0].con);
  else if ( checkIt(r2)) winner(r2[0].con);
  else if ( checkIt(r3)) winner(r3[0].con);
  else if ( checkIt(r4)) winner(r4[0].con);
  else if ( checkIt(r5)) winner(r5[0].con);
  else if ( checkIt(r6)) winner(r6[0].con);
  else if ( checkIt(r7)) winner(r7[0].con);
  else if ( checkIt(r8)) winner(r8[0].con);
  else if ( squares.length === 9) winner("draw");

  function winner(msg) {
    ctx.fillStyle = "white";
    ctx.font = "bold 30px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = 'middle';

    if (msg === "x") ++score.x, ctx.fillText("Congrats you won! ( X )", canvas.width / 2, canvas.height / 2);
    else if (msg === "o") ++score.o, ctx.fillText("Oops, you lost! ( X )", canvas.width / 2, canvas.height / 2);
    else if (msg === "draw") ctx.fillText("No winner here!!", canvas.width / 2, canvas.height / 2);

    if (msg) {
      gameEnd = true;
      setTimeout(function () {
        new Game().init(400, 400);
        new Game().text("New game, Be ready!");
        setTimeout(function () {
          new Game().init(400, 400);
          clicker();
        }, 900);

      }, 800);
    }
  }

}

(() => {
  new Game().init(400, 400);
  clicker();

  document.getElementById('reset').addEventListener("click", function () {
    new Game().init(400, 400);
    new Game().text("New game, Be ready!");
    setTimeout(function () {
      new Game().init(400, 400);
      clicker();
    }, 900);
  })
})();

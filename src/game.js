let canvas, ctx, gameEnd = false, score = {o: 0, x: 0}, multi = false, lastPlay = "x";
// variables for all TicTacToe squares
let squares = [];
// let player = "x";
// variables forEach tictac row
let r1 = [], r2 = [], r3 = [], r4 = [], r5 = [], r6 = [], r7 = [], r8 = [];

function getSize() {
  if (window.innerWidth < window.innerHeight) return window.innerWidth - 150;
  else return 450;
}

class Game {
  init(wd, hi) {
    r1 = [], r2 = [], r3 = [], r4 = [], r5 = [], r6 = [], r7 = [], r8 = [], canvas, ctx, squares = [], gameEnd = false;
    if (document.getElementsByTagName("canvas")[0]) document.getElementsByTagName("canvas")[0].remove();

    canvas = Object.assign(document.createElement('canvas'), {
      // NOTE: all values below is dynamic so changing the canvas size will not break anything
      width: wd || getSize(), height: hi || getSize(), id: "canvas"
    })
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');

    ctx.fillStyle = "rgb(241, 196, 15)";
    ctx.fillRect(0 ,canvas.height / 3, canvas.width, 2);
    ctx.fillStyle = "rgb(155, 89, 182)";
    ctx.fillRect(0, (canvas.height / 3) * 2, canvas.width, 2);
    ctx.fillStyle = "rgb(46, 204, 113)";
    ctx.fillRect(canvas.width / 3, 0, 2, canvas.height);
    ctx.fillStyle = "rgb(41, 128, 185)";
    ctx.fillRect((canvas.width / 3) * 2, 0, 2, canvas.height);

  }

  text(txt) {
    ctx.fillStyle = "rgb(52, 73, 94)";
    ctx.font = "bold 25px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = 'middle';
    ctx.fillText(txt, canvas.width / 2, canvas.height / 2);
  }

  color() {
    return `rgb(0, 0, 0)`;
    // return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  }

  play(evt) {

    let c = { h: evt.pageX - canvas.offsetLeft, v: evt.pageY - canvas.offsetTop };
    let game = (squareNumber) => {
      if (multi) {
        switch (lastPlay) {
          case "x":
          new Draw().x(squareNumber);
          lastPlay = "o"
          break;
          case "o":
          new Draw().o(squareNumber);
          lastPlay = "x"
          break;
        }
        whoWon();
      } else {
        new Draw().x(squareNumber);
        setTimeout(function () { // adding delay
          tictac();
        }, 3e2);
      }
    };

    if (c.h < canvas.width / 3 && c.v < canvas.height / 3 && !isThere(1)) game(1);
    else if (c.h > canvas.width / 3 && c.h < canvas.width / 3 * 2 && c.v < canvas.height / 3 && !isThere(2)) game(2);
    else if (c.h > canvas.width / 3 * 2 && c.h < canvas.width && c.v < canvas.height / 3 && !isThere(3)) game(3);
    else if (c.h < canvas.width / 3 && c.v > canvas.height / 3 && c.h < canvas.width / 3 * 2 && c.v < canvas.height / 3 * 2 && !isThere(4)) game(4);
    else if (c.h < canvas.width / 3 * 2 && c.h > canvas.width / 3 && c.v < canvas.height / 3 * 2 && c.v > canvas.height / 3 && !isThere(5)) game(5);
    else if (c.h < canvas.width && c.h > canvas.width / 3 * 2 && c.v > canvas.height / 3 && c.v < canvas.height / 3 * 2 && !isThere(6)) game(6);
    else if (c.h < canvas.width / 3 && c.v < canvas.height && c.v > canvas.height / 3 * 2 && !isThere(7)) game(7);
    else if (c.h < canvas.width / 3 * 2 && c.h > canvas.width / 3 && c.v < canvas.height && c.v > canvas.height / 3 * 2 && !isThere(8)) game(8);
    else if (c.h > canvas.width / 3 * 2 && c.h < canvas.width && c.v > canvas.height / 3 * 2 && c.v < canvas.height && !isThere(9)) game(9);

  }

  score() { // to update the game score on navbar
    let o = document.getElementById('playerO');
    let x = document.getElementById('playerX');
    o.innerHTML = `&nbsp; O: ${score.o} &nbsp;`;
    x.innerHTML = `&nbsp; X: ${score.x} &nbsp;`;
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
    if (!gameEnd) { // to prevent o execution if the user ( x ) win

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
  // to check if x win before playing o
  if (!gameEnd) whoWon();

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

  if (!gameEnd) {
    whoWon();
  }

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
    ctx.fillStyle = "rgb(52, 73, 94)";
    ctx.font = "bold 30px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = 'middle';

    if (msg === "x") ++score.x, ctx.fillText("Congrats you won! ( X )", canvas.width / 2, canvas.height / 2);
    else if (msg === "o") ++score.o, ctx.fillText("Congrats you won! ( O )", canvas.width / 2, canvas.height / 2);
    else if (msg === "draw") ctx.fillText("No winner here!!", canvas.width / 2, canvas.height / 2);

    new Game().score(); // updating game score on navbar

    if (msg) {
      gameEnd = true;
      setTimeout(function () {
        new Game().init();
        new Game().text("New game, Be ready!");
        setTimeout(function () {
          new Game().init();
          clicker();
        }, 1e3);

      }, 1e3);
    }
  }

}


(() => {
  new Game().init();
  clicker();

  document.getElementById('reset').addEventListener("click", newGame);

  let opt = document.getElementsByClassName('opt');
  for (var i = 0; i < opt.length; i++) {
    opt[i].addEventListener("click", opts);
  }

  function opts(e) {
    let el = e.currentTarget;
    if (el.textContent.trim() === "Two player") {
      document.getElementsByClassName('opt')[0].classList.remove("selected");
      el.classList.add("selected");
      newGame("Multiplayer game, be ready!");
      return multi = true;
    }

    document.getElementsByClassName('opt')[1].classList.remove("selected");
    el.classList.add("selected");
    newGame("One player game, Be ready!");
    return multi = false;
  }

})();

function newGame(txt) {
  new Game().init();
  new Game().text(typeof txt === "string" && txt || "New game, Be ready!");
  setTimeout(function () {
    new Game().init();
    clicker();
  }, 1e3);
}

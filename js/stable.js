//  variables to define player role and single game or two
var player = 1, poscore = 0, ptscore = 0, twoPlayer;
// storing all input object to use it later
var bag = $('#tictac-bord input');

function tic(btn) {
  if (twoPlayer === true) {
    if (player == 1) {
      $('#'+ btn).val("x").prop('disabled', true);
      player -=1;
    }
    DrawTicTac();
  }
  else if (twoPlayer === false) {
    if (player == 1) {
      $('#'+ btn).val("x").prop('disabled', true);
      player -=1;
    }
    else {
      $('#'+ btn).val("o").prop('disabled', true);
      player += 1;
    }
  }
  WhoWon()
}

function DrawTicTac() {
  if (bag[4].value == "") {
    $(bag[4]).val("o").prop('disabled', true);
  }
  else if (bag[4].value == "x" && bag[0].value == "" || bag[4].value == "o" && bag[8].value == "o" && bag[0].value == "" || bag[1].value == "o" && bag[2].value == "o" && bag[0].value == "" || bag[1].value == "o" && bag[2].value == "o" && bag[0].value == "" || bag[3].value == "o" && bag[6].value == "o" && bag[0].value == "" || bag[1].value == "x" && bag[2].value == "x" && bag[0].value == "" || bag[4].value == "x" && bag[8].value == "x" && bag[0].value == "" || bag[3].value == "x" && bag[6].value == "x" && bag[0].value == "" && bag[4].value !== "o" && bag[7].value == "o" || bag[4].value == "o" && bag[1].value == "x" && bag[3].value == "x" && bag[0].value == "" || bag[2].value !== "" && bag[3].value !== "" && bag[6].value !== "" && bag[0].value == "" || bag[3].value !== "" && bag[4].value !== "" && bag[2].value !== "" && bag[0].value == "" || bag[4].value !== "" && bag[1].value !== "" && bag[6].value !== "" && bag[0].value == "" || bag[0].value == "" && bag[4].value == "o" && bag[3].value == "x" && bag[1].value == "" ) {
    $(bag[0]).val("o").prop('disabled', true);
  }
  else if (bag[0].value == "o" && bag[2].value == "o" && bag[1].value == "" || bag[4].value == "o" && bag[7].value == "o" && bag[1].value == "" ||bag[4].value == "x" && bag[7].value == "x" && bag[1].value == "" || bag[0].value == "x" && bag[2].value == "x" && bag[1].value == "" || bag[4].value == "x" && bag[7].value == "x" && bag[1].value == "" && bag[3].value !== "" || bag[0].value == "x" && bag[8].value == "x" && bag[3].value == "" && bag[6].value == "" && bag[1].value == "" || bag[2].value == "x" && bag[6].value == "x" && bag[1].value == "") {
    $(bag[1]).val("o").prop('disabled', true);
  }
  else if (bag[0].value == "o" && bag[1].value == "o" && bag[2].value == "" || bag[0].value == "x" && bag[1].value == "x" && bag[2].value == "" || bag[0].value !== "" && bag[4].value !== "" && bag[5].value !== "" && bag[2].value == "" || bag[0].value == "o" && bag[8].value == "o" && bag[4].value == "" && bag[2].value == "" || bag[4].value == "o" && bag[1].value == "x" && bag[5].value == "x" && bag[2].value == "" || bag[8].value == "o" && bag[5].value == "o" && bag[2].value == "" || bag[8].value == "x" && bag[5].value == "x" && bag[2].value == "" || bag[4].value == "x" && bag[6].value == "x" && bag[2].value == "" || bag[4].value == "o" && bag[6].value == "o" && bag[2].value == "" ) {
    $(bag[2]).val("o").prop('disabled', true);
  }
  else if (bag[0].value == "x" && bag[6].value == "x" && bag[3].value == "" || bag[4].value == "x" && bag[5].value == "x" && bag[3].value == "" || bag[0].value == "o" && bag[6].value =="o" && bag[3].value =="") {
    $(bag[3]).val("o").prop('disabled', true);
  }
  else if (bag[0].value == "x" && bag[8].value == "x" && bag[4].value == "" || bag[2].value == "x" && bag[6].value == "x" && bag[4].value == "" || bag[3].value == "x" && bag[5].value == "x" && bag[4].value == "" || bag[1].value == "x" && bag[7].value == "x" && bag[4].value == "") {
    $(bag[4]).val("o").prop('disabled', true);
  }
  else if (bag[8].value == "x" && bag[2].value == "x" && bag[5].value == "" || bag[3].value == "x" && bag[4].value == "x" && bag[5].value == "" || bag[1].value == "x" && bag[7].value =="x" && bag[4].value == "o" && bag[5].value == "" || bag[8].value == "o" && bag[2].value == "o" && bag[5].value == "" || bag[3].value == "o" && bag[4].value == "o" && bag[5].value == "" || bag[4].value == "x" && bag[8].value !== "" && bag[0].value !== "" && bag[5].value == "" && bag[3].value == "") {
    $(bag[5]).val("o").prop('disabled', true);
  }
  else if (bag[4].value == "o" && bag[2].value == "o" && bag[6].value == "" || bag[0].value == "o" && bag[3].value == "o" && bag[6].value == "" || bag[8].value == "o" && bag[7].value == "o" && bag[6].value == "" || bag[4].value == "o" && bag[2].value == "o" && bag[6].value == "" || bag[0].value == "x" && bag[3].value == "x" && bag[6].value == "" || bag[8].value == "x" && bag[7].value == "x" && bag[6].value == "" || bag[4].value == "x" && bag[2].value == "x" && bag[6].value == "" || bag[4].value == "o" && bag[7].value == "x" && bag[3].value == "x" && bag[6].value == "" || bag[0].value !== "" && bag[7].value !== "" && bag[8].value !== "" && bag[6].value == "" || bag[3].value !== "" && bag[4].value !== "" && bag[8].value !== "" && bag[6].value == "" || bag[0].value !== "" && bag[4].value !== "" && bag[7].value !== "" && bag[6].value == "") {
    $(bag[6]).val("o").prop('disabled', true);
  }
  else if (bag[8].value == "o" && bag[6].value == "o" && bag[7].value == "" || bag[1].value == "o" && bag[4].value == "o" && bag[7].value == "" || bag[8].value == "x" && bag[6].value == "x" && bag[7].value == "" || bag[1].value == "x" && bag[4].value == "x" && bag[7].value == "" || bag[3].value == "x" && bag[5].value == "x" && bag[4].value == "o" && bag[7].value == "") {
    $(bag[7]).val("o").prop('disabled', true);
  }
  else if (bag[0].value == "o" && bag[4].value == "o" && bag[8].value == "" || bag[7].value == "o" && bag[6].value == "o" && bag[8].value == "" || bag[5].value == "o" && bag[2].value == "o" && bag[8].value == "" || bag[4].value == "o" && bag[0].value == "o" && bag[8].value == "" || bag[7].value == "x" && bag[6].value == "x" && bag[8].value == "" || bag[5].value == "x" && bag[2].value == "x" && bag[8].value == "" || bag[4].value == "x" && bag[0].value == "x" && bag[8].value == "" || bag[4].value == "o" && bag[5].value == "x" && bag[7].value == "x" && bag[8].value == "" || bag[6].value !== "" && bag[7].value !== "" && bag[2].value !== "" && bag[8].value == "" || bag[6].value !== "" && bag[4].value !== "" && bag[5].value !== "" & bag[8].value == "" || bag[4].value !== "" & bag[7].value !== "" && bag[2].value !== "" && bag[8].value == "") {
    $(bag[8]).val("o").prop('disabled', true);
  }
  //  i didnt include this condtion up becuse it's just need time
  else if (bag[4].value !== "" && bag[1].value !== "" && bag[8].value !== "" && bag[2].value =="" || bag[0].value !== "" && bag[1].value !== ""  && bag[4].value == "o" && bag[8].value !== "" && bag[2].value == "") {
    console.log("need to refactor");
    $(bag[2]).val("o").prop('disabled', true);
  }
  player += 1;
}

// here i decide who won and who lose (tic tac toe rules)
function WhoWon() {
  if (bag[0].value=="x"&&bag[1].value=="x"&&bag[2].value=="x"||bag[3].value=="x"&& bag[4].value=="x"&& bag[5].value=="x"||bag[6].value == "x" && bag[7].value == "x" && bag[8].value == "x"||bag[0].value == "x" && bag[3].value == "x" && bag[6].value == "x"||bag[1].value == "x" && bag[4].value == "x" && bag[7].value == "x"||bag[2].value == "x" && bag[5].value == "x" && bag[8].value == "x"||bag[2].value == "x" && bag[4].value == "x" && bag[6].value == "x"||bag[8].value == "x" && bag[4].value == "x" && bag[0].value == "x") {
    Again();
    poscore ++ ;
    $('#winbord').html(" x "+poscore);
    $('#deatwx').html(poscore);
    if (poscore > 1) {
      $('#winbord').html(" x won : " + poscore + " times");
    }
    setTimeout(function(){$('#winbord').html("")}, 1000);
  }
  else if (bag[0].value=="o"&&bag[1].value=="o"&&bag[2].value=="o"||bag[3].value=="o"&& bag[4].value=="o"&& bag[5].value=="o"||bag[6].value == "o" && bag[7].value == "o" && bag[8].value == "o"||bag[0].value == "o" && bag[3].value == "o" && bag[6].value == "o"||bag[1].value == "o" && bag[4].value == "o" && bag[7].value == "o"||bag[2].value == "o" && bag[5].value == "o" && bag[8].value == "o"||bag[2].value == "o" && bag[4].value == "o" && bag[6].value == "o"||bag[8].value == "o" && bag[4].value == "o" && bag[0].value == "o") {
    Again();
    ptscore ++ ;
    $('#winbord').html(" O won :"+ptscore);
    $('#deatwo').html(ptscore);

    if (ptscore > 1) {
      $('#winbord').html(" O won :"+ptscore + " times");
    }
    setTimeout(function(){$('#winbord').html("")}, 1000);
  }
  else if ( bag[0].value !== "" && bag[1].value !== "" && bag[2].value !== "" && bag[3].value !== "" && bag[4].value !== "" && bag[5].value !== "" && bag[6].value !== "" && bag[7].value !== "" && bag[8].value !== "" ) {
    $('#winbord').html("no winner here ");
    setTimeout(function(){$('#winbord').html("")}, 1000);
    Again();
  }
}

function Again() {
  for (var i = 0; i <= 8; i++) {
    $(bag[i]).val("").prop('disabled', false).css('background-color', 'inherit');
  }
  if (player !== 1) {
    player = 1;
  }
}

$('input').click(function(){
  if (twoPlayer == undefined  ) {
    swal({   title: "Oops!!",
    text: "Opps !!  Reload The Page And Aray Again",
    timer: 2000});
  }
});

$(document).ready(function(){
  $('[data-toggle="tooltip"]');
  // $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
  $('#tictac-bord').before('<table id="deat">');
  $('#deat').append('<tr id="deat-tr">');
  $('#deat-tr').append('<td>X ( <p id="deatwx">0</p> )','<td> : game score : </td>','<td>( <p id="deatwo">0</p> ) O</td>');
  $('#tictac-bord').after('<p id="winbord">');
});

function reset213() {
  player = 1, poscore = 0, ptscore = 0, twoPlayer = undefined;
  $('#deatwx').html(poscore);
  $('#deatwo').html(ptscore);
  Again();
}

function changePlayer() {
  $('#tictac-cover').removeClass().addClass('rotatedout');
  $('#home-cover').removeClass().addClass('rotatedin');
  setTimeout(function(){reset213()}, 1100);
}
function swapPlaces() {
  $('#home-cover').removeClass().addClass('rotatedout');
  $('#tictac-cover').removeClass().addClass('rotatedin');
}

function OnePlayer() {
  twoPlayer = true ;
  swapPlaces();
}

function TwoPlayer() {
  twoPlayer = false ;
  swapPlaces();
}

function About() {
  swal("Unfortunately !! the most important section is still under construction");
}
function Exit() {
  // somehow i couldn't add a damn function to close window this weird but i will work on
  swal("No way to get-away you must play the Game");
}

function unSelectText(input) {
  $(input).css({"-webkit-touch-callout": "none",
  "-webkit-user-select": "none",
  "-khtml-user-select":"none",
  "-moz-user-select":"none",
  "-ms-user-select":"none",
  "user-select":"none"});
}

unSelectText('h1');

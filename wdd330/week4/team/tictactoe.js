const cells = document.getElementById("tic-tac-toe");
cells.addEventListener("click", game);

//Nanci - game
let counter = 0;

function game(event) {
  const target = event.target;
  counter++;
if(target.innerHTML == ""){
  switch (counter % 2) {
    case 0:
      target.innerHTML = "O";
      target.style.color = "red";
      break;
    case 1:
      target.innerHTML = "X";
      target.style.color = "green";
      break;
  }
}
  for (i = 0; i < 3; i++) {
    			if ((document.getElementById(i).innerHTML == "X") && (document.getElementById(i + 3).innerHTML == 'X') && (document.getElementById(i + 6).innerHTML == 'X')) {
      			var winner = "X Wins";
      			document.getElementById("winner").innerText = winner;
    		}
        }
        
for (i = 0; i < 3; i++) {
    			if ((document.getElementById(i).innerHTML == "O") && (document.getElementById(i + 3).innerHTML == 'O') && (document.getElementById(i + 6).innerHTML == 'O')) {
      			var winner = "O Wins";
      			document.getElementById("winner").innerText = winner;
    		}
        }
        
for (i = 0; i < 9; i += 3) {
    			if ((document.getElementById(i).innerHTML == "X") && (document.getElementById(i + 1).innerHTML == 'X') && (document.getElementById(i + 2).innerHTML == 'X')) {
      			var winner = "X Wins";
      			document.getElementById("winner").innerText = winner;
    		}
        }
        
for (i = 0; i < 9; i += 3) {
    			if ((document.getElementById(i).innerHTML == "O") && (document.getElementById(i + 1).innerHTML == 'O') && (document.getElementById(i + 2).innerHTML == 'O')) {
      			var winner = "O Wins";
      			document.getElementById("winner").innerText = winner;
    		}
        }
        
if ((document.getElementById(0).innerHTML == "X") && (document.getElementById(4).innerHTML == 'X') && (document.getElementById(8).innerHTML == 'X')) {
	var winner = "X Wins";
      			document.getElementById("winner").innerText = winner;
}

if ((document.getElementById(2).innerHTML == "X") && (document.getElementById(4).innerHTML == 'X') && (document.getElementById(6).innerHTML == 'X')) {
	var winner = "X Wins";
      			document.getElementById("winner").innerText = winner;
}

if ((document.getElementById(0).innerHTML == "O") && (document.getElementById(4).innerHTML == 'O') && (document.getElementById(8).innerHTML == 'O')) {
	var winner = "O Wins";
      			document.getElementById("winner").innerText = winner;
}

if ((document.getElementById(2).innerHTML == "O") && (document.getElementById(4).innerHTML == 'O') && (document.getElementById(6).innerHTML == 'O')) {
	var winner = "O Wins";
      			document.getElementById("winner").innerText = winner;
}
}

//Naomi - Reset
function reset() {
  counter = 0;
  for (let i = 0; i < 9; i++) {
    var cleared = "";
    var initText = "No Winner Yet";
    var square = document.getElementById(i);
    var winner = document.getElementById('winner');
    square.innerText = cleared;
    winner.innerText = initText;
  }
}

//Template Created with simple Header, footer & body along with blank style.css & * apps.js on 6/30/2021.
//minimal use is Bootstrap Container, row and col.

let selection = {
  paper: {
    says: 'Paper'
  },
  rock: {
    says: 'Rock'
  },
  scissors: {
    says: 'Scissors'
  }
}

/** 
 * Commented to change the functionality from single button to object based
 */

// function userclickedRock() {
//   console.log("Rock");
//   document.getElementById("userselected").innerHTML = "Rock"
// }

// function userclickedPaper() {
//   console.log("Paper");
//   document.getElementById("userselected").innerHTML = "Paper"
//   userselectedbtn(Paper);
// }

// function userclickedScissors() {
//   console.log("Scissors");
//   document.getElementById("userselected").innerHTML = "Scissors"
// }

// function userclickedblank() {
//   document.getElementById("userselected").innerHTML = ""
// }

let uselect = ""

function random() {
  let ranSelection = Object.keys(selection)
  let randIndex = Math.floor(Math.random() * (ranSelection.length - 0) + 0);
  //debugger;
  //Math.random()*(max-min)+Min
  cgselection(ranSelection[randIndex]);
}

function userselectedbtn(selected) {
  console.log(selected);
  document.getElementById("userselected").innerHTML = selected;
  uselect = selected;
  // userselection(selected);
  //debugger;
  random();
}

function cgselection(cgclicked) {
  let cgselect = selection[cgclicked]
  // debugger;
  console.log(cgclicked)
  let cselect = cgselect.says;
  // document.getElementById("computergenerated").innerText =
  //   `The computer selected ${cgselect.says}.`
  document.getElementById("computergenerated").innerText =
    `The computer selected ${cgselect.says}.`
  debugger;
  rksoutput(uselect, cselect)
}

function rksoutput(uselect, cselect) {

  // user win selection
  let uselect = uselect.touppercase()
  let cselect = cselect.touppercase()

  if (uselect === cselect) {
    document.getElementById("gameoutput").innerText =
      `The game output is DRAW.`
  }
  else if (uselet == 'ROCK') {
    if (cselect == 'PAPER') {
      document.getElementById("gameoutput").innerText =
        `The game WON by Computer.`
    } else {
      document.getElementById("gameoutput").innerText =
        `The game WON by User.`
    }
  }
  else if (uselect == 'SCISSORS') {
    if (cselect == 'ROCK') {
      document.getElementById("gameoutput").innerText =
        `The game WON by Computer.`
    } else {
      document.getElementById("gameoutput").innerText =
        `The game WON by User.`
    }
  }
  else if (uselect == 'PAPER') {
    if (cselect == 'SCISSORS') {
      document.getElementById("gameoutput").innerText =
        `The game WON by Computer.`
    } else {
      document.getElementById("gameoutput").innerText =
        `The game WON by User.`
    }
    uselect = ""; cselect = "";
  }

}




// commented to change it to a function
// userclickedScissors();
// userclickedPaper();
// userclickedRock();
//userclickedblank();
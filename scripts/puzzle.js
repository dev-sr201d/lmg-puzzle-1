function setup() {
  for (var r = 1; r < 6; r++) {
    for (var c = 1; c < 6; c++) {
      var color = "red";
      var sIndex = (r - 1) * 5 + c;
      if (sIndex == 3 || sIndex == 20 || sIndex == 17) {
        continue;
      }
      var cFactor = sIndex % 2;
      if (cFactor == 0) {
        color = "blue";
      }
      var square = document.createElement("div");
      square.className = "ziu-square ziu-" + color + " ziu-row-" + r + " ziu-col-" + c;
      document.body.appendChild(square);
    }
  }
}

function buildSquare(index) {
  var element = document.createElement("div");
  element.className = "ziu-square ziu-piece-" + index;
  element.id = "square" + index;
  document.body.appendChild(element);
  return element;
}

function changePosition(element, top, left) {
  if (!element.moved) {
    element.moved = 0;
  }
  console.log(element.moves);
  element.moved++;

  if (element.moved > 5) {
    alert("GAME OVER => Zu viele Bewegungen!");
    return;
  }

  element.style.top = parseInt(element.offsetTop) + top + "px";
  element.style.left = parseInt(element.offsetLeft) + left + "px";
}

function moveElement(element, top, left, timeout) {
  if (!element.move) {
    element.move = 0;
  }
  console.log(element.move);
  element.move++;

  window.setTimeout(changePosition, timeout * element.move, element, top, left);
}

function moveUp(element) {
  moveElement(element, -50, 0, 500);
}
function moveDown(element) {
  moveElement(element, 50, 0, 500);
}
function moveLeft(element) {
  moveElement(element, 0, -50, 500);
}
function moveRight(element) {
  moveElement(element, 0, 50, 500);
}

function move(element, top, left) {
  if (top > 1) {
    console.error("Ungültige Y-Bewegung. Top kann nicht größer als 1 sein.");
    top = 1;
  }
  if (top < -1) { 
    console.error("Ungültige Y-Bewegung. Top kann nicht kleiner als -1 sein.");
    top = -1;
  }
  if (left > 1) {
    console.error("Ungültige X-Bewegung. Left kann nicht größer als 1 sein.");
    left = 1;
  }
  if (left < -1) { 
    console.error("Ungültige X-Bewegung. Left kann nicht kleiner als -1 sein.");
    left = -1;
  }
  if (top != 0 
    && left != 0) {
    console.error("Ungültige Bewegung. Es kann nur Top oder Left benutzt werden, nicht beides.");
    left = 0;
  }
  moveElement(element, top * 50, left * 50, 500);
}

function isPuzzleComplete() {
  var isSquare1 = false;
  if (square1
      && parseInt(square1.offsetTop) == 300
      && parseInt(square1.offsetLeft) == 400) {
    isSquare1 = true;
  }
  var isSquare2 = false;
  if (square2
      && parseInt(square2.offsetTop) == 450
      && parseInt(square2.offsetLeft) == 500) {
    isSquare2 = true;
  }
  var isSquare3 = false;
  if (square3
      && parseInt(square3.offsetTop) == 450
      && parseInt(square3.offsetLeft) == 350) {
    isSquare3 = true;
  }

  if (isSquare1 && isSquare2 && isSquare3) {
    alert("RICHTIG");
  }
}

function checkWin() {
  window.setTimeout(isPuzzleComplete, 3000);
}

window.addEventListener("DOMContentLoaded", checkWin);
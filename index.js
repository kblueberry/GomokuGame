let isTurnWhite;
const rows = 16;
const cols = 16;
const allCells = 256;
const black = document.getElementsByClassName('black').nodeValue;
const white = document.getElementsByClassName('white').nodeValue;
const divMessage = document.createElement('div');
divMessage.setAttribute('class', 'message');

function renderGamePage() {
  const parent = document.getElementById('game-field');
  const fieldWrapper = document.createElement('div');
  fieldWrapper.setAttribute('id', 'game-field-wrapper');

  const fieldTable = document.createElement('table');
  fieldTable.setAttribute('class', 'game-field-table');

  for (let i = 0; i < rows; i++) {
    const tableRow = document.createElement('tr');
    tableRow.setAttribute('class', 'field-row');
    for (let j = 0; j < cols; j++) {
      const tableCell = document.createElement('td');
      tableRow.appendChild(tableCell);
    }
    fieldTable.appendChild(tableRow);
  }
  fieldWrapper.appendChild(fieldTable);
  parent.appendChild(fieldWrapper);
}

renderGamePage();

function createRoundsOverTheWholeField() {
  const cells = Array.from(document.getElementsByTagName('td'));
  for (let i = 0; i < allCells; i++) {
    const y = Math.floor(i / 16);
    const x = i - y * 16;

    const divCircle = document.createElement('div');
    divCircle.classList.add('circle');
    divCircle.classList.add('circle-empty');
    divCircle.setAttribute('data-x', x);
    divCircle.setAttribute('data-y', y);
    cells[i].appendChild(divCircle);
    divCircle.addEventListener('click', makeTurn);
  }
}

function makeTurn(e) {
  const circleNode = e.target;

  if (isTurnWhite) {
    circleNode.classList.add('circle-white');
  } else {
    circleNode.classList.add('circle-black');
  }

  const x = +circleNode.getAttribute('data-x');
  const y = +circleNode.getAttribute('data-y');
  let startX = Math.max(x - 3, 0);

  if (checkLine({ x: startX, y }, { x: 1, y: 0 })) {
    showWinner();
    return;
  }

  let startY = Math.max(y - 3, 0);
  if (checkLine({ x, y: startY }, { x: 0, y: 1 })) {
    showWinner();
    return;
  }

  startX = Math.max(x - 3, 0);
  startY = Math.max(y - 3, 0);
  if (checkLine({ x: startX, y: startY }, { x: 1, y: 1 })) {
    showWinner();
    return;
  }

  startX = Math.max(x - 3, 0);
  startY = Math.min(y + 3, 15);
  if (checkLine({ x: startX, y: startY }, { x: 1, y: -1 })) {
    showWinner();
    return;
  }

  changePlayers();
  circleNode.classList.remove('circle-empty');
  circleNode.removeEventListener('click', makeTurn);
}

function showWinner() {
  let color = isTurnWhite ? 'White' : 'Black';

  const circles = Array.from(document.getElementsByClassName('circle'));

  circles.forEach(c => {
    c.removeEventListener('click', makeTurn);
    c.classList.remove('circle-empty');
  });

  setTimeout(() => {
    alert(`Player ${color} has won!`);
  }, 200);
}

function changePlayers() {
  isTurnWhite = !isTurnWhite;
  const isBlack = document.getElementById('black');
  const isWhite = document.getElementById('white');
  if (isTurnWhite) {
    isWhite.setAttribute('style', 'text-decoration:underline');
    isBlack.setAttribute('style', '');
  } else {
    isWhite.setAttribute('style', '');
    isBlack.setAttribute('style', 'text-decoration:underline');
  }
}

function checkLine(start, diff) {
  let nodeSequence = [];
  let color = isTurnWhite ? 'circle-white' : 'circle-black';
  const circles = Array.from(document.getElementsByClassName('circle'));
  const tableSize = 16;

  let { x, y } = start;
  for (let i = 0; i <= 6; i++, x += diff.x, y += diff.y) {
    if (x < 0 || x > 15 || y < 0 || y > 15) {
      return false;
    }

    const index = x + tableSize * y;
    if (circles[index].classList.contains(color)) {
      nodeSequence.push(circles[index]);
    } else {
      if (nodeSequence.length >= 4) {
        markCirclesRed(nodeSequence);
        return true;
      } else {
        nodeSequence = [];
      }
    }
  }

  if (nodeSequence.length >= 4) {
    markCirclesRed(nodeSequence);
    return true;
  };

  return false;
}

function markCirclesRed(nodes) {
  nodes.forEach(node => {
    node.classList.remove('circle-white');
    node.classList.remove('circle-black');

    node.classList.add('circle-red');
  });
}

createRoundsOverTheWholeField();

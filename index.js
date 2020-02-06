let isTurnWhite;
const rows = 16;
const cols = 16;
const allCells = 256;
const xCoordinates = 16;
const yCoordinates = 16;

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
    for (let j = 0; j < allCells; j++) {
      const divCircle = document.createElement('div');
      divCircle.classList.add('circle');
      divCircle.classList.add('circle-empty');
      cells[(i, j)].appendChild(divCircle);
      divCircle.addEventListener('click', changeColors);
    }
  }
}

function changeColors(e) {
  if (isTurnWhite) {
    e.target.classList.add('circle-white');
    changePlayers();
  } else {
    e.target.classList.add('circle-black');
    changePlayers();
  }
  isTurnWhite = !isTurnWhite;
  e.target.classList.remove('circle-empty');
  e.target.removeEventListener('click', changeColors);
}

function changePlayers() {
  const isBlack = document.getElementById('black');
  const isWhite = document.getElementById('white');
  if (isTurnWhite) {
    isWhite.setAttribute('style', '');
    isBlack.setAttribute('style', 'text-decoration:underline');
  } else {
    isWhite.setAttribute('style', 'text-decoration:underline');
    isBlack.setAttribute('style', '');
  }
}

function checkLineHorizontallyLeftToRight() {
  for (let i = 0; i < xCoordinates; i++) {
    for (let j = 0; j < yCoordinates; j++) {
      let divCircles = Array.from(document.getElementsByClassName('circle'));
      if (
        divCircles[i][j].classList.contains('circle-white') ||
        (divCircles[i][j].classList.contains('circle-black') &&
          divCircles[i + 1][j].classList.contains('circle-white')) ||
        (divCircles[i + 1][j].classList.contains('circle-black') &&
          divCircles[i + 2][j].classList.contains('circle-white')) ||
        (divCircles[i + 2][j].classList.contains('circle-black') &&
          divCircles[i + 3][j].classList.contains('circle-white')) ||
        divCircles[i + 3][j].classList.contains('circle-black')
      ) {
        alert('You won!');
        removeEventListener('click', changeColors);
      }
    }
  }
}

function showWinnerMessage() {}

createRoundsOverTheWholeField();

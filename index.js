function renderGamePage() {
  const parent = document.getElementById('game-field');
  const fieldWrapper = document.createElement('div');
  fieldWrapper.setAttribute('id', 'game-field-wrapper');

  const fieldTable = document.createElement('table');
  fieldTable.setAttribute('class', 'game-field-table');

  const rows = 16;
  const cols = 16;

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
  const x = 256;
  const y = 256;
  const cells = Array.from(document.getElementsByTagName('td'));
  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= y; j++) {
      const divCircle = document.createElement('div');
      divCircle.classList.add('circle');
      cells[(i, j)].appendChild(divCircle);
    }
  }
}

createRoundsOverTheWholeField();

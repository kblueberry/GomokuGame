function renderGamePage() {
  const parent = document.getElementById('game-field');
  const fieldWrapper = document.createElement('div');
  fieldWrapper.setAttribute('id', 'game-field-wrapper');

  const fieldTable = document.createElement('table');
  fieldTable.setAttribute('class', 'game-field-table');

  const rows = 15;
  const cols = 15;

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

// function createRoundsOverTheWholeField() {
//   for (let row = 0; row <= 15; row++) {
//     const row = document.getElementsByClassName('field-row');
//     const cell = document.getElementsByTagName('td');
//     for (let cell = 0; cell <= 15; cell++) {
//       const div = document.createElement('div');
//       div.setAttribute('class', 'circle');
//       cell.appendChild(div);
//     }
//   }
// }

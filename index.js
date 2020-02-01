function renderGamePage() {
  const parent = document.getElementById('#root');
  const field = document.createElement('div');
  field.setAttribute('id', 'game-field');
  parent.appendChild(field);
  const fieldWrapper = document.createElement('div');
  fieldWrapper.setAttribute('class', 'game-field-wrapper');
  field.appendChild(fieldWrapper);

  const fieldTable = document.createElement('table');
  fieldTable.setAttribute('class', 'game-field-table');
  fieldWrapper.appendChild(fieldTable);

  renderGameField();
}

function renderGameField() {
  for (let row = 0; row <= 15; row++) {
    const row = document.createElement('tr');
    row.setAttribute('class', 'field-row');
    fieldTable.appendChild(row);
    for (let cell = 0; cell <= 15; cell++) {
      const cell = document.createElement('td');
      row.appendChild(cell);
    }
  }

  createRoundsOverTheWholeField();
}

function createRoundsOverTheWholeField() {
  for (let row = 0; row <= 15; row++) {
    const row = document.getElementsByClassName('field-row');
    const cell = document.getElementsByTagName('td');
    for (let cell = 0; cell <= 15; cell++) {
      const div = document.createElement('div');
      div.setAttribute('class', 'circle');
      cell.appendChild(div);
    }
  }
}

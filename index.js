const parent = document.getElementById('#root');
const field = document.createElement('main');
field.setAttribute('id', 'game-field');
parent.appendChild(field);

const fieldWrapper = document.createElement('div');
fieldWrapper.setAttribute('class', 'game-field-wrapper');
field.appendChild(fieldWrapper);

const fieldCellsContainer = document.createElement('div');
fieldCellsContainer.setAttribute('class', 'field-cells-container');
fieldWrapper.appendChild(fieldCellsContainer);
const fieldCells = document.inn;

const createRow = (table: HTMLTableElement) => (cells: Array<string>) => {
  const row = document.createElement('tr');
  cells.forEach((content) => {
    const cell = document.createElement('th');
    cell.innerHTML = content;
    row.appendChild(cell);
  });
  table.appendChild(row);
};

export default createRow;

let tHead = document.createElement('thead');
let tHeadRow = document.createElement('tr');
let tBody = document.createElement('tbody');
let tBodyRow = document.createElement('tr');

function createTable() {
  let table = document.createElement('table');
  document.querySelector('root').appendChild(table);
  document.querySelector('table').classList.add('table', 'table-dark', 'table-hover')
  table.append(tHead, tBody);
  tHead.append(tHeadRow);
  tBody.append(tBodyRow);
}

async function getAndReplaceData() {
  let response = await fetch('https://mocki.io/v1/e9fdd0c6-11a9-496e-8c37-21600eb92632');
  let data = await response.json();

  let keywords = Object.keys(data[0]);


  createTable();    

  keywords.forEach(keyword => {
    let th = document.createElement('th');
    th.textContent = keyword.toUpperCase();
    tHeadRow.appendChild(th);
  });

  data.forEach(user => {
    let tr = document.createElement('tr');
    keywords.forEach(keyword => {
      let td = document.createElement('td');
      td.textContent = user[keyword];
      tr.appendChild(td);
    });
    tBody.appendChild(tr);
  });
}

getAndReplaceData();


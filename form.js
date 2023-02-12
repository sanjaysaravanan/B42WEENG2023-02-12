const formElement = document.getElementById('form');

const table = document.getElementById('table');

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(e);
  let data = {};
  Array.from(e.target.elements).forEach((element) => {
    if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
      data[element.name] = element.value;
    }
  });
  console.log(data);

  const tr = document.createElement('tr');

  const tdEmail = document.createElement('td');
  tdEmail.innerText = data.email;

  const tdDesc = document.createElement('td');
  tdDesc.innerText = data.description;

  tr.append(tdEmail, tdDesc);

  table.appendChild(tr);

  e.target.reset(); // resetting form
})
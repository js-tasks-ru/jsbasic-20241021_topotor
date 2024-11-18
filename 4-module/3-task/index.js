function highlight(table) {
  for (let tr of table.rows) {
    let status = tr.cells[3];
    if (!status.available) tr.setAttribute('hidden', true);
    if (status.dataset.available === 'true') tr.classList.add('available');
    if (status.dataset.available === 'false') tr.classList.add('unavailable');

    let gender = tr.cells[2];
    if(gender.textContent === 'm') tr.classList.add('male');
    if(gender.textContent === 'f') tr.classList.add('female');

    let age = tr.cells[1];
    if(age.textContent < 18) tr.style.textDecoration = "line-through";
}
return (table);
}


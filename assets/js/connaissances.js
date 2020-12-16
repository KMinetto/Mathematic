/** Imports **/

import {getRandomInt} from "./functions";

/** Récupération des Tags HTML **/

const select = document.getElementById('tableSelector');
const formSelect = document.getElementById('selector');
const tableDiv = document.getElementById('tableDiv');
const calculInputs = document.getElementsByClassName('calculInputs');

/** Algorithme **/

/** Connaissances.html **/

for (let i = 1; i <= 10; i++) {
    const value = i;
    const label = `Table de ${i}`;

    select.insertAdjacentHTML('beforeend',
        `<option value="${value}">${label}</option>`
    );
}

formSelect.addEventListener('submit', (e) => {
    e.preventDefault();

    tableDiv.style.display = 'block';

    const formData = new FormData(formSelect);

    fetch('assets/php/connaissances.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.tableSelector);
            // calculInputs.item(0).innerHTML = data.tableSelector;
        })
});
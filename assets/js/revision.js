/** Import **/

import { addOperation } from "./functions.js";

/** Récupération des Tags HTML **/

const select = document.querySelector('#selectTable');
const btn = document.querySelector('#revisionBtn');
const form = document.querySelector('#revision');
const tbody = document.querySelector('tbody');

/** Algorithme **/

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch('assets/php/revision.php', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            tbody.innerHTML = "";
            for (let tableRow in data) {
                console.log(data[tableRow]);
                tbody.appendChild(addOperation(data[tableRow]['operation'], data[tableRow]['result']));
            }
        })
        .catch(err => console.error(err));
});

/** revision.html **/
for (let i = 1; i <= 10; i++) {
    const value = i;
    const label = `table de ${i}`;

    select.insertAdjacentHTML('beforeend',
        `<option value="${value}">${label}</option>`
    );
}


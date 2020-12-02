/** Import **/

import { addOperation, createHead } from "./functions.js";

/** Récupération des Tags HTML **/

const checkDiv = document.querySelector('#tablesCheck');
const form = document.querySelector('#tableForm');
const tableDiv = document.querySelector('#tableDiv');

/** Algorithme **/

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(form);

    fetch('assets/php/table.php', {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                return response.json().then(data => {
                    console.log(data)
                    tableDiv.innerHTML = "";
                    for (let tables in data) {
                        const table = document.createElement('table');
                        const tbody = document.createElement('tbody');
                        table.setAttribute("class", "table mb-5");
                        table.appendChild(createHead("Opérations", "Résultats"));
                        for (let i = 1; i <= 10; i++) {
                            tbody.appendChild(addOperation(data[tables][i]['operation'], data[tables][i]['result']));
                            table.appendChild(tbody);
                            tableDiv.appendChild(table);
                        }
                    }
                });
            }
        })
        .catch(error => console.error(error));
});

/** table.html **/
for (let i = 1; i <= 10; i++) {
    const value = i;
    const label = `Table de ${i}`;

    checkDiv.insertAdjacentHTML('beforeend',
        `<label class="form-check-label mr-2" >${label}</label>`
    );
    checkDiv.insertAdjacentHTML('beforeend',
        `<input class="form-check-input" name="check[]" type="checkbox" value="${value}">`
    );
}





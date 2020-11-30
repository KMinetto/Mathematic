/** Import **/

import { addOperation } from "./functions.js";

/** Récupération des Tags HTML **/

const checkDiv = document.querySelector('#tablesCheck');
const btn = document.querySelector('#revisionBtn');
const form = document.querySelector('#revision');
const tbody = document.querySelector('tbody');

/** Algorithme **/

/** revision.html **/
for (let i = 1; i <= 10; i++) {
    const value = i;
    const label = `table de ${i}`;

    checkDiv.insertAdjacentHTML('beforeend',
        `<label class="form-check-label mr-2" >${label}</label>`
    );
    checkDiv.insertAdjacentHTML('beforeend',
        `<input class="form-check-input" name="check[]" type="checkbox" value="${value}">`
    );
}





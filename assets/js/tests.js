/** Import **/

import {addOperation, createHead, getRandomInt} from "./functions.js";

/** Récupération des Tags HTML **/

const tbody = document.querySelector('tbody');
const tableDiv = document.getElementById('tableDiv');

const form = document.createElement('form');
const formButton = document.querySelector('#testBtn');

/** Algorithme **/



/** tests.html **/
for (let i = 1; i <= 5; i++) {
    let randInt1 = getRandomInt();
    let randInt2 = getRandomInt();
    const ope = `${ randInt1 } x ${ randInt2 }`;
    const result = randInt1 * randInt2;

    tbody.insertAdjacentHTML("afterbegin", `<tr><td class="text-white d-flex justify-content-center align-items-center">` + ope  +
        `</td><td class="text-center text-white">
<form class="d-flex justify-content-center"><div class="form-group col-12 col-md-6">
<input type="number" class="form-control" name="answer[]" placeholder="56" />
<input type="hidden" name="trueAnswer[]" value="${result}"></div></form></td></tr>`);
}





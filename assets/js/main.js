/** Imports **/

import  { getRandomInt, addHtmlTagInHtml } from "./functions.js";

/** Récupération des tags **/

const tbody = document.querySelector('tbody');

/** Variables **/

let min = 1;
let max = 10;

const n = getRandomInt();

/** index.html **/
for (let i = min; i <= max; i++) {
    tbody.appendChild(addHtmlTagInHtml(i, n));
}

/** Import **/

import {addOperation, createHead, getRandomInt} from "./functions.js";

/** Récupération des Tags HTML **/

let calcul1 = document.getElementById('calcul1');
let calcul2 = document.getElementById('calcul2');
let calcul3 = document.getElementById('calcul3');
let calcul4 = document.getElementById('calcul4');
let calcul5 = document.getElementById('calcul5');

let hidden1 = document.getElementById('hidden1');
let hidden2 = document.getElementById('hidden2');
let hidden3 = document.getElementById('hidden3');
let hidden4 = document.getElementById('hidden4');
let hidden5 = document.getElementById('hidden5');


const form = document.getElementById('form');

/** Algorithme **/

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//
//     const formData = new FormData(form)
//
//     fetch('assets/php/tests.php', {
//         method: 'POST',
//         body: formData,
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//
//         })
//         .catch(err => console.log(err));
// });

/** tests.html **/

const arrayCalc = [];
let random1;
let random2;
for (let i = 1; i <= 5; i++) {
    random1 = getRandomInt();
    random2 = getRandomInt();
    const result = random1 * random2;
    arrayCalc.push(`${random1} x ${random2}`, result);
    console.log(arrayCalc)
}
 calcul1.innerHTML = arrayCalc[0];
 calcul2.innerHTML = arrayCalc[2];
 calcul3.innerHTML = arrayCalc[4];
 calcul4.innerHTML = arrayCalc[6];
 calcul5.innerHTML = arrayCalc[8];

 hidden1.value = arrayCalc[1];
 hidden2.value = arrayCalc[3];
 hidden3.value = arrayCalc[5];
 hidden4.value = arrayCalc[7];
 hidden5.value = arrayCalc[9];






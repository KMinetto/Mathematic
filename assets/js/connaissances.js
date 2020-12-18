/** Imports **/

import { getRandomInt, tableTestBody, tableTestHead } from "./functions.js";

/** Récupération des Tags HTML **/

const select = document.getElementById('tableSelector');
const formSelect = document.getElementById('selector');
const tableDiv = document.getElementById('tableDiv1');

const table = document.getElementById('testTable')
const forms = document.getElementsByClassName('forms');

const responseTable = document.getElementById('responseTest');

const calcul1 = document.getElementById('calcul1');
const calcul2 = document.getElementById('calcul2');
const calcul3 = document.getElementById('calcul3');
const calcul4 = document.getElementById('calcul4');
const calcul5 = document.getElementById('calcul5');

const hidden1 = document.getElementById('hidden1');
const hidden2 = document.getElementById('hidden2');
const hidden3 = document.getElementById('hidden3');
const hidden4 = document.getElementById('hidden4');
const hidden5 = document.getElementById('hidden5');

/** Algorithme **/

const arrayCalc = [];
const arrayHidden = [];
formSelect.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(formSelect)
    tableDiv.style.display = 'block';

    fetch('assets/php/connaissances.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let random1;
            let valueSelect;
            for (let i = 1; i <= 5; i++) {
                random1 = getRandomInt();
                valueSelect = data.tableSelector;
                const result = random1 * valueSelect;
                arrayCalc.push(`${random1} x ${valueSelect}`);
                arrayHidden.push(result);
            }
            calcul1.innerHTML = arrayCalc[0];
            calcul2.innerHTML = arrayCalc[1];
            calcul3.innerHTML = arrayCalc[2];
            calcul4.innerHTML = arrayCalc[3];
            calcul5.innerHTML = arrayCalc[4];

            hidden1.value = arrayHidden[0];
            hidden2.value = arrayHidden[1];
            hidden3.value = arrayHidden[2];
            hidden4.value = arrayHidden[3];
            hidden5.value = arrayHidden[4];
        })
});

for (let i = 0; i < forms.length; i++) {
    forms.item(i).addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(forms.item(i));

        fetch('assets/php/responseConnaissances.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                let result
                let verify;
                for (const response in forms) {
                    result = data.response;
                }
                if (data.response !== data.calcul) {
                    verify = "C'est faux";
                } else {
                    verify = "C'est correct";
                }
                responseTable.appendChild(tableTestHead("Votre réponse", "Résultat", "Réponse"));
                responseTable.appendChild(tableTestBody(data.response, verify, data.calcul));
            })
    })
}

/** Connaissances.html **/

let value;
for (let i = 1; i <= 10; i++) {
    value = i;
    const label = `Table de ${i}`;

    select.insertAdjacentHTML('beforeend',
        `<option value="${value}">${label}</option>`
    );
}
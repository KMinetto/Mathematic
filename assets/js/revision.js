/** Récupération des Tags HTML **/

const select = document.querySelector('#selectTable');
const btn = document.querySelector('#revisionBtn');
const form = document.querySelector('#revision');

/** Algorithme **/

/** revision.html **/
for (let i = 1; i <= 10; i++) {
    const value = i;
    const label = `table de ${ i }`;

    select.insertAdjacentHTML('beforeend',
        `<option name="selectOption" value="${ value }">${ label }</option>`
    );
}
//
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//
//     const formData = new FormData(form);
//
//     fetch('assets/php/revision.php', {
//         method: 'POST',
//         body: formData,
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         })
//         .catch(err => console.error(err));
// });
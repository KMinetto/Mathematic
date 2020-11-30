

export function getRandomInt() {
    let n = Math.floor(Math.random() * (10 + 1));
    console.log(n);
    if (n === 0) {
        return 1;
    } else {
        return n;
    }
}

export function addHtmlTagInHtml(i, n) {

    /** Création des éléments **/
    const newTr = document.createElement('tr');
    let newTd1 = document.createElement("td");
    let newTd2 = document.createElement("td");

    /** Ajout des attributs sur les éléments créés **/
    newTd1.setAttribute('class', 'text-center text-white');
    newTd2.setAttribute('class', 'text-center text-white');

    /** Ajout des textes dans les éléments **/
    newTd1.innerHTML = i + ' x ' + n;
    newTd2.innerHTML = n * i;

    /** Ajout des éléments dans le HTML **/
    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);

    return newTr
}

export function addOperation(operation, result) {

    /** Création des éléments **/
    const newTr = document.createElement('tr');
    let newTd1 = document.createElement("td");
    let newTd2 = document.createElement("td");

    /** Ajout des attributs sur les éléments créés **/
    newTd1.setAttribute('class', 'text-center text-white');
    newTd2.setAttribute('class', 'text-center text-white');

    /** Ajout des textes dans les éléments **/
    newTd1.innerHTML = operation;
    newTd2.innerHTML = result;

    /** Ajout des éléments dans le HTML **/
    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);

    return newTr
}
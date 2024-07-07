//Exercise 1
let title = document.getElementById('title');

//Exercise 2
let tittlePrincipal = title.innerHTML = 'Fruits';

//Exercise 3
let headerAndFooter = document.querySelectorAll('.headerAndFooter');
for (let element of headerAndFooter) {
    element.classList.add('bg-orange-500');
}
//Exercise 4
let pFooter = document.querySelector('footer p');
pFooter.innerHTML += ' - Cohort 55 - Luz Romina Mieres';

//Exercise 5
let divCard = document.getElementById('contenedor');

//Exercise 6
function cardStructure(nombre, foto, descripcion) {
    let card = `<div class=" flex flex-col justify-center items-center w-56 h-80 shadow-2xl border-solid border-2 border-black rounded-2xl">
    <h4 class="font-bold pb-1">${nombre}</h4>
    <img class="h-56 w-56 object-contain" src="${foto}" alt="image ${nombre}">
    <p class="p-3 text-xs">${descripcion}</p>
    </div>`;                              
    return card;                                
}

//Exercise 7
function printCard(listFruits) {
    let cards = "";
    for (const fruit of listFruits) {
     cards += cardStructure(fruit.nombre, fruit.foto, fruit.descripcion);
    }
    return cards;
 }
printCard(fruits);
 
 //Ejercise 8
 divCard.innerHTML = printCard(fruits);

//Exercise 9, 10 y 11
function createList(nombre){
    let divList = document.getElementById('list');
    let ul = document.createElement('ul');
    divList.appendChild(ul);
    let li = document.createElement('li');
    li.innerText = `${nombre}`;
    ul.appendChild(li);
    return li;
}

let sweetFruitsFilter = fruits.filter(fruit => (fruit.esDulce == true));

function createLi(arrayFruits) {
    let li = [];
    for (const fruit of arrayFruits) {
        li += createList(fruit.nombre);
    }
    return li;
}
createLi(sweetFruitsFilter);
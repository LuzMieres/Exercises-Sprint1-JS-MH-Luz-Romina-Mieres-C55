//Exercise 1
//1. Capturar el H1, mediante un ID, en una variable llamada "titulo". 
let title = document.getElementById('title');

//Exercise 2
//2. Crean una variable "tituloPrincipal" cuyo valor sea "Frutas"
// y cambiar el contenido del título por el de esta variable.
let tittlePrincipal = title.innerHTML = 'Fruits';

//Exercise 3
//3. Capturar el header y el footer, mediante la misma clase, y cambiarles el color a naranja. 
let headerAndFooter = document.querySelectorAll('.headerAndFooter');
for (let element of headerAndFooter) {
    element.classList.add('bg-orange-500');
}
//Exercise 4
//4. Capturar y modificar el p del footer, agregarle tu nombre completo y cohort. 
let pFooter = document.querySelector('footer p');
pFooter.innerHTML += ' - Cohort 55 - Luz Romina Mieres';

//Exercise 5
//5. Crear un div dentro del main y agregarle el id "contenedor". Capturar ese div por medio de su id.
let divCard = document.getElementById('contenedor');

//Exercise 6
//6. Crear una función que devuelva la estructura de una card. La función debe devolver un string para más adelante utilizar innerHTML. 
//(La card debe contener los siguientes datos: nombre, foto y descripción). 
function cardStructure(nombre, foto, descripcion) {
    let card = `<div class=" flex flex-col justify-center items-center w-56 h-80 shadow-2xl border-solid border-2 border-black rounded-2xl">
    <h4 class="font-bold pb-1">${nombre}</h4>
    <img class="h-56 w-56 object-contain" src="${foto}" alt="image ${nombre}">
    <p class="p-3 text-xs">${descripcion}</p>
    </div>`;                              
    return card;                                
}

//Exercise 7
//7. Con el archivo data que se encuentra en la carpeta, realizar un bucle para crear cards con los datos de las frutas,
// utilizando la función del punto 6. (Este bucle podría meterse en otra función y recibir el array por parámetro).

function printCard(listFruits) {
    let cards = "";
    for (const fruit of listFruits) {
     cards += cardStructure(fruit.nombre, fruit.foto, fruit.descripcion);
    }
    return cards;
 }
printCard(fruits);
 
 //Ejercise 8
 //8. Mostrar las cards con los datos pedidos en el div "#contenedor". 
 divCard.innerHTML = printCard(fruits);

//Exercise 9, 10 y 11
//9. Crear otro div dentro del main, agregarle el id "lista" y capturarlo mediante ese id. Agregar al div el título "Frutas Dulces".
//10. Crear una función que reciba un array y devuelva una lista desordenada utilizando nodos (createElement). 
//Cada elemento de la lista será el nombre de una fruta. Para esta lista usar las frutas cuya propiedad "esDulce" sea true. 
//11. Mostrar la lista de frutas dulces en el div "#lista". 
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
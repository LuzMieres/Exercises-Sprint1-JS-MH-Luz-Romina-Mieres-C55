//Exercise 1
//1. Convierta la siguiente función nombrada en una función de flecha :

// función printMessage( mensaje ) {

//     console.log( mensaje )

// }
let printMessage = (messaje) => {
  console.log(messaje);
};
printMessage("Hello World");

//Exercise 2
//2. Convierta la siguiente función nombrada en una función de flecha :

//   función createMultplication (número1, número2) {

//     sea ​​resultado = numero1 * numero2

//     devolver resultado

// }
let createMultplication = (number1, number2) => number1 * number2;
console.log(createMultplication(20, 10));

//Exercise 3
//3. Partiendo de un array: const array = [ 1,2,3,4,5,6,7,8,9 ], aplicar un mapa a ese array y pasar como argumento la función nombrada 
//mostrada en el ejercicio anterior. Mostrar por consola el nuevo array obtenido.
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numbersMultiply = arrayNumbers.map(
  (number) => number * createMultplication(20, 10)
);
console.log(numbersMultiply);

//Exercise 4
//4. Generar una función que reciba un array de cervezas como parámetro y devuelva un nuevo array con las 10 cervezas con mayor 
//contenido de alcohol.
let beersAbv = (arrayBeers) => {
  let higherAlcoholicLevel = arrayBeers.toSorted((a, b) => b.abv - a.abv);
  return higherAlcoholicLevel.slice(0, 10);
};
console.log(beersAbv(beers));

//Exercise 5
//5. Generar una función que reciba un array de cervezas como parámetro y devuelva un nuevo array con las 10 cervezas menos amargas.
let beersIbu = (arrayBeers) => {
  let higherDegreeOfBitterness = arrayBeers.toSorted((a, b) => a.ibu - b.ibu);
  return higherDegreeOfBitterness.slice(0, 10);
};
console.log(beersIbu(beers));

//Exercise 6
//6. Generar una función que reciba como parámetros un array de cervezas y el nombre de una cerveza.La función debe devolver el objeto
// completo que coincida con el nombre ingresado.
let beersName = (arrayBeers, name) => {
  let objectBeer = arrayBeers.find((beer) => beer.name === name);
  return objectBeer;
};
console.log(beersName(beers, "Avery Brown Dredge"));

//Exercise 7
//7. Generar una función que reciba como parámetro un array de cervezas, un valor y que retorne el primer objeto cuya propiedad ibu sea 
//igual al valor ingresado, en caso de que no exista una cerveza con ese ibu que muestre un mensaje en la consola que diga 
//“No existe ninguna cerveza con un ibu de (valor ingresado)”.
let compareIbu = (arrayBeers, valueIbu) => {
  let beerWithIbuTheSame = arrayBeers.find((beer) => beer.ibu == valueIbu);
  if (beerWithIbuTheSame) {
    console.log(`Beer with the same ibu value is ${beerWithIbuTheSame.name} `);
  } else {
    console.log(
      `There is no beer with the ibu value of ${valueIbu} in the beer array.`
    );
  }
  return beerWithIbuTheSame;
};
compareIbu(beers, 80);

//Exercise 8
//8. Generar una función que reciba como parámetro el nombre de una cerveza y devuelva la posición en el array de dicha cerveza. 
//Si no se encuentra la cerveza se debe imprimir un mensaje por consola que diga “(Nombre de la cerveza ingresada) no existe”.
let beerByIndex = (arrayBeers, name) => {
  let beerIndex = arrayBeers.findIndex((beer) => beer.name == name);
  if (beerIndex !== -1) {
    console.log(`The position of the beer ${name} is ${beerIndex}`);
  } else {
    console.log(`The beer ${name} is not in the array`);
  }
  return beerIndex;
};
console.log(beers);
beerByIndex(beers, 'Buzz');

//Exercise 9
//9. Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol. La función debe devolver un nuevo array
// con las cervezas que no superan el nivel de alcohol. Cada elemento del nuevo array debe ser un objeto que tenga las
// propiedades nombre, alcohol (abv) y "amargura" (ibu).
let filterWithAlcohol = (arrayBeer, valueAbv) => {
    let filteredBeers = arrayBeer.filter((beer) => beer.abv <= valueAbv);
    if (filteredBeers.length > 0) {
      // Ordena por abv de forma ascendente como ejemplo
      return filteredBeers.map((beer) => ({
        name: beer.name,
        abv: beer.abv,
        ibu: beer.ibu,
      })).toSorted((a, b) => a.abv - b.abv);
    } else {
      return `There is no beer with an Abv value less than or equal to ${valueAbv}`;
    }
  };
  console.log(filterWithAlcohol(beers, 10));

//Exercise 10
//10. Generar una función que reciba como parámetros un array de cervezas, un nombre de propiedad y un valor booleano. Deberá devolver
// un nuevo array con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento, en orden ascendente si la tercera 
//es verdadera o descendente si es falsa.
let beersOrdered = (arrayBeers, property, boolean) => {
  let ordered = arrayBeers
    .filter((beer) => beer[property])
    .toSorted((a, b) => {
      if (a[property] < b[property]) {
        return -1;
      } else if (a[property] > b[property]) {
        return 1;
      }
      return 0;
    });
  if (boolean) {
    return ordered.slice(0, 10);
  }
  return ordered.reverse().slice(0, 10);
};
console.log(beersOrdered(beers, "abv", true));
console.log(beersOrdered(beers, "abv", false));

//Exercise 11
//11. Generar una función que reciba como parámetro un array de cervezas y un id de un elemento HTML donde se imprimirá la tabla. La 
//función debe renderizar (renderizar, dibujar, pintar, rellenar, etc.) en un archivo html una tabla que contenga las columnas “Nombre”, 
//“ABV”, “IBU”, y una fila por cada elemento del array. Cada fila debe tener los datos solicitados para cada una de las cervezas.
let tableBody = document.getElementById("tableBody");

let createRows = (beers) => {
  let tr = document.createElement("tr");
  let tdName = document.createElement("td");
  let tdIbu = document.createElement("td");
  let tdAbv = document.createElement("td");

  tdName.textContent = beers.name;
  tdName.classList.add("miClass");
  tdIbu.textContent = beers.ibu;
  tdIbu.classList.add("miClass");
  tdAbv.textContent = beers.abv;
  tdAbv.classList.add("miClass");

  tr.append(tdName, tdIbu, tdAbv);
  return tr;
};
let completeTable = (arrayBeers, contenedor) => {
  for (const beer of arrayBeers) {
    let tr = createRows(beer);
    contenedor.appendChild(tr);
  }
};
completeTable(beers, tableBody);

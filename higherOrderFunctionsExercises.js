//Exercise 1
let printMessage = (messaje) => {
    console.log(messaje);
  };
  printMessage("Hello World");
  
  //Exercise 2
  let createMultplication = (number1, number2) => number1 * number2;
  console.log(createMultplication(20, 10));
  
  //Exercise 3
  const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let numbersMultiply = arrayNumbers.map(
    (number) => number * createMultplication(20, 10)
  );
  console.log(numbersMultiply);
  
  //Exercise 4
  let beersAbv = (arrayBeers) => {
    let higherAlcoholicLevel = arrayBeers.toSorted((a, b) => b.abv - a.abv);
    return higherAlcoholicLevel.slice(0, 10);
  };
  console.log(beersAbv(beers));
  
  //Exercise 5
  let beersIbu = (arrayBeers) => {
    let higherDegreeOfBitterness = arrayBeers.toSorted((a, b) => b.ibu - a.ibu);
    return higherDegreeOfBitterness.slice(0, 10);
  };
  console.log(beersIbu(beers));
  
  //Exercise 6
  let beersName = (arrayBeers, name) => {
    let objectBeer = arrayBeers.find((beer) => beer.name == name);
    return objectBeer;
  };
  console.log(beersName(beers, "Avery Brown Dredge"));
  
  //Exercise 7
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
  compareIbu(beers, 60);
  
  //Exercise 8
  let beerByIndex = (arrayBeers, name) => {
    let beerIndex = arrayBeers.findIndex((beer) => beer.name === name);
    if (beerIndex !== -1) {
      console.log(`The position of the beer ${name} is ${beerIndex}`);
    } else {
      console.log(`The beer ${name} is not in the array`);
    }
    return beerIndex;
  };
  console.log(beers);
  beerByIndex(beers, "pepito");
  
  //Exercise 9
  let filterWithAlcohol = (arrayBeer, valueAbv) => {
      let filteredBeers = arrayBeer.filter((beer) => beer.abv <= valueAbv);
      if (filteredBeers.length > 0) {
        return filteredBeers.map((beer) => ({
          name: beer.name,
          abv: beer.abv,
          ibu: beer.ibu,
        }));
      } else {
        return `There is no beer with an Abv value less than or equal to ${valueAbv}`;
      }
  };
  console.log(filterWithAlcohol(beers, 3));
  
  //Exercise 10
  let beersOrdered = (arrayBeers, property, boolean) => {
    let ordered = arrayBeers
      .filter((beer) => beer[property])
      .toSorted((a, b) => {
        if (a[property] < b[property]) {
          return -1;
        }
        else if (a[property] > b[property]) {
          return 1;
        }
        return 0;
      });
    if (boolean) {
      return ordered.slice(0, 10);
    }
    return ordered.reverse().slice(0, 10);
  }
  console.log(beersOrdered(beers, "abv", true));
  console.log(beersOrdered(beers, "abv", false));
  
  //Exercise 11
  const tableBody = document.getElementById("tableBody");
  
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
  }
  let completeTable = (arrayBeers, contenedor) => {
    for (const beer of arrayBeers) {
      let tr = createRows(beer);
      contenedor.appendChild(tr);
    }
  }
  completeTable(beers, tableBody);
  
//Variables
// const apiKey = "Vsn/suc5VIeT+CF4MGJtlA==Jo3z5DiNaWaU6u2H";
//Need to figure out how to get it where people can search for any animal
// const animal = "";
// const searchInput = "";
// const animalsList = [];
// const searchButton = $("#.searchButton");

//Function that allows the user to search for a specific animal
// async function searchAnimals() {
//Need to rename searchInput with HTML element
// document.getElementById("searchInput").value;
// const apiKey = `https://api-ninjas.com/api/animals?search=${searchInput}`;

// fetch(apiKey)
//   .then((response) => response.json())
//   .then((data) => {
//     const animalsList = document.getElementById("animalsList");
//     animalsList.innerHTML = "";

//     data.forEach((animal) => {
//       const animalElement = document.createElement("div");
//       animalElement.innerHTML = `<h2>${animal.name}</h2><img src="${animal.image}" alt="${animal.name}">`;
//       animalsList.appendChild(animalElement);
//     });
//   });
// }

// const url = 'https://animals-by-api-ninjas.p.rapidapi.com/v1/animals?name=cheetah';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '43e968232emsh327e4df849cd7f3p1f85dajsn3ad7209370f7',
// 		'X-RapidAPI-Host': 'animals-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

//Event Listener [Do I want to put this in the above function]
// const searchButton = document.querySelector(".search-button button");
// searchButton.addEventListener("click", searchAnimals);

//Event listener for user search input
const searchButton = document.querySelector(".search-button button");
searchButton.addEventListener("click", searchAnimal);

//User input that will call the API to return
//information about a particualar animal that the user inputs
async function searchAnimal() {
  const input = document.querySelector(".searchbox input");
  const animalName = input.value;
  const url = `https://animals-by-api-ninjas.p.rapidapi.com/v1/animals?name=${animalName}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "43e968232emsh327e4df849cd7f3p1f85dajsn3ad7209370f7",
      "X-RapidAPI-Host": "animals-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    displayAnimal(result[0]);
  } catch (error) {
    console.error(error);
  }
}


//Function that allows the animal information
//to be rendered on the application
function displayAnimal(animal) {
  const name = document.querySelector(".title");
  const scientificName = document.querySelector(".subtitle");
  const image = document.querySelector("img");
  const information = document.querySelector(".information");

  name.textContent = animal.name;
  scientificName.textContent = animal.scientific_name;
  image.src = animal.image;
  information.textContent = animal.description;
}

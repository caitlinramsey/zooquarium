//Variables
const apiKey = "Vsn/suc5VIeT+CF4MGJtlA==Jo3z5DiNaWaU6u2H";
//Need to figure out how to get it where people can search for any animal
const animal = "";
const searchInput = "";
const animalsList = [];
const searchButton = $("#searchButton");

//Function that allows the user to search for a specific animal
function searchAnimals() {
  //Need to rename searchInput with HTML element
  const searchInput = document.getElementById("searchButton").value;
  const apiKey = `https://api-ninjas.com/api/animals?search=${searchInput}`;

  fetch(apiKey)
    .then((response) => response.json())
    .then((data) => {
      const animalsList = document.getElementById("animalsList");
      animalsList.innerHTML = "";

      data.forEach((animal) => {
        const animalElement = document.createElement("div");
        animalElement.innerHTML = `<h2>${animal.name}</h2><img src="${animal.image}" alt="${animal.name}">`;
        animalsList.appendChild(animalElement);
      });
    });
}

//Event Listener
const searchButton = document.querySelector(".search-button button");
searchButton.addEventListener("click", searchAnimals);

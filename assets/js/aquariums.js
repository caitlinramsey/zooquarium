//Variables
const apiKey = "";
const aquaAnimal = "";
const searchInput = "";
const animalList = [];

//Function that allows the user to search for a specific animal
function searchAnimals() {
  const searchInput = document.getElementById("searchInput").value;
  const apiUrl = `https://api-ninjas.com/api/animals?search=${searchInput}`;

  fetch(apiUrl)
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

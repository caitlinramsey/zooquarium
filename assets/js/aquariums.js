//Variables
const apiKey = "Vsn/suc5VIeT+CF4MGJtlA==Jo3z5DiNaWaU6u2H";
const animal = "";
const searchInput = "";
const animalsList = [];

//Function that allows the user to search for a specific animal
function searchAnimals() {
  const searchInput = document.getElementById("searchInput").value;
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

//Variables
// const apiKey = "Vsn/suc5VIeT+CF4MGJtlA==Jo3z5DiNaWaU6u2H";
// const animal = "";
// const searchInput = "";
// const animalsList = [];
// const searchButton = $("#.searchButton");

//Function that allows the user to search for a specific animal
async function searchAnimals() {
  var searchInput = document.querySelector(".input").value;
  const apiUrl = `https://animals-by-api-ninjas.p.rapidapi.com/v1/animals?name=${searchInput}`;
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      "X-RapidAPI-Key": "43e968232emsh327e4df849cd7f3p1f85dajsn3ad7209370f7",
      // "X-RapidAPI-Host": "animals-by-api-ninjas.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };

  // const apiUrl = `https://api.api-ninjas.com/v1/animals?name=${searchInput}`;

  // const options = {
  //   method: "GET",
  //   mode: "cors",
  //   headers: {
  //     "X-Api-Key": apiKey,
  //   },
  // };

  fetch(apiUrl, options)
    .then((response) => response.json())
    .then((data) => {
      const animal = data[0];
      const animalNameElement = document.querySelector(".title");
      animalNameElement.innerHTML = animal.name;
      const scientificNameElement = document.querySelector(".subtitle");
      scientificNameElement.innerHTML = animal.taxonomy.scientific_name;
      const informationElement = document.querySelector(".information");
      informationElement.innerHTML = "";

      var characteristicElement = document.createElement("div");
      characteristicElement.innerHTML = `Biggest Threat: ${animal.characteristics.biggest_threat}`;
      informationElement.appendChild(characteristicElement);

      characteristicElement = document.createElement("div");
      characteristicElement.innerHTML = `Color: ${animal.characteristics.color}`;
      informationElement.appendChild(characteristicElement);

      //

      animal.characteristics.common_name;
      animal.characteristics.diet;
      animal.characteristics.estimated_population_size;
      animal.characteristics.gestation_perio;
      animal.characteristics.group_behavior;
      animal.characteristics.length;
      animal.characteristics.lifespan;
      animal.characteristics.most_distinctive_feature;
      animal.characteristics.number_of_species;
      animal.characteristics.prey;
      animal.characteristics.top_speed;
      animal.characteristics.weight;
    });
}

//Event Listener [Do I want to put this in the above function]
const searchButton = document.querySelector(".search-button button");
searchButton.addEventListener("click", searchAnimals);

// Event listener for user search input
// const searchButton = document.querySelector(".search-button button");
// searchButton.addEventListener("click", searchAnimal);

// User input that will call the API to return
// information about a particualar animal that the user inputs
// async function searchAnimal() {
//   const input = document.querySelector(".searchbox input");
//   const animalName = input.value;
//   const url = `https://animals-by-api-ninjas.p.rapidapi.com/v1/animals?name=${animalName}`;
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "43e968232emsh327e4df849cd7f3p1f85dajsn3ad7209370f7",
//       "X-RapidAPI-Host": "animals-by-api-ninjas.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     displayAnimal(result[0]);
//   } catch (error) {
//     console.error(error);
//   }
// }

// Function that allows the animal information
// to be rendered on the application
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

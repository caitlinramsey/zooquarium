//Function that allows the user to search for a specific animal
async function searchAnimals() {
  var searchInput = document.querySelector(".input").value;
  const apiUrl = `https://animals-by-api-ninjas.p.rapidapi.com/v1/animals?name=${searchInput}`;
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      "X-RapidAPI-Key": "43e968232emsh327e4df849cd7f3p1f85dajsn3ad7209370f7",
      "Content-Type": "application/json",
    },
  };

  //Fetch that renders the searched animals information
  //based on the callback recieved from above API.
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

      //ADD THE REST OF THESE TO ABOVE CODE
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

      var locationElement = document.createElement("div");
      locationElement.innerHTML = `Locations: ${animal.locations.join(", ")}`;
      informationElement.appendChild(locationElement);
    });
}

//Event Listener
const searchButton = document.querySelector(".search-button button");
searchButton.addEventListener("click", searchAnimals);

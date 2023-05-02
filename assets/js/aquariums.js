//Function that allows the user to search for a specific animal
const apiKey = "35962769-99a3782536c333badafa928a5";

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

  /*
function fetchimg () {
   return fetch(
    "https://pixabay.com/api?key=" +
      apiKey +
      "&q=" +
      encodeURIComponent(searchInput)
  )
    .then((res) => res.json())
    .then((data) => {
      return data.hits;
    });
}

function fetchData() {
  ...
}

Promise.all ([fetchImg fetchData])
.then(function(responses){
  const images = responses[0]
  const data = resonses[1]
})



 const getImages = () => {
    return fetch(
      "https://pixabay.com/api?key=" +
        apiKey +
        "&q=" +
        encodeURIComponent(searchInput)
    )
      .then((res) => res.json())
      .then((data) => data.hits);
  };

  //Fetch that renders the searched animals information
  //based on the callback recieved from above API.

  const getAnimalData = () => {
    return fetch(apiUrl, options)
    .then((response) => response.json())
    .then((data) => data)
}

  Promise.all([getImages(), getAnimalData()])
    .then(([images, data]) => {
      const image = images[0];
      const animal = data[0];
      // Do whatever you need to do for rendering 
      // Just like you had before
  })
  */
  fetch(
    "https://pixabay.com/api?key=" +
      apiKey +
      "&q=" +
      encodeURIComponent(searchInput)
  )
    .then((res) => res.json())
    .then((data) => console.log(">>> data >>>", data));

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
      characteristicElement.innerHTML = `Kingdom: ${animal.taxonomy.kingdom}`;
      informationElement.appendChild(characteristicElement);

      characteristicElement = document.createElement("div");
      characteristicElement.innerHTML = `Diet: ${animal.characteristics.diet}`;
      informationElement.appendChild(characteristicElement);

      characteristicElement = document.createElement("div");
      characteristicElement.innerHTML = `Prey: ${animal.characteristics.prey}`;
      informationElement.appendChild(characteristicElement);

      characteristicElement = document.createElement("div");
      characteristicElement.innerHTML = `Weight: ${animal.characteristics.weight}`;
      informationElement.appendChild(characteristicElement);

      characteristicElement = document.createElement("div");
      characteristicElement.innerHTML = `Length: ${animal.characteristics.length}`;
      informationElement.appendChild(characteristicElement);

      characteristicElement = document.createElement("div");
      characteristicElement.innerHTML = `Lifespan: ${animal.characteristics.lifespan}`;
      informationElement.appendChild(characteristicElement);

      characteristicElement = document.createElement("div");
      characteristicElement.innerHTML = `Habitat: ${animal.characteristics.habitat}`;
      informationElement.appendChild(characteristicElement);

      characteristicElement = document.createElement("div");
      characteristicElement.innerHTML = `Lifestyle: ${animal.characteristics.lifestyle}`;
      informationElement.appendChild(characteristicElement);

      characteristicElement = document.createElement("div");
      characteristicElement.innerHTML = `Biggest Threat: ${animal.characteristics.biggest_threat}`;
      informationElement.appendChild(characteristicElement);

      characteristicElement = document.createElement("div");
      characteristicElement.innerHTML = `Predators: ${animal.characteristics.predators}`;
      informationElement.appendChild(characteristicElement);

      characteristicElement = document.createElement("div");
      characteristicElement.innerHTML = `Color: ${animal.characteristics.color}`;
      informationElement.appendChild(characteristicElement);

      characteristicElement = document.createElement("div");
      characteristicElement.innerHTML = `Top Speed: ${animal.characteristics.top_speed}`;
      informationElement.appendChild(characteristicElement);

      var locationElement = document.createElement("div");
      locationElement.innerHTML = `Locations: ${animal.locations.join(", ")}`;
      informationElement.appendChild(locationElement);
    });
}

//Event Listener for user click when searching for an animal
const searchButton = document.querySelector(".search-button button");
searchButton.addEventListener("click", searchAnimals);

//apiKey to access API with animal photos
const apiKey = "35962769-99a3782536c333badafa928a5";

//Function that allows the user to search for a specific animal
async function searchAnimals(animal) {
  var searchInput = document.querySelector(".input").value;

  //Save user seach to localStorage
  var history = JSON.parse(localStorage.getItem("searchHistory")) || [];
  history.push(searchInput);
  localStorage.setItem("searchHistory", JSON.stringify(history));

  const apiUrl = `https://animals-by-api-ninjas.p.rapidapi.com/v1/animals?name=${searchInput}`;
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      "X-RapidAPI-Key": "43e968232emsh327e4df849cd7f3p1f85dajsn3ad7209370f7",
      "Content-Type": "application/json",
    },
  };

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
      .then((data) => data);
  };

  Promise.all([getImages(), getAnimalData()]).then(([images, data]) => {
    const image = images[0];
    const animal = data[0];

    document
      .getElementById("animal-image")
      .setAttribute("src", image.webformatURL);
  });

  //Fetch that renders the searched animals information based on the callback recieved from above API.
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

// Function to save searched animals in local storage
function saveSearch(animal) {
  const history = localStorage.getItem("searchHistory") || "[]";
  const searchHistory = JSON.parse(history);
  searchHistory.push(animal);
  localStorage.setItem("searchHistory", JSON.stringify(history));
}

// Function to retrieve search history from local storage
function getSearchHistory() {
  const history = localStorage.getItem("searchHistory") || "[]";
  const searchHistory = JSON.parse(history);
  const container = document.getElementById("searchHistory");
  container.innerHTML = "";
  const ul = document.createElement("ul");
  for (let animal of searchHistory) {
    const li = document.createElement("li");
    button.textContent = animal;
    button.addEventListener("click", () => searchAnimals(animal));
  }
}

window.addEventListener("load", () => {
  getSearchHistory();
});

//Event Listener for user click when searching for an animal
const searchButton = document.querySelector(".search-button button");
searchButton.addEventListener("click", searchAnimals);
window.addEventListener("load", getSearchHistory);

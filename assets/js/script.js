
mapboxgl.accessToken = 'pk.eyJ1Ijoic2ltb21vLTEyMzQiLCJhIjoiY2xnenFqdmE2MDNhazNzbGw2dG5sOGJnZSJ9.q6QlnKPlEGI19HBumS-V2A';
const map = new mapboxgl.Map({
container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12',
center: [-78.644257 ,35.787743 ],
zoom: 4
});

 
const nav = new mapboxgl.NavigationControl()
map.addControl(nav)

var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken
})

map.addControl(directions, "top-left")

// adding search MAPBOX customize for all searches 
map.addControl(
  new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl
  })
  );

  // create an array of marker objects
  var markers = [
  {
    coordinates: [-99.69058, 32.43943],
    title: 'Abilene Zoological Gardens, Texas ',
    website: 'https://abilenezoo.org/'
  },
  {
    coordinates: [-75.13114, 39.94626],
    title: 'Adventure Aquarium, N.J',
    website: 'https://www.adventureaquarium.com/'
  },
  {
    coordinates: [-98.13687, 18.93741],
    title: 'Africam Safari Park, Mexico',
    website: 'https://africamsafari.com/'
  },
  {
    coordinates: [-81.54138, 41.07872],
    title: 'Akron Zoological Park, Ohio',
    website: 'https://www.akronzoo.org/'
  },
  {
    coordinates: [-149.44086, 60.10047],
    title: 'Alaska SeaLife Center, Alaska',
    website: 'http://www.alaskasealife.org/'
  },
  {
    coordinates: [-106.68094, 35.09412],
    title: 'Albuquerque Biological Park, N.M.',
    website: 'http://www.cabq.gov/biopark'
  },
  {
    coordinates: [-106.66300, 35.07874],
    title: 'ABQ BioPark Zoo',
    website: 'https://www.cabq.gov/artsculture/biopark/zoo'
  },
  {
    coordinates: [-92.45719, 31.28795],
    title: 'Alexandria Zoological Park, La.',
    website: 'https://www.thealexandriazoo.com/'
  },
  {
    coordinates: [-79.05993, 43.09445],
    title: 'Aquarium of Niagara, N.Y.',
    website: 'http://www.aquariumofniagara.org/'
  },
  {
    coordinates: [-122.40929, 37.80879],
    title: 'Aquarium of the Bay, Calif.',
    website: 'http://www.aquariumofthebay.org/'
  },
  {
    coordinates: [-118.19703, 33.76215],
    title: 'Aquarium of the Pacific, Calif.',
    website: 'https://www.aquariumofpacific.org/'
  },
  {
    coordinates: [-96.12334, 19.18981],
    title: 'Aquarium of the Port of Veracruz, Mexico',
    website: 'https://www.aquariumpuertodeveracruz.mx/'
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
  {
    coordinates: [],
    title: '',
    website: ''
  },
]
// loop through the markers array and create a marker for each object
markers.forEach(function(marker) {
  // create a new marker with a div element
  var newMarker = new mapboxgl.Marker({
    element: document.createElement('div')
  });
  
  // add a class to the marker element for styling
  newMarker.getElement().classList.add('marker');

  // add the marker to the map at the specified coordinates
  newMarker.setLngLat(marker.coordinates).addTo(map);

  // create a new popup with the title text for this marker
  var popup = new mapboxgl.Popup({ offset: 25 }).setHTML('<h3>' + marker.title + '</h3><a href="' + marker.website + '">Visit website</a>');

  // attach the popup to the marker
  newMarker.setPopup(popup);
});

   
   
 

// for (let i = 0; i < zoos.length; i++) {
//   const popup = new mapboxgl.Popup()
//     .setLngLat([zoos[i].long ,zoos[i].lat])
//     .setHTML('<h1>Hello, world!</h1>')
//     .addTo(map);
   
//   const marker1 = new mapboxgl.Marker()
//     .setLngLat([zoos[i].long ,zoos[i].lat])
//     .addTo(map);
// }

// // create a new marker with a div element
// var marker = new mapboxgl.Marker({
//   element: document.createElement('div')
// });

// // add a class to the marker element for styling
// marker.getElement().classList.add('marker');

// // add the marker to the map at a specific location
// marker.setLngLat([-73.9819, 40.7681]).addTo(map);

// // create a new popup with the title text
// var popup = new mapboxgl.Popup({ offset: 25 })
//   .setHTML('<h3>Central Park Zoo</h3>');

// // add the popup to the marker
// marker.setPopup(popup);

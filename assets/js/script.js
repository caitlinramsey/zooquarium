let zoos = [
  {
    long: -78.644257,
    lat: 35.787743
  },

  {
    long: -78.898621,
    lat: 35.994034
  },
  
]


mapboxgl.accessToken = 'pk.eyJ1Ijoic2ltb21vLTEyMzQiLCJhIjoiY2xnenFqdmE2MDNhazNzbGw2dG5sOGJnZSJ9.q6QlnKPlEGI19HBumS-V2A';
const map = new mapboxgl.Map({
container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12',
center: [-78.644257 ,35.787743 ],
zoom: 4
});


for (let i = 0; i < zoos.length; i++) {
  const marker1 = new mapboxgl.Marker()
  .setLngLat([zoos[i].long ,zoos[i].lat])
  .addTo(map);
}
 
// Create a default Marker and add it to the map.

 
const nav = new mapboxgl.NavigationControl()
map.addControl(nav)

var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken
})

map.addControl(directions, "top-left")

// adding search MAPBOX customize for all searches 

new MapboxSearchBox()
const search = new MapboxSearchBox();
search.accessToken = 'pk.eyJ1Ijoic2ltb21vLTEyMzQiLCJhIjoiY2xnenFqdmE2MDNhazNzbGw2dG5sOGJnZSJ9.q6QlnKPlEGI19HBumS-V2A';
map.addControl(search);
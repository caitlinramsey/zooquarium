mapboxgl.accessToken = 'pk.eyJ1Ijoic2ltb21vLTEyMzQiLCJhIjoiY2xnenFqdmE2MDNhazNzbGw2dG5sOGJnZSJ9.q6QlnKPlEGI19HBumS-V2A';


navigator.geolocation.getCurrentPosition(successLocation,errorLocation, {
    enableHighAccuracy: true,

})

function successLocation(position) {
    setupMap ([position.coords.longitude, position.coords.latitude])

}

function errorLocation() {
    setupMap ([52.5200, 13.4050])
} 

function setupMap(center) {

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: center,
  zoom: 3,
})

const nav = new mapboxgl.NavigationControl()
map.addControl(nav)

var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken
})

map.addControl(directions, "top-left")
}
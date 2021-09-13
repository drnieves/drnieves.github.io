const app = document.getElementById("typewriter");
const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString("Edificio Clinica Nieves, Centro de Excelencia Vascular ")
  .pauseFor(200)
  .start();
// AQUI PARA MAPA /////
function createMapMarker() {
  // TODO: add your own access token
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZXJuZXN0b25pZXZlcyIsImEiOiJja3RmMmY2a3YwNDk4MndxbjJjOHc0djRkIn0.66IZbjeVwzhaqHi26nWHVQ";

  let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-72.38792, 5.32666],
    zoom: 12,
  });

  var marker = new mapboxgl.Marker()
    .setLngLat([-72.38792, 5.32666])

    .addTo(map);
  // TODO: add a marker to the map
}

window.onload = () => {
  createMapMarker();
};

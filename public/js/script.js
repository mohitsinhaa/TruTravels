// Map Script

mapboxgl.accessToken =
  "pk.eyJ1IjoibW9oaXRzaW5oYSIsImEiOiJjbHowd3NpaXYybzY5MmtzaGUxOHZ6dTFqIn0.pajwiLPD-KGRomw9QwEeKQ";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12",
  center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      "<h6>Exact location provided after booking.</h6>"
    )
  )
  .addTo(map);

// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const positions = [{lat: -25.344, lng: 131.031 },{lat: -2.344, lng: 71.031 },{lat: 5.344, lng: 101.031 },{lat: -5.344, lng: 13.031 },{lat: 25.344, lng: 121.031 }] ;
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: positions,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();
// Map & Directions Intialization Section

mapboxgl.accessToken = "pk.eyJ1IjoiZGhvdGVoYXJzaHJhaiIsImEiOiJjanczczFxdmQwaWxqNDhxcTA5dXF2NDNsIn0.SpRrT-_v7oylFpY96UG34Q";
var map = new mapboxgl.Map({
  container: "map", // Specify the container ID
  style: "mapbox://styles/mapbox/dark-v10", // Specify which map style to use
  center: [-87.746010,41.812267], // Specify the starting position [lng, lat]
  zoom: 10 ,// Specify the starting zoom
  geometries: "geojson",
  // maxBounds : [[-94.192919,46.980252],[-86.585303,36.597889]]
});

var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
  unit: "metric",
  profile: "mapbox/driving",
  alternatives: false,
  geometries: "geojson",
  controls: { instructions: false },
  flyTo: false
});


// Map controls & layers section

map.addControl(directions, "top-right");
map.scrollZoom.enable();

var clearances = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-84.47426, 38.06673],
      },
      properties: {
        clearance: "13' 2",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-84.47208, 38.06694],
      },
      properties: {
        clearance: "13' 7",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-84.60485, 38.12184],
      },
      properties: {
        clearance: "13' 7",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-84.61905, 37.87504],
      },
      properties: {
        clearance: "12' 0",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-84.55946, 38.30213],
      },
      properties: {
        clearance: "13' 6",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-84.27235, 38.04954],
      },
      properties: {
        clearance: "13' 6",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-84.27264, 37.82917],
      },
      properties: {
        clearance: "11' 6",
      },
    }
  ]
};

// var obstacle = turf.buffer(clearances, 0.25, { units: "kilometers" });
var bbox = [0, 0, 0, 0];
var polygon = turf.bboxPolygon(bbox);

map.on("load", function () {
  map.addSource("theRoute", {     //search route
  type: "geojson",
  data: {
   type: "Feature",
  },
});

 map.addLayer({
   id: "theRoute",
   type: "line",
   source: "theRoute",
   layout: {
     "line-join": "round",
     "line-cap": "round",
   },
   paint: {
     "line-color": "#008000",
     "line-opacity": 0.5,
     "line-width": 13,
     "line-blur": 0.5,
   },
 });

map.addSource("BestRouteGreen", {     //green route
  type: "geojson",
  data: {
   type: "Feature",
  },
});

 map.addLayer({
   id: "BestRouteGreen",
   type: "line",
   source: "BestRouteGreen",
   layout: {
     "line-join": "round",
     "line-cap": "round",
   },
   paint: {
     "line-color": "#008000",
     "line-opacity": 0.5,
     "line-width": 13,
     "line-blur": 0.5,
   },
 });


 map.addSource("AltRouteYellow", {     //green route
  type: "geojson",
  data: {
   type: "Feature",
  },
});

 map.addLayer({
   id: "AltRouteYellow",
   type: "line",
   source: "AltRouteYellow",
   layout: {
     "line-join": "round",
     "line-cap": "round",
   },
   paint: {
     "line-color": "#FFFF00",
     "line-opacity": 0.5,
     "line-width": 13,
     "line-blur": 0.5,
   },
 });


 map.addSource("AltRouteRed", {     //red route
  type: "geojson",
  data: {
   type: "Feature",
  },
});

 map.addLayer({
   id: "AltRouteRed",
   type: "line",
   source: "AltRouteRed",
   layout: {
     "line-join": "round",
     "line-cap": "round",
   },
   paint: {
     "line-color": "#FF0000",
     "line-opacity": 0.5,
     "line-width": 13,
     "line-blur": 0.5,
   },
 });

 // Source and layer for the bounding box
 map.addSource("theBox", {
   type: "geojson",
   data: {
     type: "Feature"
   }
 });
 map.addLayer({
   id: "theBox",
   type: "fill",
   source: "theBox",
   layout: {},
   paint: {
     "fill-color": "#FFC300",
     "fill-opacity": 0.5,
     "fill-outline-color": "#FFC300"
   }
 });
});
console.log(CACrimeIndexMapping);

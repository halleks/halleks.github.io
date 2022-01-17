// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoiaGFsbGVrcyIsImEiOiJja3k5NHBicDQwMnlrMnVwOXNnd2JrYXZyIn0.WOMDMgtedw9-gqG3AuqXKQ';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [7.683702129927503, 45.06224273994122], // starting position [lng, lat]
    zoom: 13 // starting zoom
});
const geojson = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [7.6774, 45.0698]
            },
            properties: {
                title: 'Piazza Solferino'
            }
    },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [7.686066487830182, 45.070382824586574]
            },
            properties: {
                title: 'Piazza Castello'
            }
    },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [7.694920687302408, 45.06496494171627]
            },
            properties: {
                title: 'Piazza Vittorio'
            }
    },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [7.685457274566737, 45.050960514872976]
            },
            properties: {
                title: 'Parco del Valentino'
            }
    }
  ]
};
// add markers to map
for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    // make a marker for each feature and add it to the map
    new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({
                offset: 25
            }) // add popups
            .setHTML(
                `<h3>${feature.properties.title}</h3>`
            )
        )
        .addTo(map);
}

var group = new L.featureGroup([marker1, marker2, marker3]);

map.fitBounds(group.getBounds.pad(0.5));

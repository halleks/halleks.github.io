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

	    new mapboxgl.Marker(el)
	        .setLngLat(feature.geometry.coordinates)
	        .setPopup(
	            new mapboxgl.Popup({
	                offset: 25
	            }) // add popups
	            .setHTML(
	                `<p style="color: black">${feature.properties.title}</p>`
	            )
	        )
	        .addTo(map);
	}

	map.fitBounds([
[7.684191095798412, 45.073274366042014], // southwestern corner of the bounds
[7.685287958483167, 45.04928303467391] // northeastern corner of the bounds
]);

	function piazzavittorio() {
	    map.flyTo({
	        center: [7.685457274566737, 45.050960514872976],
	        zoom: 14.3,
	        pitch: 20,
	        essential: true // this animation is considered essential with respect to prefers-reduced-motion
	    });
	}

	function valentino() {
	    map.flyTo({
	        center: [7.686066487830182, 45.070382824586574],
            zoom: 14.3,
	        pitch: 20,
	        essential: true // this animation is considered essential with respect to prefers-reduced-motion
	    });
	}

	function piazzacastello() {
	    map.flyTo({
	        center: [7.694920687302408, 45.06496494171627],
            zoom: 14.3,
	        pitch: 20,
	        essential: true // this animation is considered essential with respect to prefers-reduced-motion
	    });
	}

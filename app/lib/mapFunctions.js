var googlePlaces = require('googleplaces');

var currentLocation = {};

function getLocation(position, currentLocation) {
    currentLocation.lat = position.coords.latitude;
    currentLocation.lon = position.coords.longitude;
}

function resultsCallback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];
            createMarker(results[i]);
        }
    }
}

function getResults(lat, lon, minRating) {
    let map, service, infowindow;
    let currentMap = new googlePlaces.maps.LatLng(lat, lon);

    map = new googlePlaces.maps.Map(document.getElementById('map'), {
        center: currentMap,
        zoom: 15
    });

    var request = {
        location: currentMap,
        radius: '500',
        types: ['food']
    };

    service = new googlePlaces.maps.places.PlacesService(map);
    service.nearbySearch(request, resultsCallback);
}

module.exports = {
    currentLocation: currentLocation,
    getLocation: getLocation,
    getResults: getResults
};

navigator.geolocation.getCurrentPosition(getLocation);

navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude, ' ', position.coords.longitude);

});


var map;

function initCenter(lat, lng) {
    var mapCenter = {};
    mapCenter.lat = lat;
    mapCenter.lng = lng;
}

//service = new google.maps.places.PlacesService(map);
//service.nearbySearch(request, callback);


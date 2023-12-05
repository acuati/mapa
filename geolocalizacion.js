function geolocalizacion(){
    map.locate({setView: true, maxZoom: 16});
function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("Se encuentra a " + radius + " metros de este punto").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

}
document.getElementById('geolocalizar').addEventListener('click', function(){
    geolocalizacion();
});

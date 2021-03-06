
google.maps.event.addDomListener(window, 'load', initGMap);

function initGMap() {
    var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        mapTypeControl: true,
        zoomControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        disableDefaultUI: false,
        center: new google.maps.LatLng(40.7560139,-73.8577014),
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.7790139,-73.910),
        map: map,
        title: 'Perla App',
        icon: ''
    });

    // InfoWindow content
    var contentString = '<div id="iw-container">' +
        '<div class="iw-content">' +
        '<h4>Perla Center</h4><h5>Opening Times:</h5>' +
        '<h6>Sunday - Thursday &nbsp; &nbsp; 10am - 11pm</h6>' +
        '<h5>Address:</h5>' +
        '<h6>V15 Bath Rd, Heathrow, Longford, Hounslow TW6 2AB, UK<br>'+
        '<br>Phone.  +44 171 127 8528<br>e-mail: perla.app@example.com</h6>'+
        '</div>'+
        '</div>';




    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 350
    });



    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });


}

function initMap() {
  var rendererOptions = {
    draggable: true,
    preserveViewport:true
  };
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
  var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(35.689614, 139.691585),
    zoom: 3,
    minZoom: 3,
    restriction: {
      latLngBounds: {north: 85, south: -85, west: -180, east: 180},
      strictBounds: true
    },
    disableDefaultUI: true,
    styles: [
      {
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffefd7"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#A5DEE4"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffa4a4"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#ff8080"
          }
        ]
      }
    ]
  });
  
  directionsDisplay.setMap(map); 
  var start = new google.maps.LatLng(35.689614, 139.691585);  
  var end = new google.maps.LatLng(34.669390, 135.494953);  
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(result, status) {
    console.log(status);
    console.log(result);
    if (status == 'OK') {
      directionsDisplay.setDirections(result);
    }
  });
}

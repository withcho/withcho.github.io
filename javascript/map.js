function initMap() {
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
 
  var start = new google.maps.LatLng(35.689614, 139.691585);  
  var end = new google.maps.LatLng(34.669390, 135.494953);  
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  new google.maps.DirectionsService().route(request, function(result, status) {
    if (status == 'OK') {
      new google.maps.DirectionsRenderer({
        map: map,
        directions: result,
        preserveViewport: true,
        suppressMarkers: true
      });
      makeMarker(start, icons.start, "start", map);
      makeMarker(end, icons.end, "end", map);
    }
  });
}

function makeMarker(position, icon, title, map) {
  new google.maps.Marker({
    position: position,
    map: map,
    icon: icon,
    title: title
  });
}

var icons = {
  start: new google.maps.MarkerImage(
    // URL
    '/images/pin.png',
    // (width,height)
    new google.maps.Size(24, 24),
    // The origin point (x,y)
    new google.maps.Point(12, 0),
    // The anchor point (x,y)
    new google.maps.Point(12, 24)
  ),
  end: new google.maps.MarkerImage(
    // URL
    '/images/pin.png',
    // (width,height)
    new google.maps.Size(24, 24),
    // The origin point (x,y)
    new google.maps.Point(12, 0),
    // The anchor point (x,y)
    new google.maps.Point(12, 24)
  )
};

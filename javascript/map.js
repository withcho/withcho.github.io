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

  calculateAndDisplayRoute(map);
}

function calculateAndDisplayRoute(map) {
  // America Route
  var start_us = new google.maps.LatLng(37.939978, -122.325833);
  var end_us = new google.maps.LatLng(40.712050, -74.043890);
  var waypoints_us = [
    { location: new google.maps.LatLng(34.010350, -118.496184) },
    { location: new google.maps.LatLng(33.008058, -116.955410) },
    { location: new google.maps.LatLng(33.254149, -115.472654) },
    { location: new google.maps.LatLng(36.138250, -115.096837) },
    { location: new google.maps.LatLng(34.866481, -111.759951) },
    { location: new google.maps.LatLng(36.059168, -112.109308) },
    { location: new google.maps.LatLng(36.901534, -111.452688) },
    { location: new google.maps.LatLng(37.006504, -110.214807) },
    { location: new google.maps.LatLng(32.790702, -106.324944) },
  ];
  var request_us = {
    origin: start_us,
    destination: end_us,
    waypoints: waypoints_us,
    travelMode: 'DRIVING'
  };
  new google.maps.DirectionsService().route(request_us, function(result, status) {
    if (status == 'OK') {
      console.log(result);
      new google.maps.DirectionsRenderer({
        map: map,
        directions: result,
        preserveViewport: true,
        suppressMarkers: true,
        polylineOptions: {
          strokeOpacity: 0.35,
          strokeColor: "black",
          strokeWeight: 5
        }
      });
      var icon = new google.maps.MarkerImage('/images/pin.png');
      makeMarker(start_us, icon, "start_us", map);
      makeMarker(end_us, icon, "end_us", map);
    }
  });

  // Australia Route
  var start2 = new google.maps.LatLng(39.904844, 116.401543);  
  var end2 = new google.maps.LatLng(31.227831, 121.482083);  
  var request2 = {
    origin: start2,
    destination: end2,
    travelMode: 'DRIVING'
  };
  new google.maps.DirectionsService().route(request2, function(result, status) {
    if (status == 'OK') {
      new google.maps.DirectionsRenderer({
        map: map,
        directions: result,
        preserveViewport: true,
        suppressMarkers: true,
        polylineOptions: {
          strokeOpacity: 0.35,
          strokeColor: "black",
          strokeWeight: 5
        }
      });
      var icon = new google.maps.MarkerImage('/images/pin.png');
      makeMarker(start2, icon, "start2", map);
      makeMarker(end2, icon, "end2", map);
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

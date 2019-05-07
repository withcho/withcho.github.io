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
 
  var start1 = new google.maps.LatLng(35.689614, 139.691585);  
  var end1 = new google.maps.LatLng(34.669390, 135.494953);  
  var request1 = {
    origin: start1,
    destination: end1,
    travelMode: 'DRIVING'
  };
  new google.maps.DirectionsService().route(request1, function(result, status) {
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
      makeMarker(start1, icon, "start1", map);
      makeMarker(end1, icon, "end1", map);
    }
  });
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

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
  var points_us = [
    new google.maps.LatLng(37.939978, -122.325833),
    new google.maps.LatLng(34.010350, -118.496184),
    new google.maps.LatLng(33.008058, -116.955410),
    new google.maps.LatLng(33.254149, -115.472654),
    new google.maps.LatLng(36.138250, -115.096837),
    new google.maps.LatLng(34.866481, -111.759951),
    new google.maps.LatLng(36.059168, -112.109308),
    new google.maps.LatLng(36.901534, -111.452688),
    new google.maps.LatLng(37.006504, -110.214807),
    new google.maps.LatLng(32.779773, -106.173292),
    new google.maps.LatLng(30.895045, -102.795980),
    new google.maps.LatLng(29.551876, -95.098289),
    new google.maps.LatLng(29.961824, -90.073272),
    new google.maps.LatLng(33.925652, -84.176850),
    new google.maps.LatLng(38.604036, -77.350601),
    new google.maps.LatLng(38.885917, -77.047033),
    new google.maps.LatLng(40.122410, -74.459341),
    new google.maps.LatLng(40.712050, -74.043890)
  ];
  var content_us = [
    "サンフランシスコ",
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    "ニューヨーク"
  ];
  var start_us = null, waypoints_us = [], end_us = null;
  var request_us = {};
  var request_us_index = 0;
  
  for (var i = 0; i < points_us.length; i++) {
    makeMarker(points_us[i], map, content_us[i]);
    // 開始経緯度をセット
    if (start_us == null) {
      start_us = points_us[i];
    }
    // 終了経緯度をセット
    else if (waypoints_us.length == 8 || i == points_us.length - 1) {
      end_us = points_us[i];
  
      request_us[request_us_index] = {
        origin: start_us,
        destination: end_us,
        waypoints: waypoints_us,
        travelMode: 'DRIVING'
      };
      new google.maps.DirectionsService().route(request_us[request_us_index], function(result, status) {
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
        } else {
          console.log(status);
        }
      });
      request_us_index++;
      start_us = points_us[i];
      waypoints_us = [];
    }
    // waypointsを追加
    else {
      waypoints_us.push({ location: points_us[i], stopover: true });
    }
  }

  // Australia Route
  var start_au = new google.maps.LatLng(-16.877844, 145.749954);  
  var end_au = new google.maps.LatLng(-33.939716, 151.175288);
  var waypoints_au = [
    { location: new google.maps.LatLng(-19.255118, 146.821899) },
    { location: new google.maps.LatLng(-25.282932, 152.902980) },
    { location: new google.maps.LatLng(-27.470818, 153.023852) },
  ];
  var request_au = {
    origin: start_au,
    destination: end_au,
    waypoints: waypoints_au,
    travelMode: 'DRIVING'
  };
  new google.maps.DirectionsService().route(request_au, function(result, status) {
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
      makeMarker(start_au, map, "ケアンズ");
      makeMarker(end_au, map, "シドニー");
    }
  });
}

function makeMarker(position, map, content) {
  var infoWindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    position: position,
    map: map,
    icon: new google.maps.MarkerImage('/images/pin.png'),
  });
  marker.addListener("click", function(){
    infoWindow.setContent(content);
    infoWindow.open(map, marker);
  });
}

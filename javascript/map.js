function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.689614, lng: 139.691585},
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
  
  //DirectionsService のオブジェクトを生成
  var directionsService = new google.maps.DirectionsService();
  
  //DirectionsRenderer のオブジェクトを生成
  var directionsRenderer = new google.maps.DirectionsRenderer();
  
  //directionsRenderer と地図を紐付け
  directionsRenderer.setMap(map); 
  
  //リクエストの出発点の位置（Empire State Building 出発地点の緯度経度）
  var start = new google.maps.LatLng(40.748541, -73.985758);  
  //リクエストの終着点の位置（Grand Central Station 到着地点の緯度経度）
  var end = new google.maps.LatLng( 40.752741,-73.9772);  
  
  // ルートを取得するリクエスト
  var request = {
    origin: start,      // 出発地点の緯度経度
    destination: end,   // 到着地点の緯度経度
    travelMode: 'WALKING' //トラベルモード（歩き）
  };
  
  //DirectionsService のオブジェクトのメソッド route() にリクエストを渡し、
  //コールバック関数で結果を setDirections(result) で directionsRenderer にセットして表示
  directionsService.route(request, function(result, status) {
    if (status === 'OK') {
      directionsRenderer.setDirections(result); //取得したルート（結果：result）をセット
    }else{
      alert("取得できませんでした：" + status);
    }
  });
}

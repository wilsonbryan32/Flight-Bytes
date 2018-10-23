// Initialize and add the map

var map; 
var airplane = "airplane-logo.png";
var planes = {}

function initMap(data) {
    var uluru = { lat: 30.45, lng: -84.5};
    
    map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    
  var marker = new google.maps.Marker({position: uluru, map: map, icon: airplane});
  // The location of Uluru
    /*
  
  
  
    
markers[data.key] = marker; */
}



// get firebase database reference...
var airplane_ref = firebase.database().ref('acList');

// this event will be triggered on location change of any car...
airplane_ref.on('child_changed', function (data) {
    console.log(data);
    //markers[data.key].setMap(null);
    //AddAirplane(data);
    var marker = planes[data.key];
    
});

airplane_ref.once('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    // ...
    var plane_position = { lat: childData.Lat, lng: childData.Long};
    var marker = new google.maps.Marker({position:plane_position, map: map, icon: airplane});
      
    planes[childKey] = marker;
      
  });
});

import React from 'react'

window.mapLibLoaded = function() {
    initMap();
};

var map;
function initMap(props) {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var uluru = [];
    map = new google.maps.Map(document.getElementById('sales-view-map'), {
        zoom: 0
    });
    directionsDisplay.setMap(map);

    var marker;
    for (var i = uluru.length - 1; i >= 0; i--) {
        marker = new google.maps.Marker({
            position: uluru[i],
            animation: google.maps.Animation.DROP,
            map: map
        });
    };
    var source=(props) ? props.source : {lat:39.5501, lng: -105.7821, name:"Colorado"};
    var dest=(props) ? props.destination :  {lat:41.350239, lng: -74.25783, name:"Chester"};
    calculateAndDisplayRoute(directionsService, directionsDisplay,source,dest)
}

function calculateAndDisplayRoute(directionsService, directionsDisplay,source,dest) {
    directionsService.route({
      origin: source,
      destination: dest,
      travelMode: 'DRIVING'
    }, function(response, status) {
        debugger;
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        var infowindow2 = new google.maps.InfoWindow();
        var content = "<h5>Ongoing frieght volume: 100k lbs</h5><br/>"+
                      "<h5>Frieght volume for next 7 days : 10000k lbs</h5><br/>"+
                      "<h5>Frieght volume for last 7 days : 10000k lbs</h5>";  
        infowindow2.setContent(content);
        infowindow2.setPosition(response.routes[0].legs[0].steps[15].end_location);
        infowindow2.open(map);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

class SalesMapView extends React.Component {

    constructor(props) {
        super(props);
        console.log("constructor : ",props);

        this.loadScript();
//        initMap(props);
    }

    componentWillReceiveProps(nextprops){
        console.log(nextprops);
        initMap(nextprops);
    }

    loadScript() {
        const src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDkGvX0meE_ObRQWRZ7J8LHG067U0_ggPA&callback=mapLibLoaded'
        const script = document.createElement('script');
        script.setAttribute('src', src);
        document.head.appendChild(script);
    }

    render() {
        return(
            <div style={{height: '300px'}} id="sales-view-map"></div>
        )
    }
}

export default SalesMapView

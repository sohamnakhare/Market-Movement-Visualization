import React from 'react'

window.mapLibLoaded = function() {
    initMap();
};

function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var uluru = [{lat:39.5501, lng: -105.7821},{lat:37.8393, lng: -84.2700}];
    var map = new google.maps.Map(document.getElementById('sales-view-map'), {
        zoom: 4,
        center: {lat:39.5501, lng: -105.7821}
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

    calculateAndDisplayRoute(directionsService, directionsDisplay)
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: {lat:39.5501, lng: -105.7821},
      destination: {lat:37.8393, lng: -84.2700},
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

class SalesMapView extends React.Component {

    constructor(props) {
        super(props);
        this.loadScript();
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
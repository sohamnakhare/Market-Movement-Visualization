import React from 'react'

window.mapLibLoaded = function() {
    initMap();
};

var citymap = {
    chicago: {
        center: {lat: 41.878, lng: -87.629},
        population: 2714856
    },
    newyork: {
        center: {lat: 40.714, lng: -74.005},
        population: 8405837
    },
    losangeles: {
        center: {lat: 34.052, lng: -118.243},
        population: 3857799
    },
    vancouver: {
        center: {lat: 49.25, lng: -123.1},
        population: 603502
    }
};

function initMap() {
    // Create the map.
        var map = new google.maps.Map(document.getElementById('sales-view-map'), {
          zoom: 4,
          center: {lat: 37.090, lng: -95.712},
          mapTypeId: 'terrain'
        });

        // Construct the circle for each value in citymap.
        // Note: We scale the area of the circle based on the population.
        for (var city in citymap) {
          // Add the circle for this city to the map.
          var cityCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: citymap[city].center,
            radius: Math.sqrt(citymap[city].population) * 100
          });
        }
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
            <div style={{height: '400px'}} id="sales-view-map"></div>
        )
    }
}

export default SalesMapView
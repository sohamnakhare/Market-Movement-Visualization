import React from 'react'

window.mapLibLoaded = function() {
    initMap();
};

var citymap = {
    CA: {
        center: {lat: 33.976168, lng: -118.167642},
        population: 2714856
    },
    CO: {
        center: {lat: 40.436074, lng: -104.681342},
        population: 8405837
    },
    GA: {
        center: {lat: 33.584613, lng: -84.328098},
        population: 3857799
    },	
    IL: {
        center: {lat: 41.494348, lng: -88.138419},
        population: 603502
    },
    AL: {
        center: {lat: 34.45138, lng: -88.061962},
        population: 385779
    },	
    AR: {
        center: {lat: 34.484883, lng: -93.775892},
        population: 703502
    },
    KS: {
        center: {lat:37.251772, lng: -96.970092},
        population: 903502
    },
    KY: {
        center: {lat: 38.232512, lng: -85.827156},
        population: 5857799
    },
    LA: {
        center: {lat: 30.466558, lng: -91.34044},
        population: 2857799
    },
    MI: {
        center: {lat: 42.505416, lng: -83.105407},
        population: 185779
    },
    MN: {
        center: {lat: 44.851871, lng: -93.554242},
        population: 885779
    },
    MO: {
        center: {lat: 39.130212, lng: -94.522426},
        population: 185779
    },
    MS: {
        center: {lat: 32.559681, lng: -90.325799},
        population: 885779
    },
    NC: {
        center: {lat: 35.054174, lng: -80.083576},
        population: 1857799
    },
    NJ: {
        center: {lat: 40.092941, lng: -74.741363},
        population: 998342
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
            let cityCircle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                map: map,
                center: citymap[city].center,
                radius: Math.sqrt(citymap[city].population) * 100
            });
                
            let infoWindow= new google.maps.InfoWindow({
                content: "<div>Profit per mile: 2.45<br/>"+
                 "Cost per mile: 1:80</div>"
            });

            google.maps.event.addListener(cityCircle, 'click', function(ev){
                infoWindow.setPosition(ev.latLng);
                infoWindow.open(map);
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
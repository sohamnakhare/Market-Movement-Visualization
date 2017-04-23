import React from 'react'

window.mapLibLoaded = function() {
    initMap();
};

var map;
function initMap() {
    // Create the map.
        map = new google.maps.Map(document.getElementById('sales-view-map'), {
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
                radius: citymap[city].population * 30
            });
                
            let infoWindow= new google.maps.InfoWindow({
                content: "<div>Average Price: "+citymap[city].population+"</div>"
            });

            google.maps.event.addListener(cityCircle, 'click', function(ev){
                infoWindow.setPosition(ev.latLng);
                infoWindow.open(map);
            });
            if(citymap[city].destinations){
                for(var i=0; i<citymap[city].destinations.length; i++){
                    let destination = citymap[city].destinations[i];
                    let path = [citymap[city].center, destination];
                    let frieghtPath = new google.maps.Polyline({
                        path: path,
                        geodesic: true,
                        strokeColor:citymap[city].population > 1000 ?
                                 '#006400': '#FF0000',
                        strokeOpacity: 1.0,
                        strokeWeight: 0.8
                    });

                    frieghtPath.setMap(map);
                }
            }

            setTimeout(()=>{
                google.maps.event.trigger(map, 'resize');
            },2000);
        }
}

var citymap={};
function setCityMap(cityMap){
    citymap = cityMap;
}

class SalesMapView extends React.Component {

    constructor(props) {
        super(props);
    }

    loadScript() {
        const src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDkGvX0meE_ObRQWRZ7J8LHG067U0_ggPA&callback=mapLibLoaded'
        const script = document.createElement('script');
        script.setAttribute('src', src);
        document.head.appendChild(script);
    }

    componentDidMount() {
        setCityMap(this.props.citymap);
        this.loadScript();
    }

    componentWillReceiveProps() {
        setCityMap(this.props.citymap);
        initMap();
    }
 
    render() {
        return(
            <div style={{height: '400px'}} id="sales-view-map"></div>
        )
    }
}

export default SalesMapView
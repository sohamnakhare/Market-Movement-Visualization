import React from 'react'

window.mapLibLoaded = function() {
    initMap();
};

function initMap() {
    var uluru = {lat:29.786922, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('sales-view-map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
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
            <div style={{height: '400px'}} id="sales-view-map"></div>
        )
    }
}

export default SalesMapView
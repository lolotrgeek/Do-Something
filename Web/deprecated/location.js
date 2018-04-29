    // Get location
     if (navigator.geolocation) {    
    navigator.geolocation.getCurrentPosition(function(position) {
        
        //Build LatLng object
        var location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        
        console.log(pos)

    // Handle Errors   
    }, errorLocation)
    
    } else { 
        result.innerHTML = "Geolocation is not supported by this browser.";
    }

    function errorLocation(error) {

        switch(error.code) {
            case error.PERMISSION_DENIED:
                result.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                result.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                result.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                result.innerHTML = "An unknown error occurred."
                break;
        }
    }
}
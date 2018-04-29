// FIND SOMETHING \\

// Initialize Google
var service;

// Initialize UI
var result = document.getElementById("result");
var name = document.getElementById("name");
var website = document.getElementById("website");
var image = document.getElementById("image");

//Inititalize Interests


// Find Place
function findPlace(interest) {

    // Get location
    if (navigator.geolocation) {    
    navigator.geolocation.getCurrentPosition(function(position) {
        
        //Build LatLng object
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
    
        console.log(pos)        

        // Build Place request
        var request = {
            location: pos,
            radius: '500',
            query: interest
            }

        // Load Places Service
        var service = new google.maps.places.PlacesService(result);

        // Call Search from Places Service
        service.textSearch(request, callback);

        // Send information to UI
        function callback(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {

                var place = results[i];
                
                console.log(place.name);

                result.innerHTML = place.name;
                result.innerHTML = place.website;
                result.innerHTML = place.photos;
                
                }
            }
        }

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
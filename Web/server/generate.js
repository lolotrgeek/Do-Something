// Generate ACTIVITY or EVENT
// EVENT: specific time or date e.g. 'Pool Party. Sunday June 16, 2017'
// ACTIVITY: any time e.g. 'Go for a walk.'

// DEPENDENCIES
var request = require("request"); // https://github.com/request/request
var Geocoder = require('node-geocoder'); // https://github.com/nchaulet/node-geocoder 

// DATA
var interests = ['gaming', 'cars', 'programming'];
var location ='New York, NY';

// LOCATION: geocode and get info from google
var options = {
  provider: 'google',
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyCD9D4X4SXLVbbof68j_BHqI59jMBkzFnY',
  formatter: null         // 'gpx', 'string', ...
};
var geocoder = Geocoder(options); // init geocoder
geocoder.geocode(location) // run geocoder
  .then(function(res) { // geocoder promise
    var query = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + res[0].extra.googlePlaceId + '&key=' + options.apiKey; // build query
    request(query, function(error, response, body) { // get query with request module
        var json = JSON.parse(body) // parse the json
        if (json.result.website) {  // check if there is a website
            //console.log (json.result.website);
            console.log(json.result) 
        }
    });
  })
  .catch(function(err) { // geocoder promise fails
    console.log(err);
  });

// EVENT: Local City Calendars
// https://github.com/rchipka/node-osmosis
// https://github.com/IonicaBizau/scrape-it

// EVENT: Local Public Facebook Events
// https://github.com/tobilg/facebook-events-by-location


// ACTIVITY: generate from interests
var components = {
    Name: '',
    Mood: [],
    How: ''
};


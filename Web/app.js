
// Init Application
var app = angular.module('doSomething', []);

// Initialize Firebase
var config = {
    apiKey: "AIzaSyANhSWV_YcKP3GMXQgsmOtIGZvbDnngdbE",
    authDomain: "do-something-1499718110793.firebaseapp.com",
    databaseURL: "https://do-something-1499718110793.firebaseio.com",
    projectId: "do-something-1499718110793",
    storageBucket: "",
    messagingSenderId: "216388821626"
};
firebase.initializeApp(config);

// CONTROLLERS
app.controller('mainCtrl', function($scope) {   
    $scope.interests = ['cars', 'monkeys', 'programming'];
    
});
app.controller('addCtrl', function($scope) {    
    $scope.addSomething = function () {
        $scope.interests.push($scope.addText)
    }
});
app.controller('doCtrl', function($scope, $http) {
    $scope.doSomething = function () { // Find image for each Interest from Google
        $scope.images = ['image1', 'image2'];
        $scope.interests.forEach (function(interest) {
            var searchKey = '003981613329426101226:a_jsikup3x0';
            var params = '&searchType=image&num=1&rights=cc_publicdomain&q=' + interest;
            var imageQuery = 'https://www.googleapis.com/customsearch/v1?key=' + config.apiKey + '&cx=' + searchKey + params;
            $http.get(imageQuery).then(function(response) {
                //$scope.images.push(response.data.items.link);
                console.log(response.data.items)
            });     
        });
        console.log($scope.images)
    }
});

// ROUTES
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "index.html"
  })
  .when("/do", {
    templateUrl : "do.html"
  })
  .when("/add", {
    templateUrl : "add.html"
  })
  .when("/profile", {
    templateUrl : "profile.html"
  });
});
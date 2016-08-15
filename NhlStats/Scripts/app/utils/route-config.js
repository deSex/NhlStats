nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'Views/Home.html'
            }).
          when('/add', {
              templateUrl: 'Views/Match/Add.html'
          }).
          otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

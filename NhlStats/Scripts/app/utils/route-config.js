nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/Home.html'
            })
            .when('/match/add', {
                templateUrl: 'Views/Match/Add.html'
            })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            })
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

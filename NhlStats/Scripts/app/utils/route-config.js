nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/GameSelect.html'
            })
            .when('/NHL16/', {
                 templateUrl: 'Views/NHL16/Home.html'
             })
            .when('/NHL16/match/add', {
                templateUrl: 'Views/NHL16/Match/Add.html'
            })
            .when('/NHL16/statistics/:playerId',
            {
                templateUrl: 'Views/NHL16/Statistics/Player.html'
            })
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

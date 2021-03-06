/*!2017-03-23 *//*!2016-09-02 *//*!2016-09-02 *//*!2016-09-01 *//*!2016-09-01 *//*!2016-09-01 *//*!2016-09-01 *//*!2016-09-01 *//*!2016-09-01 *//*!2016-09-01 *//*!2016-08-31 *//*!2016-08-31 *//*!2016-08-31 *//*!2016-08-31 *//*!2016-08-31 *//*!2016-08-31 *//*!2016-08-31 *//*!2016-08-31 *//*!2016-08-31 *//*!2016-08-31 *//*!2016-08-31 *//*!2016-08-31 *//*!2016-08-30 *//*!2016-08-30 *//*!2016-08-30 *//*!2016-08-30 *//*!2016-08-30 *//*!2016-08-29 *//*!2016-08-29 *//*!2016-08-29 *//*!2016-08-29 *//*!2016-08-29 *//*!2016-08-29 *//*!2016-08-29 *//*!2016-08-29 *//*!2016-08-29 *//*!2016-08-29 *//*!2016-08-29 *//*!2016-08-29 *//*!2016-08-29 *//*!2016-08-29 *//*!2016-08-29 *//*!2016-08-25 *//*!2016-08-25 *//*!2016-08-25 *//*!2016-08-25 *//*!2016-08-25 *//*!2016-08-25 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-24 *//*!2016-08-23 *//*!2016-08-23 *//*!2016-08-23 *//*!2016-08-23 *//*!2016-08-23 *//*!2016-08-23 *//*!2016-08-23 *//*!2016-08-23 *//*!2016-08-23 *//*!2016-08-23 *//*!2016-08-23 *//*!2016-08-23 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 */var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);

var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);

nhlControllers.controller('matchController', ['apiClient', '$q', function (apiClient, $q) {

    $scope.init(function() {
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    });
    $scope.getLatestMatches(function () {
        apiClient.getAllMatches()
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    });

}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);

var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);

nhlControllers.controller('matchController', ['apiClient', '$q', function (apiClient, $q) {

    $scope.init(function() {
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    });
    $scope.getLatestMatches(function () {
        apiClient.getAllMatches()
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    });

}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);

var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);

nhlControllers.controller('matchController', ['apiClient', '$q', function (apiClient, $q) {

    $scope.init(function () {
        console.log('init');
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    });
    $scope.getLatestMatches(function () {
        apiClient.getAllMatches()
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    });

}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);

var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);

nhlControllers.controller('matchController', ['apiClient', '$q', function (apiClient, $q) {
    console.log('init');
    $scope.init(function () {
   
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    });
    $scope.getLatestMatches(function () {
        apiClient.getAllMatches()
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    });

}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);

var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);

nhlControllers.controller('matchController', ['apiClient', '$q', function (apiClient, $q) {

    $scope.init(function () {
        console.log('init');
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    });
    $scope.getLatestMatches(function () {
        apiClient.getAllMatches()
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    });

}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);

var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);

nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {

    $scope.init(function () {
        console.log('init');
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    });
    $scope.getLatestMatches(function () {
        apiClient.getAllMatches()
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    });

}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);

var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {

    $scope.init(function () {
        console.log('init');
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    });
    $scope.getLatestMatches(function () {
        apiClient.getAllMatches()
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    });

}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);

var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    console.log($scope);
    $scope.init(function () {
        console.log('init');
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    });
    $scope.getLatestMatches(function () {
        apiClient.getAllMatches()
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    });

}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);

var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlApp.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    console.log($scope);
    $scope.init(function () {
        console.log('init');
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    });
    $scope.getLatestMatches(function () {
        apiClient.getAllMatches()
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    });

}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);

var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    console.log($scope);
    $scope.init(function () {
        console.log('init');
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    });
    $scope.getLatestMatches(function () {
        apiClient.getAllMatches()
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    });

}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);

var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    console.log($scope);
    function init() {
        console.log('init');
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    };
    $scope.getLatestMatches(function () {
        apiClient.getAllMatches()
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    });

}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);

var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    console.log($scope);
    function init() {
        console.log('init');
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    };
    $scope.getLatestMatches(function () {
        apiClient.getAllMatches()
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    });

}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';
    console.log('apiclient');

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
console.log('in app');
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    console.log($scope);
    function init() {
        console.log('init');
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    };
    $scope.getLatestMatches(function () {
        apiClient.getAllMatches()
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    });

}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';
    console.log('apiclient');

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    console.log($scope);
    function init() {
        console.log('init');
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    };
    $scope.getLatestMatches(function () {
        apiClient.getAllMatches()
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            });
    });

}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';
    console.log('apiclient');

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    console.log($scope);
    function init() {
        console.log('init');
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    };

}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';
    console.log('apiclient');

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.init(function () {
        console.log('init');
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    });
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';
    console.log('apiclient');

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.init(function () {
        console.log('init');
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    });
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.init = function () {
        console.log('init');
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    });
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.init = function () {
        console.log('init');
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.init = function () {
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response[0].content;
            })
            .catch(function (error) {
                return error;
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.init = function () {
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
                return error;
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.init = function () {
        apiClient.getAllTeams()
            .then(function(response) {
                $scope.teams = response;
            })
            .catch(function (error) {
                return error;
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.init = function () {
        $q.all[apiClient.getAllTeams(), apiClient.getAllPlayers()]
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.players = responses[1];

            })
            .catch(function (error) {
                return error;
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.players = responses[1];
            })
            .catch(function (error) {
                return error;
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        console.log('hej');
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.players = responses[1];
            })
            .catch(function (error) {
                return error;
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.players = responses[1];
                $scope.playerOne = players[0];
                $scope.playerTwo = players[1];
            })
            .catch(function (error) {
                return error;
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.players = responses[1];
                $scope.playerOne = $scope.players[0];
                $scope.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.teamOne = $scope.teams[0];
                $scope.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.playerOne = $scope.players[0];
                $scope.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.teamOne = $scope.teams[0];
                $scope.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.playerOne = $scope.players[0];
                $scope.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.teamOne = $scope.teams[0];
                $scope.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.playerOne = $scope.players[0];
                $scope.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.addMatch = function() {

    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.teamOne = $scope.teams[0].TeamId;
                $scope.teamTwo = $scope.teams[1].TeamId;

                $scope.players = responses[1];

                $scope.playerOne = $scope.players[0].PlayerId;
                $scope.playerTwo = $scope.players[1].PlayerId;
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.addMatch = function() {

    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.teamOne = $scope.teams[0].TeamId;
                $scope.teamTwo = $scope.teams[1].TeamId;

                $scope.players = responses[1];

                $scope.playerOne = $scope.players[0].PlayerId;
                $scope.playerTwo = $scope.players[1].PlayerId;
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.addMatch = function() {
        if (!$scope.match.$IsValid) {
            return;
        }
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.teamOne = $scope.teams[0].TeamId;
                $scope.teamTwo = $scope.teams[1].TeamId;

                $scope.players = responses[1];

                $scope.match.playerOneId = $scope.players[0].PlayerId;
                $scope.match.playerTwoId = $scope.players[1].PlayerId;
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.addMatch = function() {
        if (!$scope.match.$IsValid) {
            return;
        }
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.match = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.teamOne = $scope.teams[0].TeamId;
                $scope.teamTwo = $scope.teams[1].TeamId;

                $scope.players = responses[1];

                $scope.match.playerOneId = $scope.players[0].PlayerId;
                $scope.match.playerTwoId = $scope.players[1].PlayerId;
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.addMatch = function() {
        if (!$scope.match.$IsValid) {
            return;
        }
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.match = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.match.teamOne = $scope.teams[0].TeamId;
                $scope.match.teamTwo = $scope.teams[1].TeamId;

                $scope.players = responses[1];

                $scope.match.playerOneId = $scope.players[0].PlayerId;
                $scope.match.playerTwoId = $scope.players[1].PlayerId;
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.addMatch = function() {
        if (!$scope.match.$IsValid) {
            return;
        }
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.match = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.match.teamOne = $scope.teams[0].TeamId;
                $scope.match.teamTwo = $scope.teams[1].TeamId;

                $scope.players = responses[1];

                $scope.match.playerOneId = $scope.players[0].PlayerId;
                $scope.match.playerTwoId = $scope.players[1].PlayerId;
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.addMatch = function() {
        if (!$scope.match.$IsValid) {
            return;
        }
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.match = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.match.teamOne = $scope.teams[0].TeamId;
                $scope.match.teamTwo = $scope.teams[1].TeamId;

                $scope.players = responses[1];

                $scope.match.playerOneId = $scope.players[0].PlayerId.value;
                $scope.match.playerTwoId = $scope.players[1].PlayerId.value;
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.addMatch = function() {
        if (!$scope.match.$IsValid) {
            return;
        }
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.match = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.match.teamOne = $scope.teams[0].TeamId;
                $scope.match.teamTwo = $scope.teams[1].TeamId;

                $scope.players = responses[1];

                $scope.match.playerOneId = $scope.players[0];
                $scope.match.playerTwoId = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.addMatch = function() {
        if (!$scope.match.$IsValid) {
            return;
        }
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.match = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.match.teamOne = $scope.teams[0];
                $scope.match.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.match.playerOneId = $scope.players[0];
                $scope.match.playerTwoId = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.addMatch = function() {
        if (!$scope.match.$IsValid) {
            return;
        }
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.match = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.match.teamOneId = $scope.teams[0];
                $scope.match.teamTwoId = $scope.teams[1];

                $scope.players = responses[1];

                $scope.match.playerOneId = $scope.players[0];
                $scope.match.playerTwoId = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.addMatch = function() {
        if (!$scope.match.$IsValid) {
            return;
        }
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.match = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.match.teamOneId = $scope.teams[0];
                $scope.match.teamTwoId = $scope.teams[1];

                $scope.players = responses[1];

                $scope.match.playerOneId = $scope.players[0];
                $scope.match.playerTwoId = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.match.teamOneScore = 0;
        $scope.match.teamTwoScore = 0;
    };

    $scope.addMatch = function() {
        if (!$scope.match.$IsValid) {
            return;
        }
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.match = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.match.teamOne = $scope.teams[0];
                $scope.match.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.match.playerOneId = $scope.players[0];
                $scope.match.playerTwoId = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.match.teamOneScore = 0;
        $scope.match.teamTwoScore = 0;
    };

    $scope.addMatch = function() {
        if (!$scope.match.$IsValid) {
            return;
        }
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.match = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.match.teamOneId = $scope.teams[0];
                $scope.match.teamTwoId = $scope.teams[1];

                $scope.players = responses[1];

                $scope.match.playerOneId = $scope.players[0];
                $scope.match.playerTwoId = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.match.teamOneScore = 0;
        $scope.match.teamTwoScore = 0;
    };

    $scope.addMatch = function() {
        if (!$scope.match.$IsValid) {
            return;
        }
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.match = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.match.teamOneId = $scope.teams[0];
                $scope.match.teamTwoId = $scope.teams[1];

                $scope.players = responses[1];

                $scope.match.playerOneId = $scope.players[0];
                $scope.match.playerTwoId = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.match.teamOneScore = 0;
        $scope.match.teamTwoScore = 0;
    };

    $scope.addMatch = function() {
        if (!$scope.match.$IsValid) {
            return;
        }
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.match = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.match.teamOneId = $scope.teams[0];
                $scope.match.teamTwoId = $scope.teams[1];

                $scope.players = responses[1];

                $scope.match.playerOneId = $scope.players[0];
                $scope.match.playerTwoId = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.match.teamOneScore = 0;
        $scope.match.teamTwoScore = 0; 
    };

    $scope.addMatch = function() {
        if (!$scope.match.$IsValid) {
            return;
        }
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
//nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
//    $scope.match = {};
//    $scope.init = function () {
//        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
//            .then(function(responses) {
//                $scope.teams = responses[0];
//                $scope.match.teamOneId = $scope.teams[0];
//                $scope.match.teamTwoId = $scope.teams[1];

//                $scope.players = responses[1];

//                $scope.match.playerOneId = $scope.players[0];
//                $scope.match.playerTwoId = $scope.players[1];
//            })
//            .catch(function (error) {
//                return error;
//            });
//        $scope.match.teamOneScore = 0;
//        $scope.match.teamTwoScore = 0; 
//    };

//    $scope.addMatch = function() {
//        if (!$scope.match.$IsValid) {
//            return;
//        }
//    };
//}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.match = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.match.teamOneId = $scope.teams[0];
                $scope.match.teamTwoId = $scope.teams[1];

                $scope.players = responses[1];

                $scope.match.playerOneId = $scope.players[0];
                $scope.match.playerTwoId = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.match.teamOneScore = 0;
        $scope.match.teamTwoScore = 0; 
    };

    $scope.addMatch = function() {
        if (!$scope.match.$IsValid) {
            return;
        }
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.match = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.match.teamOne = $scope.teams[0];
                $scope.match.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.match.playerOne = $scope.players[0];
                $scope.match.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.match.teamOneScore = 0;
        $scope.match.teamTwoScore = 0; 
    };

    $scope.addMatch = function() {
        if (!$scope.match.$IsValid) {
            return;
        }
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.match = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0; 
    };

    $scope.addMatch = function() {
        if (!$scope.match.$IsValid) {
            return;
        }
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function(responses) {
                $scope.teams = responses[0];
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0; 
    };

    $scope.addMatch = function() {
        if (!$scope.match.$IsValid) {
            return;
        }
        $scope.match = {
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.playerOneScore,
            PlayerTwoScore: $scope.model.playerTwoScore
        };

    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0];
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {
        if (!$scope.match.$IsValid) {
            return;
        }
        $scope.match = {
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.playerOneScore,
            PlayerTwoScore: $scope.model.playerTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {

            }).catch(function (error) {
            });

    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0];
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {
        if (!$scope.model.$IsValid) {
            return;
        }
        $scope.match = {
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.playerOneScore,
            PlayerTwoScore: $scope.model.playerTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {

            }).catch(function (error) {
            });

    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0];
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.playerOneScore,
            PlayerTwoScore: $scope.model.playerTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {

            }).catch(function (error) {
            });

    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0];
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {

            }).catch(function (error) {
            });

    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0];
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {

            }).catch(function (error) {
            });

    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function () {
        return $http.post(baseUrl + '/match/post')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0];
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {

            }).catch(function (error) {
            });

    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function () {
        return $http.post(baseUrl + '/match/add')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0];
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {

            }).catch(function (error) {
            });

    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function () {
        return $http.post(baseUrl + '/matches/add')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0];
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {

            }).catch(function (error) {
            });

    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0];
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {

            }).catch(function (error) {
            });

    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0];
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                if (response === true) {
                    $scope.success = true;
                    $scope.showError = false;
                }
                else if (response === false) {
                    $scope.showError = true;
                }
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getLatestMatches()
            .then(function(response) {

            })
            .catch(function(error) {

            });
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0];
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                if (response === true) {
                    $scope.success = true;
                    $scope.showError = false;
                }
                else if (response === false) {
                    $scope.showError = true;
                }
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getLatestMatches()
            .then(function(response) {
                $scope.matches = response;
            })
            .catch(function(error) {

            });
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0];
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                if (response === true) {
                    $scope.success = true;
                    $scope.showError = false;
                }
                else if (response === false) {
                    $scope.showError = true;
                }
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response;
            })
            .catch(function(error) {

            });
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0];
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response;
            })
            .catch(function(error) {

            });
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0];
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1];

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', function (apiClient, $scope) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'Views/Home.html'
            }).
          when('/add', {
              templateUrl: 'Views/Match/Add.html'
          })
            .when('/statistics/playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            }).otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', function (apiClient, $scope) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'Views/Home.html'
            }).
          when('/add', {
              templateUrl: 'Views/Match/Add.html'
          })
            .when('/statistics/:playerName',
            {
                templateUrl: 'Views/Statistics/Player.html'
            }).otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', function (apiClient, $scope) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'Views/Home.html'
            }).
          when('/add', {
              templateUrl: 'Views/Match/Add.html'
          })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            }).otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', function (apiClient, $scope) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function() {

    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get', playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'Views/Home.html'
            }).
          when('/add', {
              templateUrl: 'Views/Match/Add.html'
          })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            }).otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.post(baseUrl + '/players/get', playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'Views/Home.html'
            }).
          when('/add', {
              templateUrl: 'Views/Match/Add.html'
          })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            }).otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get', playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'Views/Home.html'
            }).
          when('/add', {
              templateUrl: 'Views/Match/Add.html'
          })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            }).otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'Views/Home.html'
            }).
          when('/match/add', {
              templateUrl: 'Views/Match/Add.html'
          })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            }).otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'Views/Home.html'
            }).
          when('/match/add', {
              templateUrl: 'Views/Match/Add.html'
          }).when('/player/add', {
              templateUrl: 'Views/Player/Add.html'
          })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            }).otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/Home.html'
            })
            .when('/match/add', {
                templateUrl: 'Views/Match/Add.html'
            })
            .when('/player/add', {
                templateUrl: 'Views/Player/Add.html'
            })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            })
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider', '$route',
    function config($locationProvider, $routeProvider, $route) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/Home.html'
            })
            .when('/match/add', {
                templateUrl: 'Views/Match/Add.html'
            })
            .when('/player/add', {
                templateUrl: 'Views/Player/Add.html'
            })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            })
            .otherwise('/');

        $scope.reloadPage = $route.reload();
        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/Home.html'
            })
            .when('/match/add', {
                templateUrl: 'Views/Match/Add.html'
            })
            .when('/player/add', {
                templateUrl: 'Views/Player/Add.html'
            })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            })
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function() {
        if (!$scope.player.$valid) {
            $scope.showError = true;
            return;
        }
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/Home.html'
            })
            .when('/match/add', {
                templateUrl: 'Views/Match/Add.html'
            })
            .when('/player/add', {
                templateUrl: 'Views/Player/Add.html'
            })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            })
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.player.$valid) {
            return;
        }

        apiClient.addPlayer(player)
            .then(function (response) {

            })
            .catch(function (error) {

            });
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/Home.html'
            })
            .when('/match/add', {
                templateUrl: 'Views/Match/Add.html'
            })
            .when('/player/add', {
                templateUrl: 'Views/Player/Add.html'
            })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            })
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.player.$valid) {
            return;
        }

        apiClient.addPlayer(player)
            .then(function (response) {

            })
            .catch(function (error) {

            });
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/Home.html'
            })
            .when('/match/add', {
                templateUrl: 'Views/Match/Add.html'
            })
            .when('/player/add', {
                templateUrl: 'Views/Player/Add.html'
            })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            })
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.player.$valid) {
            return;
        }

        apiClient.addPlayer(player)
            .then(function (response) {

            })
            .catch(function (error) {

            });
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/Home.html'
            })
            .when('/match/add', {
                templateUrl: 'Views/Match/Add.html'
            })
            .when('/player/add', {
                templateUrl: 'Views/Player/Add.html'
            })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            })
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.player.$valid) {
            return;
        }

        apiClient.addPlayer($scope.player)
            .then(function (response) {

            })
            .catch(function (error) {

            });
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/Home.html'
            })
            .when('/match/add', {
                templateUrl: 'Views/Match/Add.html'
            })
            .when('/player/add', {
                templateUrl: 'Views/Player/Add.html'
            })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            })
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        apiClient.addPlayer($scope.player)
            .then(function (response) {

            })
            .catch(function (error) {

            });
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/Home.html'
            })
            .when('/match/add', {
                templateUrl: 'Views/Match/Add.html'
            })
            .when('/player/add', {
                templateUrl: 'Views/Player/Add.html'
            })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            })
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.player.$valid) {
            return;
        }

        apiClient.addPlayer($scope.player)
            .then(function (response) {

            })
            .catch(function (error) {

            });
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/Home.html'
            })
            .when('/match/add', {
                templateUrl: 'Views/Match/Add.html'
            })
            .when('/player/add', {
                templateUrl: 'Views/Player/Add.html'
            })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            })
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.player)
            .then(function (response) {

            })
            .catch(function (error) {

            });
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/Home.html'
            })
            .when('/match/add', {
                templateUrl: 'Views/Match/Add.html'
            })
            .when('/player/add', {
                templateUrl: 'Views/Player/Add.html'
            })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            })
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.player)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/Home.html'
            })
            .when('/match/add', {
                templateUrl: 'Views/Match/Add.html'
            })
            .when('/player/add', {
                templateUrl: 'Views/Player/Add.html'
            })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            })
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.player)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.player.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/Home.html'
            })
            .when('/match/add', {
                templateUrl: 'Views/Match/Add.html'
            })
            .when('/player/add', {
                templateUrl: 'Views/Player/Add.html'
            })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            })
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.player)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/Home.html'
            })
            .when('/match/add', {
                templateUrl: 'Views/Match/Add.html'
            })
            .when('/player/add', {
                templateUrl: 'Views/Player/Add.html'
            })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            })
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.addPlayer = false;
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.init = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.player)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/Home.html'
            })
            .when('/match/add', {
                templateUrl: 'Views/Match/Add.html'
            })
            .when('/player/add', {
                templateUrl: 'Views/Player/Add.html'
            })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            })
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.addPlayer = false;
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.player)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.addPlayer = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
nhlApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Views/Home.html'
            })
            .when('/match/add', {
                templateUrl: 'Views/Match/Add.html'
            })
            .when('/player/add', {
                templateUrl: 'Views/Player/Add.html'
            })
            .when('/statistics/:playerId',
            {
                templateUrl: 'Views/Statistics/Player.html'
            })
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }
]);

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {
    $scope.addPlayer = false;
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.player)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.addPlayer = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };
    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.player)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.addPlayer = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.player)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.addPlayer = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.player)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.addPlayer = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.player)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.addPlayer = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.addPlayer = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.addNewPlayer = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', '$location', function ($http, $location) {
    var baseUrl = $location.$$absUrl + '/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', '$location', function ($http, $location) {
    var baseUrl = $location.$$absUrl + '/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', '$location', function ($http, $location) {
    var baseUrl = $location.$$absUrl + '/sad';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', '$location', function ($http, $location) {
    var baseUrl = $location.$$absUrl + '/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', '$location', function ($http, $location) {
    var baseUrl = $location.$$absUrl + 'api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', 'queryParams', function (apiClient, $q, $scope, queryParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getLatestMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', 'queryParams', function (apiClient, $q, $scope, queryParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', 'queryParams', function (apiClient, $q, $scope, queryParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getAllMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getall/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', 'queryParams', function (apiClient, $q, $scope, queryParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getall/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', 'queryParams', function (apiClient, $q, $scope, queryParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches(queryParams)
            .then(function (response) {
                $scope.matches = response.content;
            })
            .catch(function (error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getall/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches(queryParams)
            .then(function (response) {
                $scope.matches = response.content;
            })
            .catch(function (error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getall/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }

    $scope.getPlayerMatches = function (playerId) {
        apiClient.getPlayerMatches(playerId)
            .then(function (response) {
                $scope.matches = response.content;
            })
            .catch(function (error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getall/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }

    $scope.getPlayerMatches = function (playerId) {
        apiClient.getPlayerMatches(playerId)
            .then(function (response) {
                $scope.matches = response.content;
            })
            .catch(function (error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope','$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }

    $scope.getPlayerMatches = function (playerId) {
        apiClient.getPlayerMatches(playerId)
            .then(function (response) {
                $scope.matches = response.content;
            })
            .catch(function (error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope','$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($routeParams.PlayerId)
            .then(function (response) {
                $scope.matches = response.content;
            })
            .catch(function (error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope','$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($routeParams.playerId)
            .then(function (response) {
                $scope.matches = response.content;
            })
            .catch(function (error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope','$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($routeParams.playerId)
            .then(function (response) {
                $scope.matches = response.content;
            })
            .catch(function (error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope','$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
            })
            .catch(function (error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope','$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
            })
            .catch(function (error) {

            });
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope','$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function() {
        apiClient.getAllMatches()
            .then(function(response) {
                $scope.matches = response.content;
            })
            .catch(function(error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function() {
        $scope.matchesToShow += 10;
    }
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
            })
            .catch(function (error) {

            });
    }

    $scope.getTeamStatistics = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllTeams])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.teams = responses[1].content;
                calculateTeamStats();
            })
            .catch(function (error) {

            });
    };

    function calculateTeamStats() {
        
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
            })
            .catch(function (error) {

            });
    }

    $scope.getTeamStatistics = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllTeams])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.teams = responses[1].content;
                calculateTeamStats();
            })
            .catch(function (error) {

            });
    };

    function calculateTeamStats() {
        
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getTeamStatistics = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllTeams])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.teams = responses[1].content;
                calculateTeamStats();
            })
            .catch(function (error) {

            });
    };

    function calculateTeamStats() {

    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getTeamStatistics = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllTeams])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.teams = responses[1].content;
                calculateTeamStats();
            })
            .catch(function (error) {

            });
    };

    function calculateTeamStats() {

    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
                angular.forEach($scope.players, function (player) {
                    var sum = player.Wins + player.Losses;
                    player.totalMatches = parseFloat(sum);
                });
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getTeamStatistics = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllTeams])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.teams = responses[1].content;
                calculateTeamStats();
            })
            .catch(function (error) {

            });
    };

    function calculateTeamStats() {

    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
                angular.forEach($scope.players, function (player) {
                    var sum = player.Wins + player.Losses;
                    player.totalMatches = sum.toString();
                });
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getTeamStatistics = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllTeams])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.teams = responses[1].content;
                calculateTeamStats();
            })
            .catch(function (error) {

            });
    };

    function calculateTeamStats() {

    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
                angular.forEach($scope.players, function (player) {
                    var sum = player.Wins + player.Losses;
                    player.totalMatches = parseFloat(sum);
                });
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getTeamStatistics = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllTeams])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.teams = responses[1].content;
                calculateTeamStats();
            })
            .catch(function (error) {

            });
    };

    function calculateTeamStats() {

    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
                angular.forEach($scope.players, function (player) {
                    var sum = player.Wins + player.Losses;
                    player.totalMatches = parseFloat(sum);
                });
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getTeamStatistics = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllTeams])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.teams = responses[1].content;
                calculateTeamStats();
            })
            .catch(function (error) {

            });
    };

    function calculateTeamStats() {

    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                angular.forEach($scope.players, function (player) {
                    var sum = player.Wins + player.Losses;
                    player.totalMatches = parseFloat(sum);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse' : true },
        { 'filterType': 'wins', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'losses', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var wins = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var losses = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.wins = parseFloat(wins);
                    player.losses = parseFloat(losses);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse' : true },
        { 'filterType': 'wins', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'losses', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var wins = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var losses = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.wins = parseFloat(wins);
                    player.losses = parseFloat(losses);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse': true },
        { 'filterType': 'wins', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'losses', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var wins = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var losses = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.wins = parseFloat(wins);
                    player.losses = parseFloat(losses);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse': true },
        { 'filterType': 'wins', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'losses', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                if ($scope.matches.length < $scope.matchesToShow) {
                    $scope.matchesToShow = $scope.matches.length;
                }
                if ($scope.players.length < $scope.playersToShow) {
                    $scope.playersToShow = $scope.players.length;
                }

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var wins = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var losses = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.wins = parseFloat(wins);
                    player.losses = parseFloat(losses);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse': true },
        { 'filterType': 'wins', 'filterText': 'Wins', 'reverse': true },
        { 'filterType': 'losses', 'filterText': 'Losses', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                if ($scope.matches.length < $scope.matchesToShow) {
                    $scope.matchesToShow = $scope.matches.length;
                }
                if ($scope.players.length < $scope.playersToShow) {
                    $scope.playersToShow = $scope.players.length;
                }

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var winRatio = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var lossRatio = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.winRatio = parseFloat(winRatio);
                    player.lossRatio = parseFloat(lossRatio);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse': true },
        { 'filterType': 'wins', 'filterText': 'Wins', 'reverse': true },
        { 'filterType': 'losses', 'filterText': 'Losses', 'reverse': true },
        { 'filterType': 'winRatio', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'lossRatio', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                if ($scope.matches.length < $scope.matchesToShow) {
                    $scope.matchesToShow = $scope.matches.length;
                }
                if ($scope.players.length < $scope.playersToShow) {
                    $scope.playersToShow = $scope.players.length;
                }

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var winRatio = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var lossRatio = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.winRatio = parseFloat(winRatio);
                    player.lossRatio = parseFloat(lossRatio);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse': true },
        { 'filterType': 'wins', 'filterText': 'Wins', 'reverse': true },
        { 'filterType': 'losses', 'filterText': 'Losses', 'reverse': true },
        { 'filterType': 'winRatio', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'lossRatio', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                if ($scope.matches.length < $scope.matchesToShow) {
                    $scope.matchesToShow = $scope.matches.length;
                }
                if ($scope.players.length < $scope.playersToShow) {
                    $scope.playersToShow = $scope.players.length;
                }

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var winRatio = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var lossRatio = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.winRatio = parseFloat(winRatio);
                    player.lossRatio = parseFloat(lossRatio);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse': true },
        { 'filterType': 'wins', 'filterText': 'Wins', 'reverse': true },
        { 'filterType': 'losses', 'filterText': 'Losses', 'reverse': true },
        { 'filterType': 'winRatio', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'lossRatio', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                if ($scope.matches.length < $scope.matchesToShow) {
                    $scope.matchesToShow = $scope.matches.length;
                }
                if ($scope.players.length < $scope.playersToShow) {
                    $scope.playersToShow = $scope.players.length;
                }

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var winRatio = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var lossRatio = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.Wins = parseFloat(player.Wins);
                    player.Losses = parseFloat(player.Losses);
                    player.winRatio = parseFloat(winRatio);
                    player.lossRatio = parseFloat(lossRatio);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore,
            Overtime: $scope.model.overtime,
            Shootout: $scope.model.shootout
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse': true },
        { 'filterType': 'Wins', 'filterText': 'Wins', 'reverse': true },
        { 'filterType': 'Losses', 'filterText': 'Losses', 'reverse': true },
        { 'filterType': 'winRatio', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'lossRatio', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                if ($scope.matches.length < $scope.matchesToShow) {
                    $scope.matchesToShow = $scope.matches.length;
                }
                if ($scope.players.length < $scope.playersToShow) {
                    $scope.playersToShow = $scope.players.length;
                }

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var winRatio = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var lossRatio = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.Wins = parseFloat(player.Wins);
                    player.Losses = parseFloat(player.Losses);
                    player.winRatio = parseFloat(winRatio);
                    player.lossRatio = parseFloat(lossRatio);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {};
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore,
            Overtime: $scope.model.overtime ? $scope.model.overtime === undefined : false,
            Shootout: $scope.model.shootout ? $scope.model.shootout === undefined : false
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse': true },
        { 'filterType': 'Wins', 'filterText': 'Wins', 'reverse': true },
        { 'filterType': 'Losses', 'filterText': 'Losses', 'reverse': true },
        { 'filterType': 'winRatio', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'lossRatio', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                if ($scope.matches.length < $scope.matchesToShow) {
                    $scope.matchesToShow = $scope.matches.length;
                }
                if ($scope.players.length < $scope.playersToShow) {
                    $scope.playersToShow = $scope.players.length;
                }

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var winRatio = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var lossRatio = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.Wins = parseFloat(player.Wins);
                    player.Losses = parseFloat(player.Losses);
                    player.winRatio = parseFloat(winRatio);
                    player.lossRatio = parseFloat(lossRatio);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {
        overtime: false,
        shootout: false
    };
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore,
            Overtime: $scope.model.overtime ? $scope.model.overtime === undefined : false,
            Shootout: $scope.model.shootout ? $scope.model.shootout === undefined : false
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse': true },
        { 'filterType': 'Wins', 'filterText': 'Wins', 'reverse': true },
        { 'filterType': 'Losses', 'filterText': 'Losses', 'reverse': true },
        { 'filterType': 'winRatio', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'lossRatio', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                if ($scope.matches.length < $scope.matchesToShow) {
                    $scope.matchesToShow = $scope.matches.length;
                }
                if ($scope.players.length < $scope.playersToShow) {
                    $scope.playersToShow = $scope.players.length;
                }

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var winRatio = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var lossRatio = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.Wins = parseFloat(player.Wins);
                    player.Losses = parseFloat(player.Losses);
                    player.winRatio = parseFloat(winRatio);
                    player.lossRatio = parseFloat(lossRatio);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {
        overtime: false,
        shootout: false
    };
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore,
            Overtime: $scope.model.overtime,
            Shootout: $scope.model.shootout 
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse': true },
        { 'filterType': 'Wins', 'filterText': 'Wins', 'reverse': true },
        { 'filterType': 'Losses', 'filterText': 'Losses', 'reverse': true },
        { 'filterType': 'winRatio', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'lossRatio', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                if ($scope.matches.length < $scope.matchesToShow) {
                    $scope.matchesToShow = $scope.matches.length;
                }
                if ($scope.players.length < $scope.playersToShow) {
                    $scope.playersToShow = $scope.players.length;
                }

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var winRatio = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var lossRatio = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.Wins = parseFloat(player.Wins);
                    player.Losses = parseFloat(player.Losses);
                    player.winRatio = parseFloat(winRatio);
                    player.lossRatio = parseFloat(lossRatio);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {
        overtime: 0,
        shootout: 0
    };
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore,
            Overtime: $scope.model.overtime,
            Shootout: $scope.model.shootout 
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse': true },
        { 'filterType': 'Wins', 'filterText': 'Wins', 'reverse': true },
        { 'filterType': 'Losses', 'filterText': 'Losses', 'reverse': true },
        { 'filterType': 'winRatio', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'lossRatio', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                if ($scope.matches.length < $scope.matchesToShow) {
                    $scope.matchesToShow = $scope.matches.length;
                }
                if ($scope.players.length < $scope.playersToShow) {
                    $scope.playersToShow = $scope.players.length;
                }

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var winRatio = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var lossRatio = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.Wins = parseFloat(player.Wins);
                    player.Losses = parseFloat(player.Losses);
                    player.winRatio = parseFloat(winRatio);
                    player.lossRatio = parseFloat(lossRatio);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {
        overtime: 1,
        shootout: 0
    };
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore,
            Overtime: $scope.model.overtime,
            Shootout: $scope.model.shootout 
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse': true },
        { 'filterType': 'Wins', 'filterText': 'Wins', 'reverse': true },
        { 'filterType': 'Losses', 'filterText': 'Losses', 'reverse': true },
        { 'filterType': 'winRatio', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'lossRatio', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                if ($scope.matches.length < $scope.matchesToShow) {
                    $scope.matchesToShow = $scope.matches.length;
                }
                if ($scope.players.length < $scope.playersToShow) {
                    $scope.playersToShow = $scope.players.length;
                }

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var winRatio = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var lossRatio = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.Wins = parseFloat(player.Wins);
                    player.Losses = parseFloat(player.Losses);
                    player.winRatio = parseFloat(winRatio);
                    player.lossRatio = parseFloat(lossRatio);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {
        overtime: 0,
        shootout: 0
    };
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore,
            Overtime: $scope.model.overtime,
            Shootout: $scope.model.shootout 
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function () {

            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse': true },
        { 'filterType': 'Wins', 'filterText': 'Wins', 'reverse': true },
        { 'filterType': 'Losses', 'filterText': 'Losses', 'reverse': true },
        { 'filterType': 'winRatio', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'lossRatio', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                if ($scope.matches.length < $scope.matchesToShow) {
                    $scope.matchesToShow = $scope.matches.length;
                }
                if ($scope.players.length < $scope.playersToShow) {
                    $scope.playersToShow = $scope.players.length;
                }

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var winRatio = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var lossRatio = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.Wins = parseFloat(player.Wins);
                    player.Losses = parseFloat(player.Losses);
                    player.winRatio = parseFloat(winRatio);
                    player.lossRatio = parseFloat(lossRatio);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {
        overtime: 0,
        shootout: 0
    };
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore,
            Overtime: $scope.model.overtime,
            Shootout: $scope.model.shootout 
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse': true },
        { 'filterType': 'Wins', 'filterText': 'Wins', 'reverse': true },
        { 'filterType': 'Losses', 'filterText': 'Losses', 'reverse': true },
        { 'filterType': 'winRatio', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'lossRatio', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                if ($scope.matches.length < $scope.matchesToShow) {
                    $scope.matchesToShow = $scope.matches.length;
                }
                if ($scope.players.length < $scope.playersToShow) {
                    $scope.playersToShow = $scope.players.length;
                }

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var winRatio = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var lossRatio = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.Wins = parseFloat(player.Wins);
                    player.Losses = parseFloat(player.Losses);
                    player.winRatio = parseFloat(winRatio);
                    player.lossRatio = parseFloat(lossRatio);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {
        overtime: 0,
        shootout: 0
    };
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore,
            Overtime: $scope.model.overtime,
            Shootout: $scope.model.shootout 
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse': true },
        { 'filterType': 'Wins', 'filterText': 'Wins', 'reverse': true },
        { 'filterType': 'Losses', 'filterText': 'Losses', 'reverse': true },
        { 'filterType': 'winRatio', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'lossRatio', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                if ($scope.matches.length < $scope.matchesToShow) {
                    $scope.matchesToShow = $scope.matches.length;
                }
                if ($scope.players.length < $scope.playersToShow) {
                    $scope.playersToShow = $scope.players.length;
                }

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var winRatio = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var lossRatio = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.Wins = parseFloat(player.Wins);
                    player.Losses = parseFloat(player.Losses);
                    player.winRatio = parseFloat(winRatio);
                    player.lossRatio = parseFloat(lossRatio);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);
var nhlControllers = angular.module('nhlControllers', []);
var nhlServices = angular.module('nhlServices', []);
nhlControllers.controller('matchController', ['apiClient', '$q', '$scope', '$routeParams', function (apiClient, $q, $scope, $routeParams) {
    $scope.model = {
        overtime: 0,
        shootout: 0
    };
    $scope.success = false;
    $scope.showError = false;
    $scope.playerId = $routeParams.playerId;
    $scope.matchesToShow = 10;

    $scope.init = function () {
        $q.all([apiClient.getAllTeams(), apiClient.getAllPlayers()])
            .then(function (responses) {
                $scope.teams = responses[0].content;
                $scope.model.teamOne = $scope.teams[0];
                $scope.model.teamTwo = $scope.teams[1];

                $scope.players = responses[1].content;

                $scope.model.playerOne = $scope.players[0];
                $scope.model.playerTwo = $scope.players[1];
            })
            .catch(function (error) {
                return error;
            });
        $scope.model.teamOneScore = 0;
        $scope.model.teamTwoScore = 0;
    };

    $scope.addMatch = function () {

        $scope.match = {
            MatchId: null,
            PlayerOne: $scope.model.playerOne.PlayerId,
            PlayerTwo: $scope.model.playerTwo.PlayerId,
            TeamOne: $scope.model.teamOne.TeamId,
            TeamTwo: $scope.model.teamTwo.TeamId,
            PlayerOneScore: $scope.model.teamOneScore,
            PlayerTwoScore: $scope.model.teamTwoScore,
            Overtime: $scope.model.overtime,
            Shootout: $scope.model.shootout 
        };

        apiClient.addMatch($scope.match)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
            }).catch(function (error) {
                $scope.showError = true;
            });

    };


    $scope.getAllMatches = function () {
        apiClient.getAllMatches()
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.getPlayerMatches = function () {
        apiClient.getPlayerMatches($scope.playerId)
            .then(function (response) {
                $scope.matches = response.content;
                if ($scope.matchesToShow > $scope.matches.length) {
                    $scope.matchesToShow = $scope.matches.length;
                }
            })
            .catch(function (error) {

            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };
}]);
nhlControllers.controller('playerController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.init = function() {
        $scope.addNewPlayer = false;
        $scope.success = false;
        $scope.showError = false;
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getPlayer = function () {
        apiClient.getPlayer($routeParams.playerId)
            .then(function (response) {
                $scope.player = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.resetForm = function() {
        $scope.success = false;
        $scope.newPlayer.Name = '';
    }
}]);
nhlControllers.controller('nhlStartController', ['apiClient', '$q', '$scope', '$location', '$localStorage', function (apiClient, $q, $scope, $location, $localStorage) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse': true },
        { 'filterType': 'Wins', 'filterText': 'Wins', 'reverse': true },
        { 'filterType': 'Losses', 'filterText': 'Losses', 'reverse': true },
        { 'filterType': 'winRatio', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'lossRatio', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    var urlStates = $location.absUrl().split('/');
    if (urlStates.length >= 3) {
        var game = urlStates[3];
        $localStorage.game = game;
        $scope.game = game;
    }

    $scope.init = function () {
        $q.all([apiClient.getAllMatches($localStorage.game), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                if ($scope.matches.length < $scope.matchesToShow) {
                    $scope.matchesToShow = $scope.matches.length;
                }
                if ($scope.players.length < $scope.playersToShow) {
                    $scope.playersToShow = $scope.players.length;
                }

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var winRatio = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var lossRatio = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.Wins = parseFloat(player.Wins);
                    player.Losses = parseFloat(player.Losses);
                    player.winRatio = parseFloat(winRatio);
                    player.lossRatio = parseFloat(lossRatio);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse': true },
        { 'filterType': 'Wins', 'filterText': 'Wins', 'reverse': true },
        { 'filterType': 'Losses', 'filterText': 'Losses', 'reverse': true },
        { 'filterType': 'winRatio', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'lossRatio', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                if ($scope.matches.length < $scope.matchesToShow) {
                    $scope.matchesToShow = $scope.matches.length;
                }
                if ($scope.players.length < $scope.playersToShow) {
                    $scope.playersToShow = $scope.players.length;
                }

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var winRatio = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var lossRatio = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.Wins = parseFloat(player.Wins);
                    player.Losses = parseFloat(player.Losses);
                    player.winRatio = parseFloat(winRatio);
                    player.lossRatio = parseFloat(lossRatio);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
            })
            .catch(function (error) {
            });
    };

    $scope.addPlayer = function () {
        if (!$scope.playerForm.$valid) {
            return;
        }

        apiClient.addPlayer($scope.newPlayer)
            .then(function (response) {
                $scope.success = true;
                $scope.showError = false;
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
nhlControllers.controller('teamController', ['apiClient', '$scope', '$routeParams', function (apiClient, $scope, $routeParams) {

    $scope.getAllTeams = function () {
        apiClient.getAllTeams()
            .then(function (response) {
                $scope.teams = response.content;
            })
            .catch(function (error) {
            });
    }

    $scope.getTeam = function () {
        apiClient.getTeam($routeParams.teamId)
            .then(function (response) {
                $scope.team = response.content;
            })
            .catch(function () {
                
            });
    };
}]);
nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local/api';

    // Matches

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };


    this.getPlayerMatches = function (playerId) {
        return $http.get(baseUrl + '/matches/getallbyplayerid/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    this.addMatch = function (match) {
        return $http.post(baseUrl + '/matches/add', match)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Teams

    this.getAllTeams = function () {
        return $http.get(baseUrl + '/teams/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };

    // Players

    this.getAllPlayers = function () {
        return $http.get(baseUrl + '/players/getall')
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.getPlayer = function (playerId) {
        return $http.get(baseUrl + '/players/get/' + playerId)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
    this.addPlayer = function (player) {
        return $http.post(baseUrl + '/players/add/', player)
			.then(function (response) { return response.data })
			.catch(function (error) { return error });
    };
}]);
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

/*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-18 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 *//*!2016-08-16 */var nhlApp = angular.module('nhlApp', ['ngRoute', 'nhlControllers', 'nhlServices']);

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

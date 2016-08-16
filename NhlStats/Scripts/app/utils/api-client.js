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
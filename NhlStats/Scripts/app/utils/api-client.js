nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://gamestats.api.local/api';

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
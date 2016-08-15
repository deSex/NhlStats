nhlServices.service('apiClient', ['$http', function ($http) {
    var baseUrl = 'http://nhlstats.api.local';

    this.getAllMatches = function () {
        return $http.get(baseUrl + '/matches/getall')
			.then(function (response) { return response })
			.catch(function (error) { return error });
    };

}]);
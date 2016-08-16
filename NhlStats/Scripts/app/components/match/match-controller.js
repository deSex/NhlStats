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
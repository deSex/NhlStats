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
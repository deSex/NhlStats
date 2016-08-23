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
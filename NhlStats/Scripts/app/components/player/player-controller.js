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
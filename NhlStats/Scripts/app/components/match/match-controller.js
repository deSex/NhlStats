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
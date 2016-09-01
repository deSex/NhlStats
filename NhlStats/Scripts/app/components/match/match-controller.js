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
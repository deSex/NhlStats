nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.playersToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse': true },
        { 'filterType': 'Wins', 'filterText': 'Wins', 'reverse': true },
        { 'filterType': 'Losses', 'filterText': 'Losses', 'reverse': true },
        { 'filterType': 'winRatio', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'lossRatio', 'filterText': 'Loss ratio', 'reverse': true },
        { 'filterType': 'Goals', 'filterText': 'Goals', 'reverse': true },
        { 'filterType': 'gpm', 'filterText': 'Best GPM', 'reverse': true }
    ];
    $scope.selectedFilter = $scope.filters[0];

    $scope.init = function () {
        $q.all([apiClient.getAllMatches(), apiClient.getAllPlayers(), apiClient.getAllTeams()])
            .then(function (responses) {
                $scope.matches = responses[0].content;
                $scope.players = responses[1].content;
                $scope.teams = responses[2].content;

                if ($scope.matches.length < $scope.matchesToShow) {
                    $scope.matchesToShow = $scope.matches.length;
                }
                if ($scope.players.length < $scope.playersToShow) {
                    $scope.playersToShow = $scope.players.length;
                }

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var winRatio = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var lossRatio = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.Wins = parseFloat(player.Wins);
                    player.Losses = parseFloat(player.Losses);
                    player.winRatio = parseFloat(winRatio);
                    player.lossRatio = parseFloat(lossRatio);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
            });
    };

    $scope.getAllPlayers = function () {
        apiClient.getAllPlayers()
            .then(function (response) {
                $scope.players = response.content;
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
                $scope.newPlayer = null;
                $scope.getAllPlayers();
            })
            .catch(function (error) {
                $scope.showError = true;
            });
    }

    $scope.showMoreMatches = function () {
        $scope.matchesToShow += 10;
    };

    $scope.showLessMatches = function () {
        $scope.matchesToShow -= 10;
    };

    $scope.showMorePlayers = function () {
        $scope.playersToShow += 10;
    };

    $scope.showLessPlayers = function () {
        $scope.playersToShow -= 10;
    };
}]);
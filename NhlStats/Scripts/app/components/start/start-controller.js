nhlControllers.controller('startController', ['apiClient', '$q', '$scope', function (apiClient, $q, $scope) {
    $scope.model = {};
    $scope.addNewPlayer = false;
    $scope.success = false;
    $scope.showError = false;
    $scope.matchesToShow = 10;
    $scope.filters = [
        { 'filterType': 'name', 'filterText': 'Alphabetical', 'reverse': false },
        { 'filterType': 'totalMatches', 'filterText': 'Most active', 'reverse' : true },
        { 'filterType': 'wins', 'filterText': 'Win ratio', 'reverse': true },
        { 'filterType': 'losses', 'filterText': 'Loss ratio', 'reverse': true },
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

                angular.forEach($scope.players, function (player) {
                    var totalMatches = player.Wins + player.Losses;
                    var gpm = ((player.Goals / (player.Wins + player.Losses))).toFixed(2);
                    var wins = ((player.Wins / (player.Wins + player.Losses)) * 100).toFixed(2);
                    var losses = ((player.Losses / (player.Wins + player.Losses)) * 100).toFixed(2);

                    player.totalMatches = parseFloat(totalMatches);
                    player.gpm = parseFloat(gpm);
                    player.wins = parseFloat(wins);
                    player.losses = parseFloat(losses);
                    player.Goals = parseFloat(player.Goals);
                });
            })
            .catch(function (error) {
                return error;
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
}]);
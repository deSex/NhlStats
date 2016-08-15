nhlControllers.controller('matchController', ['apiClient', function (apiClient) {

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
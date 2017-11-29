var app = angular.module('stagesource', ['spotify']);

app.config(function (SpotifyProvider) {
    SpotifyProvider.setClientId('01ab276355dd41d0ab76073d69c87376');
    SpotifyProvider.setRedirectUri('file:///D:/Coding/StageSource/html/callback.html');
    SpotifyProvider.setScope('playlist-read-private');
    // If you already have an auth token
    SpotifyProvider.setAuthToken('8b4b5ab3ea8545d7865aa31fcc9d86b1');
});

app.controller('StageSourceController',['$scope', 'Spotify', function($scope, Spotify) {
    $scope.searchArtist = function(){
        Spotify.search($scope.artist, 'artist').then(function (data) {
            console.log(data);
        });
    }
}]);

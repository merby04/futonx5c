angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout ) {

  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/signup.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.signup = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  $scope.closeDaftar = function() {
    $scope.signup.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
    $scope.signup.hide();
  };

  $scope.daftar = function() {
    $scope.signup.show();
    $scope.modal.hide();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('BookingCtrl', function($scope, $stateParams, FutsalDB ) {
    $scope.futsals = FutsalDB.all();
})
.controller('FutsalCtrl', function($scope, $stateParams,FutsalDB) {
    $scope.futsals = FutsalDB.get($stateParams.futsalId);
})
.controller('jadwalCtrl', function($scope, $stateParams ) {
});

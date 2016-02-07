// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
   .state('app.tempat-futsal', {
      url: "/tempat-futsal",
      views: {
        'tab-futsal' :{
          templateUrl: "templates/tempat-futsal.html",
          controller: 'BookingCtrl'
        }
      }
    })

  .state('app.beranda', {
    url: "/beranda",
    views: {
      'tab-beranda': {
        templateUrl: "templates/beranda.html"
      }
    }
  })

  .state('app.tim-saya', {
    url: "/tim-saya",
    views: {
      'tab-mytim': {
        templateUrl: "templates/tim-saya.html"
      }
    }
  })
 .state('app.profile', {
      url: "/profile/:futsalId",
      views: {
        'tab-futsal' :{
          templateUrl: "templates/futsal-profile.html",
          controller: 'FutsalCtrl'
        }
      }
    })
  .state('app.playlists', {
    url: "/playlists",
    views: {
      'tab-playlists': {
        templateUrl: "templates/playlists.html",
        controller: 'PlaylistsCtrl'
      }
    }
  })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'tab-playlists': {
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
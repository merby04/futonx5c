// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.services', 'ngRoute', 'angular-jwt', 'angular-storage'])
.constant('CONFIG', {
  APIURL: "http://localhost:609/futonx5capi",
})
.config(function($stateProvider, $urlRouterProvider,$routeProvider, $httpProvider, jwtInterceptorProvider) {

  $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';        
  jwtInterceptorProvider.tokenGetter = ['FutsalArena', function(FutsalArena) {
        return localStorage.getItem('token');        
    }];
  $httpProvider.interceptors.push('jwtInterceptor'); 
  $stateProvider
   .state('starter', {
      url: "/starter",
      templateUrl: "templates/start-fullscreen.html",
      controller: 'AppCtrl',
      authorization: false
    }) 
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl',
    authorization: true
  })
   .state('app.tempat-futsal', {
      url: "/tempat-futsal",
      views: {
        'tab-futsal' :{
          templateUrl: "templates/tempat-futsal.html",
          controller: 'BookingCtrl'
        }
      },
      authorization: true
    })
  .state('app.beranda', {
    url: "/beranda",
    views: {
      'tab-beranda': {
        templateUrl: "templates/beranda.html"
      }
    }
  })
 .state('app.profil-saya', {
    url: "/profil-saya",
    views: {
      'tab-myprofil': {
        templateUrl: "templates/profil-saya.html"
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
  .state('app.buat-tim', {
    url: "/buat-tim",
    views: {
      'tab-mytim': {
        templateUrl: "templates/buat-tim.html"
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
    .state('app.jadwal', {
      url: "/jadwal/:futsalId/:lapanganId",
      views: {
        'tab-futsal': {
          templateUrl: "templates/jadwal.html",
          controller: 'jadwalCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/starter');
})
.run(function($rootScope, jwtHelper, store, $location,$ionicPlatform)
{
   $ionicPlatform.ready(function() {    
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {      
      StatusBar.styleDefault();
    }
    });   

    $rootScope.$on('$locationChangeStart', function (event, next, current) {            
            var token = store.get("token");                  
            if(!token)
            $location.path("/starter");            
            if(token)
            {
            var bool = jwtHelper.isTokenExpired(token);
            if(bool === true)
                $location.path("/starter");
            }
        });

   
});

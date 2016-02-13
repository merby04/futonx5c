angular.module('starter.controllers', [])
.controller('AppCtrl', function($scope, $ionicModal,jwtHelper, $timeout,$location,authFactory,store) {


    var token = store.get("token");    
    if(token)
    {
    var tokenPayload = jwtHelper.decodeToken(token);
    //los mandamos a la vista como user
    $scope.user = tokenPayload;
       console.log(tokenPayload);
    }

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
    $scope.hide();
  };
      //obtenemos el token en localStorage

  $scope.ceklogin = function(user)
    {                
        authFactory.login(user).then(function(res)
        {
            console.log(res.data);
            if(res.data && res.data.code == 0)
            {
                store.set('token', res.data.response.token);
                $location.path("/app/beranda");            
            }            
        });        
        //$scope.closeLogin();            
    }
  
  $scope.logout = function()
  {
     store.set('token', '');
      $location.path("/starter");
      $scope.login();
  }
  $scope.daftar = function() {
    $scope.signup.show();
    $scope.modal.hide();
  };

  $scope.hide = function()
  {
      $scope.hid = true;
  }
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
.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('BookingCtrl', function($scope, FutsalArena ) {

        FutsalArena.all().then(function(res)
        {            
            if(res.data && res.data.code == 0)
            {                
                $scope.futsals = res.data.response.futsalarena;
            }
        });
   
})
.controller('FutsalCtrl', function($scope, $stateParams,FutsalArena) {    
    FutsalArena.get($stateParams.futsalId).then(function(res)
        {       
            console.log(res.data);
            if(res.data && res.data.code == 0)
            {                        
                $scope.futsals = res.data.response.futsaldetails;          
                
            }
        });
})
.controller('jadwalCtrl', function($scope, $stateParams,FutsalArena ) {
    var data = {futid:$stateParams.futsalId,lapid:$stateParams.lapanganId}
    FutsalArena.jadwal(data).then(function(res)
        {       
            console.log(res.data);
            if(res.data && res.data.code == 0)
            {                        
                $scope.jadwals = res.data.response.jadwals;          
                
            }
        });
    $scope.list = [{},{}];
    $scope.filter = function(data,list){
        $scope.myFilter = {'day':data};                
        $scope.oke=data;
        
    };
    FutsalArena.srvday().then(function(res)
        {       
            console.log(res.data.timex);  
            var tg = [];  
            var servertime = res.data.timex;
            var serverdate = res.data.datex;
              //$scope.th =   $scope.serverdate.substr(0,4);
              //$scope.bl =   $scope.serverdate.substr(5,2);
             var dy =  serverdate.substr(8,2);
             
             var dy7 = parseFloat(serverdate.substr(8,2))+6;
             $scope.myFilter =  {'day':dy};
             for(var i=dy;i<=dy7;i++)
                  {
                    tg.push({'day': i});
                  }
              $scope.tg = tg;
                 
        });
              
});

angular.module('starter.services', [])
.factory("authFactory", ["$http", "$q", "CONFIG", function($http, $q, CONFIG)
{
  return {
    login: function(user)
    {
      var deferred;
            deferred = $q.defer();
            $http({
                method: 'POST',
                skipAuthorization: true,
                url: CONFIG.APIURL+'/auth/login',
                data: user,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then(function(res)
            {
                deferred.resolve(res);
            })
            .then(function(error)
            {
                deferred.reject(error);
            })
            return deferred.promise;
    }
  }
}])
.factory('FutsalArena', function($q,$http,CONFIG) {
  // Might use a resource here that returns a JSON array
  // Some fake testing data  
  return {
    srvday : function()
    {
        var deferred;
            deferred = $q.defer();
            $http({
                method: 'GET',
                skipAuthorization: false,
                url: CONFIG.APIURL+'/futsalarena/getServerTime'
            })
            .then(function(res)
            {                
                deferred.resolve(res);
            })
            .then(function(error)
            {                            
                deferred.reject(error);
            })
            return deferred.promise;
    },
    all: function() {            
            var deferred;
            deferred = $q.defer();
            $http({
                method: 'GET',
                skipAuthorization: false,
                url: CONFIG.APIURL+'/futsalarena'
            })
            .then(function(res)
            {                
                deferred.resolve(res);
            })
            .then(function(error)
            {                            
                deferred.reject(error);
            })
            return deferred.promise;
        
    },
    remove: function(id) {
      futsals.splice(futsals.indexOf(id), 1);
    },
    get: function(futsalId) {    
            var deferred;
            deferred = $q.defer();
            $http({
                method: 'GET',
                skipAuthorization: false,
                url: CONFIG.APIURL+'/futsalarena/details/'+futsalId
            })
            .then(function(res)
            {                
                deferred.resolve(res);
            })
            .then(function(error)
            {                            
                deferred.reject(error);
            })
            return deferred.promise;
      }
    ,
    jadwal: function(parameter) {    
            var deferred;
            deferred = $q.defer();
            $http({
                method: 'POST',
                skipAuthorization: false,
                data:parameter,
                url: CONFIG.APIURL+'/futsalarena/getSchedule'
            })
            .then(function(res)
            {                
                deferred.resolve(res);
            })
            .then(function(error)
            {                            
                deferred.reject(error);
            })
            return deferred.promise;
      }
  };
});

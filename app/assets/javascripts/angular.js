var app = angular.module('ImageApp', []);

app.controller('HeaderController', ['$http',
  function($http) {
    var controller = this;

    $http.get('/session').success(function(data){
      controller.current_user = data.current_user;
    });
  }]);

  

var app = angular.module('ImageApp', ['ngRoute']);

app.controller('HeaderController', ['$http',
  function($http) {
    var controller = this;

    $http.get('/session').success(function(data){
      controller.current_user = data.current_user;
      console.log(controller.current_user);
    });
  }]);

app.controller('ImageCtrl', ['$http', function($http){
  var authenticity_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  var ctrl = this;
}]);

  //routes
  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({enabled:true});

    $routeProvider.
      // Images Index
      when('/images',
      { templateUrl: '/angular_templates/images.html.erb',
          controller:  'ImageCtrl',
          controllerAs: 'img'
      // FORM PAGE
    }).when('/form',
        { templateUrl: '/angular_templates/form.html.erb',
          controller:  'MoodController',
          controllerAs: 'mood'
      // Image Show
    }).when('/images/:id',
        { templateUrl: '/angular_templates/images.html.erb',
          controller:  'ImageCtrl',
          controllerAs: 'img'


      // USER PROFILE PAGE
      }).when('/users/:id',
        { templateUrl: '/angular_templates/user.html',   ///SHOW ONE PAGE
          controller:  'HeaderController',
          controllerAs: 'header'
        });
      // }).otherwise(
      //   { redirectTo: '/'
      // });
   }]) ;

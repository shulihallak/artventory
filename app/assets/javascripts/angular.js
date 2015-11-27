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
  //Get all images
  this.getImages = function(){
    $http.get('/images').success(
      function(data){
        console.log(data);
        // ctrl.current_user_images = data.images;
      });
  };
  ctrl.getImages();
  //create image
  this.createImage = function(){
    ctrl.current_user_images.push({
      filename: this.filename,
      title: this.title,
      dateCreated: this.dateCreated
    });

    //post image properties
    $http.post('/images', {
      authenticity_token: authenticity_token,
      image: {
        filename: this.filename,
        title: this.title,
        dateCreated: this.dateCreated
      }
    }).success(function(imageData){
      console.log(imageData);

      //post editions
      $http.post('/images' + image.id + '/editions', {
        authenticity_token: authenticity_token,
        edition: {
          size: ctrl.size,
          number: ctrl.number,
          soldTo: ctrl.soldTo,
          saleDate: ctrl.saleDate,
          saleAmount: ctrl.saleAmount,
          numberRemaining: ctrl.numberRemaining

        }
      }).success(function(editiondata){
        image.editions.push(editiondata.edition);

        ctrl.filename = undefined;
        ctrl.title = undefined;
        ctrl.dateCreated = undefined;
        ctrl.size = undefined;
        ctrl.number = undefined;
        ctrl.soldTo = undefined;
        ctrl.saleDate = undefined;
        ctrl.saleAmount = undefined;
        ctrl.numberRemaining = undefined;
      });

      ctrl.current_user_images.pop();
      ctrl.current_user_images.push(image);
      ctrl.getImage();
    });
  };

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
    // }).when('/',
    //     { templateUrl: '/angular_templates/image_form.html.erb',
    //       controller:  'ImageCtrl',
    //       controllerAs: 'img'
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

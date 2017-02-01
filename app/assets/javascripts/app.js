var app = angular.module('app', ['ui.router', 'restangular']);

app.constant('_', window._);
app.run(function ($rootScope) {
  $rootScope._ = window._;
});

app.config(
  ["$httpProvider", "$stateProvider", "$urlRouterProvider", "RestangularProvider",
    function($httpProvider, $stateProvider, $urlRouterProvider, RestangularProvider) {
      // CSRF stuff
      var token = $('meta[name=csrf-token]').attr('content');
      $httpProvider
        .defaults
        .headers
        .common['X-CSRF-Token'] = token;


      
    }
  ]
);

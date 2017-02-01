var app = angular.module('app', ['ui.router', 'restangular', 'Devise']);

app.constant('_', window._);
app.run(function ($rootScope) {
  $rootScope._ = window._;
});

app.config(
  ["$httpProvider", "$stateProvider", "$urlRouterProvider", "RestangularProvider", 'AuthProvider',
    function($httpProvider, $stateProvider, $urlRouterProvider, RestangularProvider, AuthProvider) {
      // CSRF stuff
      var token = $('meta[name=csrf-token]').attr('content');
      $httpProvider
        .defaults
        .headers
        .common['X-CSRF-Token'] = token;

      // Devise


    }
  ]
);

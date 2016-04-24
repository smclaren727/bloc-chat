(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('landing', {
        url: '/',
        controller: 'LandingCtrl as landing',
        templateUrl: '/templates/landing.html'
      })

      .state('newroom', {
        url: '/',
        controller: 'NewRoomCtrl as newroom',
        templateUrl: '/templates/newroom.html'
      });
  }

  angular
    .module('blocChat',['ui.router','ui.bootstrap','firebase'])
    .config(config);
})();

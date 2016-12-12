'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'american.countries-setup',
  'american.product-setup',
  'american.shared-directives',
  'american.app-service'
])
.config(['$urlRouterProvider', function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/countries-setup');
}]);

'use strict';
(function() {
  angular.module('american.countries-setup', [])

  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('countries-setup', {
      url: '/countries-setup',
      templateUrl: 'views/countries-setup/countries-setup.html',
      controller: 'countriesSetupCtrl',
      controllerAs: 'vm'
    });
  }])
  .controller('countriesSetupCtrl', countriesSetupCtrl);

  countriesSetupCtrl.$inject = ['appService'];
  function countriesSetupCtrl(appService) {
    var vm = this;
    init();
    
    function init() {
      vm.countriesData = appService.getCountriesData();
    }
  }
})();

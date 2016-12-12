'use strict';
(function() {
  angular.module('american.product-setup', ['ngRoute'])

  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('product-setup', {
      url: '/product-setup',
      templateUrl: 'views/product-setup/product-setup.html',
      controller: 'productSetupCtrl',
      controllerAs: 'vm'
    });
  }])
  .controller('productSetupCtrl', productSetupCtrl);

  productSetupCtrl.$inject = ['appService'];
  function productSetupCtrl(appService) {
    var vm = this;
    init();

    function init() {
      vm.productsData = appService.getProductsData();
      vm.countriesList = appService.getCountriesData();
    }
  }
})();

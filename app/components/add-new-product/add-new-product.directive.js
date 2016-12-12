'use strict';
(function() {
  angular.module('american.directives.add-new-product', [])
  .directive('addNewProduct', addNewProduct);

  addNewProduct.$inject = [];
  function addNewProduct() {
    return {
      restrict: 'E',
      scope: {
        show: '='
      },
      templateUrl: 'components/add-new-product/add-new-product.tpl.html',
      controllerAs: 'vm',
      bindToController: true,
      controller: addNewProductCtrl,
      link: addNewProductLink
    }
  }

  function addNewProductCtrl() {

  }

  function addNewProductLink(scope, element, attrs, controllers) {

  }

})();

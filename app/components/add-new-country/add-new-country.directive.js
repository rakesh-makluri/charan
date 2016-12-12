'use strict';
(function() {
  angular.module('american.directives.add-new-country', [])
  .directive('addNewCountry', addNewCountry);

  addNewCountry.$inject = [];
  function addNewCountry() {
    return {
      restrict: 'E',
      scope: {
        show: '='
      },
      templateUrl: 'components/add-new-country/add-new-country.tpl.html',
      controllerAs: 'vm',
      bindToController: true,
      controller: addNewCountryCtrl,
      link: addNewCountryLink
    }
  }

  function addNewCountryCtrl() {

  }

  function addNewCountryLink(scope, element, attrs, controllers) {

  }


})();

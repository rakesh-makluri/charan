'use strict';
(function() {
  angular.module('american.directives.mdm-header', [])
  .directive('mdmHeader', mdmHeader);

  function mdmHeader() {
    return {
      restrict: 'E',
      templateUrl: 'components/mdm-header/mdm-header.tpl.html',
      controller: mdmHeaderCtrl,
      controllerAs: 'vm'
    }
  }

  mdmHeaderCtrl.$inject = ['$state'];

  function mdmHeaderCtrl($state) {
    var vm = this;
    this.$state = $state;
  }
})();

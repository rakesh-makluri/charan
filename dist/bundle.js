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

'use strict';
(function() {
  angular.module('american.shared-directives', [
    'american.directives.add-new-country',
    'american.directives.mdm-header',
    'american.directives.add-new-product'
  ])
})();

(function() {
  angular.module('american.app-service', [])
  .factory('appService', function() {
    var countriesData, productsData;
    var instance = {
      getCountriesData: getCountriesData,
      getProductsData: getProductsData,
      getSourceCodes: getSourceCodes,
      getLanguages: getLanguages
    }

    return instance;

    function getCountriesData() {
      if(countriesData) return countriesData;
      countriesData = [{
        country: 'United Kingdom',
        country_code: 'UK',
        language: ['EN']
      }, {
        country: 'Candad',
        country_code: 'CA',
        language: ['EN', 'FR']
      }, {
        country: 'Australia',
        country_code: 'AU',
        language: ['EN']
      }]
      return countriesData;
    }

    function getProductsData() {
      if (productsData) return productsData;
      productsData = [{
        product: 'Gold Card',
        product_code: 'A11',
        source_codes: ['SD001', 'DS10000002']
      }, {
        product: 'Blue Card',
        product_code: 'Z11',
        source_codes: ['D000001', 'B10000002']
      }, {
        product: 'Green Card',
        product_code: 'X12',
        source_codes: ['S000001', 'BC110000002']
      }]
      return productsData;
    }

    function getSourceCodes() {
      return ['SD001', 'DS10000002', 'D000001', 'B10000002', 'S000001', 'BC110000002'];
    }

    function getLanguages() {
      return [{
          language: 'English',
          code: 'EN'
        }, {
            language: 'French',
            code: 'FR'
        }, {
            language: 'Spanish',
            code: 'Sp'
        }, {
            language: 'Japanese',
            code: 'JP'
        }]
    }
  });
})();

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

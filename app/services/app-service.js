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

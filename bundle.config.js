// bundle.config.js
module.exports = {
  bundle: {
    main: {
      scripts: [
        './app/**/*.js'
      ],
      styles: './app/**/*.css'
    },
    vendor: {
      scripts: ['./bower_components/angular/angular.js',
              './bower_components/angular-loader/angular-loader.js',
              './bower_components/angular-ui-router/release/angular-ui-router.js',]
    }
  },
  copy: './content/**/*.{png,svg}'
};

var aurelia = require('aurelia-cli');
aurelia.command('bundle', {
  js: {
    "./appbundle.js" : {
      modules: [
        './**',
        'aurelia-bootstrapper',
        'github:aurelia/aurelia-router@0.11.0',
        'aurelia-http-client',
        'aurelia-validation',
        'github:aurelia/templating-binding@0.14.0',
        'github:aurelia/templating-resources@0.14.1',
        'github:aurelia/templating-router@0.15.0',
        'github:aurelia/loader-default@0.9.5',
        'github:aurelia/history-browser@0.7.0'
      ],
      options: {
        inject: true
      }
    }
  },
  template: {
    "./appbundle":{
      pattern: './*.html',
      options: {
        inject: true
      }
    }
  }
});

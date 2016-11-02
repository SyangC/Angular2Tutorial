(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>My First Angular 2 App</h1><br><h2>Does this work?</h2><br><h3>Yay!</h3>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
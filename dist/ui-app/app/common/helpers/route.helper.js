'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routerHelperProvider;
function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
  this.$get = RouterHelper;

  $locationProvider.html5Mode(true);

  function RouterHelper() {
    var hasOtherwise = false;

    return {
      configureStates: configureStates,
      configureOtherwise: configureOtherwise,
      redirect: redirect
    };

    function configureStates(states) {
      states.forEach(function (state) {
        $stateProvider.state(state);
      });
    }

    function configureOtherwise(otherwisePath) {
      if (otherwisePath && !hasOtherwise) {
        hasOtherwise = true;
        $urlRouterProvider.otherwise(otherwisePath);
      }
    }

    function redirect(from, to) {
      $urlRouterProvider.when(from, to);
    }
  }
};
//# sourceMappingURL=route.helper.js.map
'use strict';

export default function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
  this.$get = RouterHelper;

  $locationProvider.html5Mode(true);

  function RouterHelper() {
    let hasOtherwise = false;

    return {
      configureStates,
      configureOtherwise,
      redirect,
    };

    function configureStates(states) {
      states.forEach((state) => {
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

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createRoutes;
function createRoutes(routerHelper) {
  var getStates = function getStates() {
    return [{
      name: 'song',
      title: 'Song',
      url: '/ui/song',
      component: 'song'
    }];
  };

  routerHelper.configureStates(getStates());
  routerHelper.configureOtherwise('/ui/song');
};
//# sourceMappingURL=song.route.js.map
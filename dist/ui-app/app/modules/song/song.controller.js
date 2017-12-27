'use strict';

module.exports = function songController($scope, $timeout) {
  var self = this;
  self.song = {};
  self.display = false;
  self.moveSearch = false;

  $scope.$on('new.song', function (event, data) {
    Object.assign(self.song, data);
    self.moveSearch = true;
    _toggleDisplay();
  });

  var _toggleDisplay = function _toggleDisplay() {
    if (!self.display) {
      $timeout(function () {
        self.display = true;
      }, 1500);
    }
  };
};
//# sourceMappingURL=song.controller.js.map
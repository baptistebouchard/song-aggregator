'use strict';

module.exports = function songController($scope, $timeout) {
  var self = this;
  self.song = {};
  self.display = false;

  $scope.$on('new.song', function (event, data) {
    self.song = data;
    _toggleDisplay();
    $scope.$apply();
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
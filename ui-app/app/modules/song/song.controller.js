'use strict';

module.exports = function songController($scope, $timeout) {
  const self = this;
  self.song = {};
  self.display = false;

  $scope.$on('new.song', (event, data) => {
    self.song = data;
    _toggleDisplay();
    $scope.$apply();
  });

  const _toggleDisplay = function _toggleDisplay() {
    if (!self.display) {
      $timeout(() => {
        self.display = true;
      }, 1500);
    }
  };
};
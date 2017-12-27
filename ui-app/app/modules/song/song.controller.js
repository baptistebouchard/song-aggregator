'use strict';

module.exports = function songController($scope, $timeout) {
  const self = this;
  self.song = {};
  self.display = false;
  self.moveSearch = false;

  $scope.$on('new.song', (event, data) => {
    Object.assign(self.song, data);
    self.moveSearch = true;
    _toggleDisplay();
  });

  const _toggleDisplay = function _toggleDisplay() {
    if (!self.display) {
      $timeout(() => {
        self.display = true;
      }, 1500);
    }
  };
};
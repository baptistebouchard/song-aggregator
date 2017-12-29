'use strict';

module.exports = function songController($scope) {
  this.$onInit = function $onInit() {
    this.song = {};
    this.display = false;
  };

  this.setSong = function setSong({ song }) {
    Object.assign(this.song, song);
    this.display = true;
    $scope.$apply();
  };
};
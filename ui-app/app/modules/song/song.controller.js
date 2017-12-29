'use strict';

module.exports = function songController() {
  this.setSong = function setSong({ song }) {
    this.song = song;
  };
};
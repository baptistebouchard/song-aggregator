'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchController;
function searchController(songClient) {
  this.$onInit = function onInit() {
    this.title = '';
    this.artist = '';
  };

  this.setSong = function setSong(song) {
    this.song = song;
    this.onSongChange({ data: { song: song } });
  };

  this.enter = function enter(event) {
    if (event.keyCode === 13 && self.title && self.artist) {
      self.search();
    }
  };

  this.search = function search() {
    var _this = this;

    songClient.search(this.title, this.artist).then(function (song) {
      return _this.setSong(song);
    }).catch(_handleError);
  };

  var _handleError = function _setSongValues(error) {
    console.log('error');
  };
}
//# sourceMappingURL=search.controller.js.map
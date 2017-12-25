'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchController;
function searchController(songClient, songService, $animate) {
  var self = this;
  self.title = '';
  self.artist = '';

  self.enter = function enter(event) {
    if (event.keyCode === 13) {
      self.search();
    }
  };

  self.search = function search(event) {
    songClient.search(self.title, self.artist).then(songService.broadCastSong).catch(_handleError);
  };

  var _handleError = function _setSongValues(error) {
    console.log('error');
  };
}
//# sourceMappingURL=search.controller.js.map
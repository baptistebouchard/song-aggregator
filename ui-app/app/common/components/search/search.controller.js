'use strict';

export default function searchController(songClient, songService, $animate) {
  const self = this;
  self.title = '';
  self.artist = '';

  self.enter = function enter(event) {
    if (event.keyCode === 13) {
      self.search();
    }
  };

  self.search = function search(event) {
    songClient.search(self.title, self.artist)
      .then(songService.broadCastSong)
      .catch(_handleError);
  };

  const _handleError = function _setSongValues(error) {
    console.log('error');
  };
}
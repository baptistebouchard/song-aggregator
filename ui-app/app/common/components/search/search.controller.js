'use strict';

export default function searchController(songClient) {
  this.$onInit = function onInit() {
    this.title = '';
    this.artist = '';
  };

  this.setSong = function setSong(song) {
    this.song = song;
    this.onSongChange({ data: { song } });
  };

  this.enter = function enter(event) {
    if (event.keyCode === 13 && self.title && self.artist) {
      self.search();
    }
  };

  this.search = function search() {
    songClient.search(this.title, this.artist)
      .then((song) => this.setSong(song))
      .catch(_handleError);
  };

  const _handleError = function _setSongValues(error) {
    console.log('error');
  };
}
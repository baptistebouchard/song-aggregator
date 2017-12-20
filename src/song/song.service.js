'use strict';

const assert = require('assert');
const pSettle = require('p-settle');

module.exports = function createSongService(lyricsService, tabService, songMapper) {
  assert(lyricsService, 'lyricsService is required');
  assert(tabService, 'tabService is required');
  assert(songMapper, 'songMapper is required');

  /**
   * returns a song object aggregation
   */
  const getSong = function getSong({ title, artist }) {
    return pSettle([
      lyricsService.getByArtistAndTitle(artist, title),
      tabService.getByArtistAndTitle(artist, title),
    ])
      .then(([lyrics, tabs]) => songMapper.mapSong({ lyrics, tabs }));
  };

  return {
    getSong,
  };
};
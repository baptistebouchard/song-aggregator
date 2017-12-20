'use strict';
const pSettle = require('p-settle');
const ObjectMapper = require('object-mapper');
const songMapper = require('./song.mapper');

module.exports = function createSongService({ ovhClient }) {
  /**
   * returns a song object aggregation
   */
  const getSong = function getSong({ title, artist }) {
    return pSettle([
      ovhClient.getSongByArtistAndTitle(artist, title),
    ])
      .then(([lyrics]) => ObjectMapper({ lyrics }, songMapper));
  };

  return {
    getSong,
  };
};
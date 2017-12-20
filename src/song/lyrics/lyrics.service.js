'use strict';

const assert = require('assert');

module.exports = function createLyricsService(ovhClient) {
  assert(ovhClient, 'ovhClient is required');

  const getByArtistAndTitle = function getByArtistAndTitle(artist, title) {
    return ovhClient.getLyricsByArtistAndTitle(artist, title);
  };

  return {
    getByArtistAndTitle,
  };
};
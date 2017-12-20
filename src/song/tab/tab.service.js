'use strict';

const assert = require('assert');
const intersectionBy = require('lodash/intersectionBy');
const unionBy = require('lodash/unionBy');
const differenceBy = require('lodash/differenceBy');

module.exports = function createTabService(songsterClient) {
  assert(songsterClient, 'songsterClient is required');

  const _resolveTab = function _resolve(tabByTitle, tabByArtist) {
    const match = intersectionBy(tabByTitle, tabByArtist, 'id');
    const union = unionBy(tabByTitle, tabByArtist);
    const suggestions = differenceBy(union, match, 'id');
    return {
      match,
      suggestions,
    };
  };

  /**
   * Calls songster to get song by artist and title
   * Return matching result by tab id present in both response.
   * Suggests results if not.
   */
  const getByArtistAndTitle = function getByArtistAndTitle(artist, title) {
    return Promise.all([
      songsterClient.getTabByTitle(title),
      songsterClient.getTabByArtists([artist]),
    ])
      .then(([tabByTitle, tabByArtist]) => _resolveTab(tabByTitle, tabByArtist));
  };

  return {
    getByArtistAndTitle,
  };
};
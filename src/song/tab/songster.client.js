'use strict';

const assert = require('assert');
const request = require('prequest');
const debug = require('debug')('song-aggregator:songster.client');
const RessourceNotFoundError = require('../../errors/RessourceNotFound.error');

module.exports = function createSongsterClient(config) {
  assert(config, 'config is required');

  /**
   * calls songster by title
   */
  const getTabByTitle = function getTabByTitle(title) {
    return request({
      method: 'GET',
      uri: `${config.songster.baseUrl}/ra/songs.json`,
      qs: { pattern: title },
      json: true,
    })
      .catch((error) => {
        debug(error.message);
        throw new RessourceNotFoundError('unable to get tab by Title');
      });
  };

  /**
   * calls songster by artist
   */
  const getTabByArtists = function getTabByArtist(artists) {
    return request({
      method: 'GET',
      uri: `${config.songster.baseUrl}/ra/songs/byartists.json`,
      qs: { artists: artists.join() },
      json: true,
    })
      .catch((error) => {
        debug(error.message);
        throw new RessourceNotFoundError('unable to get tab by artists');
      });
  };

  return {
    getTabByTitle,
    getTabByArtists,
  };
};
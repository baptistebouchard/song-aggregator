'use strict';

const assert = require('assert');
const request = require('prequest');
const debug = require('debug')('song-aggregator:ovh.client');
const RessourceNotFoundError = require('../../errors/RessourceNotFound.error');

module.exports = function createOvhClient(config) {
  assert(config, 'config is required');

  /**
   * calls ovh by title and song
   * ovh sends 404 if song is not part of the catalogue.
   */
  const getLyricsByArtistAndTitle = function getLyricsByArtistAndTitle(artist, title) {
    return request({
      method: 'GET',
      uri: `${config.ovh.baseUrl}/${artist}/${title}`,
      json: true,
    })
      .catch((error) => {
        debug(error.message);
        throw new RessourceNotFoundError('unable to get song lyrics');
      });
  };

  return {
    getLyricsByArtistAndTitle,
  };
};
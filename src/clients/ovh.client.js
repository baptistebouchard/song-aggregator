'use strict';
const request = require('prequest');
const debug = require('debug')('song-aggregator:ovh.client');
const RessourceNotFoundError = require('../errors/RessourceNotFound.error');

module.exports = function createOvhClient(config) {

  /**
   * calls ovh by title and song
   * ovh sends 404 if song is not part of the catalogue.
   */
  const getSongByArtistAndTitle = function getSongByArtistAndTitle(artist, title) {
    return request({
      method: 'GET',
      uri: `${config.ovhBaseUrl}/${artist}/${title}`,
      json: true,
    })
      .catch((error) => {
        debug(error.message);
        throw new RessourceNotFoundError('unable to get song lyrics');
      });
  };

  return {
    getSongByArtistAndTitle,
  };
};
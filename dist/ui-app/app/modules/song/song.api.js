'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('song-aggregator.song').service('songApi', songApi);

function songApi() {

  /**
   * calls Api Songs Aggregator Endpoint
   * @returns {AxiosPromise}
   */
  var searchSong = function searchSong() {
    return (0, _axios2.default)({
      method: 'GET',
      uri: '/api/v1/songs',
      params: { title: title, artist: artist }
    });
  };

  return {
    searchSong: searchSong
  };
}
//# sourceMappingURL=song.api.js.map
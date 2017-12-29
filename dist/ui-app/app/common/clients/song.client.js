'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = songClient;
function songClient($http) {

  /**
   * calls Api Songs Aggregator Endpoint
   * @returns {AxiosPromise}
   */
  var search = function search(title, artist) {
    return $http({
      method: 'GET',
      url: '/v1/songs',
      params: { title: title, artist: artist }
    }).then(function (response) {
      return response.data;
    });
  };

  return {
    search: search
  };
}
//# sourceMappingURL=song.client.js.map
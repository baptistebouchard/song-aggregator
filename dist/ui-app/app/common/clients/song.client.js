'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = songClient;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function songClient() {

  /**
   * calls Api Songs Aggregator Endpoint
   * @returns {AxiosPromise}
   */
  var search = function search(title, artist) {
    return (0, _axios2.default)({
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
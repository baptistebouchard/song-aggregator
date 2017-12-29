'use strict';

export default function songClient($http) {

  /**
   * calls Api Songs Aggregator Endpoint
   * @returns {AxiosPromise}
   */
  const search = function search(title, artist) {
    return $http(
      {
        method: 'GET',
        url: '/v1/songs',
        params: { title, artist },
      }
    )
      .then((response) => response.data);
  };

  return {
    search
  };
}
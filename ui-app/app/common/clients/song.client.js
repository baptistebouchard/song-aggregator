'use strict';
import axios from 'axios';

export default function songClient() {

  /**
   * calls Api Songs Aggregator Endpoint
   * @returns {AxiosPromise}
   */
  const search = function search(title, artist) {
    return axios(
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
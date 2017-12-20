'use strict';

const assert = require('assert');

module.exports = function createTabUrlUtils(config) {
  assert(config, 'config is required');

  const getURlFromTabObject = function getURlFromTabObject(tabObject) {
    return `${config.songster.baseUrl}/wa/song?id=${tabObject.id}`;
  };

  return {
    getURlFromTabObject,
  };
};
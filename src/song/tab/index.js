'use strict';

const createTabMapper = require('./tab.mapper');
const createTabService = require('./tab.service');
const createSongsterClient = require('./songster.client');
const createTabUrlUtils = require('./tabUrl.utils');

module.exports = function createTabModule(config) {
  const songsterClient = createSongsterClient(config);
  const tabUrlUtils = createTabUrlUtils(config);
  return {
    tabMapper: createTabMapper(tabUrlUtils),
    tabService: createTabService(songsterClient),
  };
};
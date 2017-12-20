'use strict';

const createLyricsService = require('./lyrics.service');
const createOvhClient = require('./ovh.client');

module.exports = function createLyricsModule(config) {
  const ovhClient = createOvhClient(config);
  return {
    lyricsService: createLyricsService(ovhClient),
  };
};
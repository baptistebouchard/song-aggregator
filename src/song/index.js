'use strict';

const createSongService = require('./song.service');
const createSongQueryValidator = require('./song.queryValidator');
const createSongMapper = require('./song.mapper');
const createLyricsModule = require('./lyrics');
const createTabModule = require('./tab');

module.exports = function createSongModule(config) {
  const { lyricsService } = createLyricsModule(config);
  const { tabService, tabMapper } = createTabModule(config);
  const songMapper = createSongMapper(tabMapper);
  return {
    songService: createSongService(lyricsService, tabService, songMapper),
    songQueryValidator: createSongQueryValidator(),
  };
};
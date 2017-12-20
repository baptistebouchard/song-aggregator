'use strict';

module.exports = function createSongModule({ clients }) {
  const songService = require('./song.service');
  const songQueryValidator = require('./song.queryValidator');
  return {
    songService: songService(clients),
    songQueryValidator: songQueryValidator(),
  };
};